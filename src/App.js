import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Navbar from "./components/partials/Navbar.jsx";
import Login from "./components/Login.jsx";
// import Logout from './components/Logout.jsx'
import Profile from "./components/Profile.jsx";
import Register from "./components/Register.jsx";
import Welcome from "./components/Welcome.jsx";
import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decoded = jwt_decode(token);
      setCurrentUser(decoded);
    } else {
      setCurrentUser(null);
    }
  }, []);

  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      localStorage.removeItem("jwtToken");
      setCurrentUser(null);
    }
  };


  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Welcome} />
        <Route           
          path="/profile" 
          render={props => currentUser
          ?<Profile {...props} handleLogout={handleLogout} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
          :<Redirect to="/login"/>}
        /> 
        <Route 
          path="/login" 
          render={props => <Login {...props} setCurrentUser={setCurrentUser} currentUser={currentUser}/>}
        />
        <Route
          path="/register"
          render={props => <Register {...props} setCurrentUser={setCurrentUser} currentUser={currentUser}/>}
        />
      </div>
    </Router>
    // <div>Hello World</div>
  );
};

export default App;
