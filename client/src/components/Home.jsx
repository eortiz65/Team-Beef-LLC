import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home">
        <div>
          <div className='mascot'>
            <img className='mascot' src={require("../media/beef-mascot.jpg")} alt='Mascot' />
            <img src={require("../media/stay-beefy.webp")} alt='Beefy'/>
          </div>
          <h3 className='homepage-title'>Log In or Register</h3>
          <button className='login-button' onClick={() => navigate('/login')}>Log In</button>
          <div className='home-divider'>or</div>
          <button className='register-button' onClick={() => navigate('/register')}>Register</button>
        </div>
    </div>
  )
}

export default Home 