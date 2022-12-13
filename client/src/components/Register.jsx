import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState( { 
      name: '',
      email: '', 
      password: '' 
      }
  )

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
        name: formValues.firstName,
        email: formValues.email,
        password: formValues.password,
    })

    setFormValues({
        name: '',
        email: '',
        password: ''
    })

    navigate('/login')
  }
  
  return(
    <div className="register">
        <div className="register-title">Register</div>
        <form className="register-form" onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Name"
                value={formValues.name}
                required/>
            <br></br><br></br>            
            <label> Email Address: </label>
            <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required/>
            <br></br><br></br>
            <label> Password: </label>
            <input
                onChange={handleChange}
                name="password"
                type="password"                    
                placeholder='Your Password'
                value={formValues.password}
                required/>
            <br></br><br></br>         
            <button className="register-button" disabled={(!formValues.email || !formValues.password || !formValues.name )}>Create Account</button>
        </form>
    </div>
  )
}

export default Register