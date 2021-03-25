import { Link } from "react-router-dom";

export default function Navbar(props) {
  const loggedIn = (
    <>
      <Link to="/" className="link">
        <span onClick={props.handleLogout}>Log out</span>
      </Link>
    </>
  );
  const loggedOut = (
    <>
      <Link to="/login" className="link">
        Login
      </Link>
    </>
  );

  return (
    <nav className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/crystal-ball" className="link">
        Crystal Ball
      </Link>
      <Link to="/profile" className="link">
        Profile
      </Link>
      {props.currentUser ? loggedIn : loggedOut}
    </nav>
  );
}
