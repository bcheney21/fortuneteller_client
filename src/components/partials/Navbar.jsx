import { Link } from "react-router-dom";

export default function Navbar(props) {
  const loggedIn = (
    <>
      <Link to="/">
        <span onClick={props.handleLogout}>Log out</span>
      </Link>
    </>
  );
  return (
    <nav className="navbar">
      <Link to="/">
        <h5>Home 🏄🏾‍♀️</h5>
      </Link>

      {props.currentUser}
    </nav>
  );
}
