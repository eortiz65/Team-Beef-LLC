import { useState, useEffect } from 'react'
import { deleteAdmin, updateAdmin } from "../services/axios"
import { useNavigate } from "react-router-dom";

const AdminProfile = (props) => {
  let navigate = useNavigate()
  const [newPassword, updatePassword] = useState('')
  const [isChangedPassword, setChangedPassword] = useState(false)

  const initPasswordChange = () => {
    setChangedPassword(true)
  }
  const handleChange = (e) => {
    updatePassword(e.target.value)
  }
  const handleUpdate = async (e) => {
    e.preventDefault()
    let payload = {password: newPassword}
    setChangedPassword(false)

    await updateAdmin(e.target.id, payload)   
    navigate('/admins')

  }

  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteAdmin(e.target.id)
    props.apiCall()   
    navigate('/admins')
}

let passwordFormRender = (<div> <button className='update-admin-button' id={props.admin.id} onClick={initPasswordChange}>Update password</button></div>)

if (isChangedPassword) {
  passwordFormRender = (<div> 
    <input type="text" placeholder="new password" value={newPassword} onChange={handleChange}/>
    <button className='update-admin-button' id={props.admin.id} onClick={handleUpdate}>New password</button>
  </div>)
}
  return (
    <div className="admin">
      <div className="center-column">
        <div className="admin-profile" >
          <h1 className="admin">Admin Information</h1>
        </div>
        <div className="admin-profile">
          <h3 className="admin"><span className="text">Name:</span> {props.admin.name}</h3>
        </div>
        <div className="admin-profile">
          <h3 className="admin"><span className="text">Email: </span> {props.admin.email}</h3>
        </div>
      </div>
      { passwordFormRender }
      <div>
        <button className='delete-admin-button' id={props.admin.id} onClick={handleDelete}>Delete Account</button>
      </div>
    </div>
  )
}

export default AdminProfile