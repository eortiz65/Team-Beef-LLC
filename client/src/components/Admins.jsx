import { useState, useEffect } from 'react'
import AdminProfile from "./AdminProfile"
import { getAdmins } from "../services/axios"

const Admins = () => {
  const [admins, setAdmins] = useState([])
  const apiCall = async () => {
    let response = await getAdmins()
    setAdmins(response)
  }
  
  useEffect(() => {   
    apiCall()
  }, [])

  return (
    <div className="admins-container">
      {admins ? <div>
        {admins.map((admin) => (
        <AdminProfile key={admin.id} admin={admin} apiCall={apiCall}/>
      ))}
      </div> : <div></div>} 
      
    </div>
  )
}

export default Admins