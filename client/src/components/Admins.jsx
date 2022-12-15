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
      {admins.map((admins) => (
        <AdminProfile key={admins.id} admins={admins}/>
      ))}
    </div>
  )
}

export default Admins