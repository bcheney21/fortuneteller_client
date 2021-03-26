import { Link } from "react-router-dom";

//Functions to reveal Login & Logout in NavBar//
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

  // //Functions to reveal Register in NavBar//
  // const registerIn = (
  //   <>
  //     <Link to="/register" className="link">
  //       Crystal Ball
  //     </Link>
  //   </>
  // );
  // const registerOut = (
  //   <>
  //     <Link to="/" className="link">
  //       <span onClick={props.handleLogout}></span>
  //     </Link>
  //   </>
  // );

  //Functions to reveal Crystal Ball in NavBar//
  const crystalBallIn = (
    <>
      <Link to="/crystal-ball" className="link">
        Crystal Ball
      </Link>
    </>
  );
  const crystalBallOut = (
    <>
      <Link to="/" className="link">
        <span onClick={props.handleLogout}></span>
      </Link>
    </>
  );

  //Functions to reveal Home in NavBar//
  const homeIn = (
    <>
      <Link to="/home" className="link">
        Home
      </Link>
    </>
  );
  const homeOut = (
    <>
      <Link to="/" className="link">
        <span onClick={props.handleLogout}></span>
      </Link>
    </>
  );

  //Functions to reveal Profile in NavBar//
  const profileIn = (
    <>
      <Link to="/profile" className="link">
        Profile
      </Link>
    </>
  );
  const profileOut = (
    <>
      <Link to="/" className="link">
        <span onClick={props.handleLogout}></span>
      </Link>
    </>
  );

  return (
    <nav className="navbar">
      {props.currentUser ? profileIn : profileOut}
      {props.currentUser ? loggedIn : loggedOut}
      {props.currentUser ? crystalBallIn : crystalBallOut}
      {props.currentUser ? homeIn : homeOut}
    </nav>
  );
}
