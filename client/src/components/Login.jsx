import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formValues, setFormValues] = useState({ email: '', password: ''})
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormValues({email: '', password: ''})
    navigate(`/admins`)
}

  return(
    <div className="login">
        <div className="login-title">Login</div>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor='email'>Email: </label>
            <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required/>
            <br></br><br></br>
            <label htmlFor='password'>Password: </label>
            <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder='Your Password'
                value={formValues.password}
                required
            />
            <br></br><br></br>
            <button className="login-button" disabled={!formValues.email || !formValues.password}>Log In</button>
        </form>
    </div>
)

}

export default Login