import { Link } from "react-router-dom";

export default function Navbar(props) {
  const loggedIn = (
    <>
      <Link to="/">
        <span onClick={props.handleLogout}>Log out</span>
      </Link>
    </>
  );
  const loggedOut = (
    <>
      <Link to="/login">
        Login
      </Link>
    </>
  )
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/crystal-ball" className="link">
        Crystal Ball
      </Link>
      {props.currentUser ? loggedIn: loggedOut}
    </nav>
  );
}
