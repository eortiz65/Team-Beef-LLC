import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createClient } from '../services/axios'

const ClientForm = (props) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState( { 
      company: '',
      contact: '', 
      services: '',
      comments: '',
      adminId: ''
      }
  )

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createClient({
        company: formValues.company,
        contact: formValues.contact,
        services: formValues.services,
        comments: formValues.comments,
        adminId: formValues.adminId
    })

    setFormValues({
        company: '',
        contact: '',
        services: '',
        comments: '',
        adminId: ''
    })
    props.apiCall()
    navigate('/clients')
  }
  
  return(
    <div className="client">
        <div className="client-title">Client Form</div>
        <form className="client-form" onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
                onChange={handleChange}
                name="company"
                type="text"
                placeholder="Company"
                value={formValues.company}
                required/>
            <br></br>          
            <label> Contact: </label>
            <input
                onChange={handleChange}
                name="contact"
                type="text"
                placeholder="Contact"
                value={formValues.contact}
                required/>
            <br></br>
            <label> Services: </label>
            <input
                onChange={handleChange}
                name="services"
                type="text"                    
                placeholder='Service provided'
                value={formValues.services}
                required/>
            <br></br>
            <label> Comments: </label>
            <textarea
                onChange={handleChange}
                name="comments"
                type="text"                    
                placeholder='Additional comments'
                value={formValues.comments}
                />
            <br></br>
            <label> Admin Assigned: </label>
            <input
                onChange={handleChange}
                name="adminId"
                type="int"                    
                placeholder='Admin Assigned'
                value={formValues.adminId}
                required/>         
            <button className="client-button" disabled={(!formValues.company || !formValues.contact || !formValues.adminId || !formValues.services )}>Create Client</button>
        </form>
    </div>
  )
}

export default ClientForm