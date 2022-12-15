import { deleteAdmin, updateAdmin } from "../services/axios"
import { useNavigate } from "react-router-dom";

const AdminProfile = (props) => {
  let navigate = useNavigate()
  let admins = props.admins

  const handleUpdate = async (e) => {
    e.preventDefault()
    await updateAdmin()
    alert('Password updated')
    navigate('/admins')
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteAdmin()
    alert('Admin Deleted')    
    navigate('/admins')
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
      <div>
      <button className='update-admin-button' onClick={handleUpdate}>Update password</button>
      </div>
      <div>
        <button className='delete-admin-button' onClick={handleDelete}>Delete Account</button>
      </div>
    </div>
  )
}

export default AdminProfile