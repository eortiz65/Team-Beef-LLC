import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div>
      <Link className="nav-link right-align" to = '/login'><div>LOGIN</div></Link>
      <Link className="nav-link" to = '/register'> <div>REGISTER</div></Link>
      <Link className="nav-link" to = '/aboutbeef'> <div>ABOUT BEEF</div></Link>
    </div>
  )
}

export default Header