import Client from "../services/api"
import { useNavigate } from "react-router-dom";

const AdminProfile = async () => {
  let admins = await Client.get('/admins')
  let navigate = useNavigate()

  //Delete Admin
  const handleDelete = async (e) => {
    e.preventDefault()    
    await Client.destroy(`/admin/${admins.id}`)
    navigate('/admin')
}

  return (
    <div className="admin-container">
      {admins.map((admin) => (
                <div key={admin.id}>
                  <h2>Name : {admin.name}</h2>
                  <button className='delete-admin-button' onClick={handleDelete}>Delete Account</button>
                </div>
            ))}
    </div>
  )
}

export default AdminProfile