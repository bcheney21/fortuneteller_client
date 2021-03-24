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

      props.setCurrentUser(decoded);
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
    );
}

  return (
    <div className="login">
      <h3 className="login-header">Login</h3>
      <p>{message}</p>


      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">username: </label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="username" className="input-bar"/>
        <br />
        <br />
        <br />
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          className="input-bar"
        />

        <input type="submit" value="submit" className="button" />
      </form>
    </div>
  );
}
