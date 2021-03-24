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
// import CrystalBall from "./components/CrystalBall";
import "./App.css";
import CrystalBall from "./components/CrystalBall.jsx";

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

  }



  return(
  <Router>
     <div>       
       <Navbar />
       <Route exact path="/" component={ Welcome } />
       <Route 
       path="/profile" 
       render={props => <Profile {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser }/> } 
       />
       
       <Route 
       path="/login" component={ Login } />       
       
       <Route 
        path="/register" 
        render={props => <Register {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser }/>} 
       /> 
       
       <Route 
       path="/crystalball" component={ CrystalBall } />       
     </div>
   </Router>
  // <div>Hello World</div>
  )
 
}



export default App;
