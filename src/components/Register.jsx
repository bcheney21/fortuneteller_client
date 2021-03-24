import axios from "axios";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";
import Profile from "./Profile";
// import("../App.css");

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = {
        username: username,
        password: password,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`,
        requestBody
      );


      const { token } = response.data;
      localStorage.setItem("jwtToken", token);

      const decoded = jwt_decode(token);

      props.setCurrentUser(decoded);
    } catch (error) {
      console.log(error)
      if(error.response.status === 400) {
        console.log (error.response)
        setMessage(error.response.data.msg)

      } else {
        //console.log(error);
      }

    }
  };

  if (props.setCurrentUser)
    return (
      <Redirect
        to="/profile"
        component={Profile}
        currentUser={props.currentUser}
      />
    );

  return (
    <div>
      <h3>Register here! 😃</h3>
      <p>{message}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username-input">Username</label>
        <input
          id="username-input"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <label htmlFor="password-input">Password</label>
        <input
          id="password-input"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
