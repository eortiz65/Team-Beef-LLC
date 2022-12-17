import { useState, useEffect } from 'react'
import { deleteClient, updateClient } from "../services/axios"
import { useNavigate } from "react-router-dom";


const ClientProfile = (props) => {
  let navigate = useNavigate() 
  const [updateValues, setUpdateValues] = useState([]) 
  const [formState, setFormState] = useState({
    company: "",
    contact: "",
    services: "",
    comments: "",
    adminId: ""
  })

  
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }




  const handleUpdate = async (e) => {
  e.preventDefault()
  console.log(props.client.id)
  let updatedClient = await updateClient(props.client.id, formState)
  setUpdateValues(updateValues, updatedClient)
  setFormState({  
  company: "",
  contact: "",
  services: "",
  comments: "",
  adminId: ""
  })

  props.apiCall()
  
  navigate(`/clients`)
}


  const handleDelete = async (e) => {
    e.preventDefault()
    await deleteClient(e.target.id)
    props.apiCall()   
    navigate('/clients')
}

  return (
    <div className="clients">
      <div className="center-column">
        <div className="clients-profile" >
          <h1 className="clients">Client Information</h1>
        </div>
        <div className="clients-profile">
          <h3 className="clients"><span className="text">Company:</span> {props.client.company}</h3>
        </div>
        <div className="clients-profile">
          <h3 className="clients"><span className="text">Contact: </span> {props.client.contact}</h3>
        </div>
        <div className="clients-profile">
          <h3 className="clients"><span className="text">Services: </span> {props.client.services}</h3>
        </div>
        <div className="clients-profile">
          <h3 className="clients"><span className="text">Additional Comments: </span> {props.client.comments}</h3>
        </div>      
        <button className='delete-clients-button' id={props.client.id} onClick={handleDelete}>Delete Client</button>
      </div>
      <form className="client-form" onSubmit={handleUpdate}>
            <label>Name: </label>
            <input
                onChange={handleChange}
                name="company"
                type="text"
                placeholder="Company"
                value={formState.company}
                required/>
            <br></br>          
            <label> Contact: </label>
            <input
                onChange={handleChange}
                name="contact"
                type="text"
                placeholder="Contact"
                value={formState.contact}
                required/>
            <br></br>
            <label> Services: </label>
            <input
                onChange={handleChange}
                name="services"
                type="text"                    
                placeholder='Service provided'
                value={formState.services}
                required/>
            <br></br>
            <label> Comments: </label>
            <textarea
                onChange={handleChange}
                name="comments"
                type="text"                    
                placeholder='Additional comments'
                value={formState.comments}
                />
            <br></br>
            <label> Admin Assigned: </label>
            <input
                onChange={handleChange}
                name="adminId"
                type="int"                    
                placeholder='Admin Assigned'
                value={formState.adminId}
                required/>         
            <button type='submit' className="client-button" disabled={(!formState.company || !formState.contact || !formState.adminId || !formState.services )}>Update Client</button>
            <br></br>
        </form>
        <br></br>
    </div>
  )
}

export default ClientProfile