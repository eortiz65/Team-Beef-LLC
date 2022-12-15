import { useState, useEffect } from 'react'
import AdminProfile from "./AdminProfile"
import { getAdmins } from "../services/axios"

const Admins = () => {
  const [admins, setAdmins] = useState([])
  
  useEffect(() => {
    const apiCall = async () => {
      let response = await getAdmins()
      console.log(response.data)
      setAdmins(response.data)
    }

    apiCall()
  }, [])
  return (
    <div className="admins-container">
      {admins.map((admin) => (
        <AdminProfile key={admin.id} admins={admins}/>
      ))}
    </div>
  )
}

export default Admins