import { useState, useEffect } from 'react'
import ClientProfile from './ClientProfile'
import { getClients } from "../services/axios"
import ClientForm from './ClientForm'

const Clients = () => {
  const [clients, setClients] = useState([])
  const apiCall = async () => {
    let response = await getClients()
    setClients(response)
  }
  
  useEffect(() => {   
    apiCall()
  }, [])

  return (
    <div className="clients-container">
      {clients ? <div>
        {clients.map((client) => (
        <ClientProfile key={client.id} client={client} apiCall={apiCall}/>
      ))}
      <div> {<ClientForm apiCall={apiCall}/>} </div>   
      </div> : <div> {<ClientForm apiCall={apiCall}/>} </div>} 
      
    </div>
  )
}

export default Clients