//IMPORTS//
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./App.css";

//JSX IMPORTS//
import Navbar from "./components/partials/Navbar.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
<<<<<<< HEAD
import "./App.css";
=======
>>>>>>> 1b27fa2dcce04cbe178fa663dde1e0bd7770ab19
import CrystalBall from "./components/CrystalBall.jsx";

//SET STATE//
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  //COMPARE JWT//
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
      <div className="main-div">
<<<<<<< HEAD
        <Navbar handleLogout={handleLogout} currentUser={currentUser}/>
        <Route exact path="/" component={ Home } />
=======
        <Navbar handleLogout={handleLogout} currentUser={currentUser} />
        <Route exact path="/" component={Home} />
>>>>>>> 1b27fa2dcce04cbe178fa663dde1e0bd7770ab19

        {/* ROUTE TO PROFILE */}
        <Route
          path="/profile"
          render={(props) =>
            currentUser ? (
              <Profile
                {...props}
                handleLogout={handleLogout}
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        {/* ROUTE TO LOGIN */}
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          )}
        />

        {/* ROUTE TO REGISTER */}
        <Route
          path="/register"
          render={(props) => (
            <Register
              {...props}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          )}
        />

        {/* ROUTE TO CRYSTAL BALL */}
        <Route
          path="/crystal-ball"
          render={(props) => (
            <CrystalBall
              {...props}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          )}
        />
      </div>
    </Router>
  );
};

export default App;
