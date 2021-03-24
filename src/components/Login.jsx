import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";
import Profile from "./Profile";
import axios from "axios";

export default function Login(props) {
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
        `${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`,
        requestBody
      );

      const { token } = response.data;

      localStorage.setItem("jwtToken", token);

      const decoded = jwt_decode(token);

      props.currentUser(decoded);
    } catch (error) {
      if (error.response.status === 400) {
        setMessage(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  if (props.currentUser) {
    return (
      <Redirect
        to="/profile"
        component={Profile}
        currentUser={props.currentUser}
      />
    )};

  return (
    <div className="login">
      <h3>Login Form:🎊</h3>
      <p>{message}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
        type="text" 
        value={username} 
        placeholder="Username 🎠" 
        onChange={e => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          placeholder="Password 🔐"
          onChange={e => setPassword(e.target.value)}
        />

        <input type="submit" value="Log in here 😄" className="button" />
      </form>
    </div>
  );
}
