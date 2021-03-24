import { Link } from 'react-router-dom'


export default function Navbar(props) {
  
  const loggedIn = (
    <>
        <Link to='/'>
          <span onClick={props.handleLogout}>Log out</span>
        </Link>
    
        <Link to='/profile'>
          Profile
        </Link>
      </>
    )
    
    const loggedOut = (
      <>
      <Link to='/register'>
        Register
      </Link>
    
      <Link to='/login'>
        Login
      </Link>
      </>
    )
    return(
    <nav>
      <Link to='/'>
        <h5>Home 🏄🏾‍♀️</h5>
      </Link>

      {props.currentUser ? loggedIn : loggedOut}
    </nav>
  )
}