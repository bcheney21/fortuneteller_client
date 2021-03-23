import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react'
import Profile from './Profile'
import axios from "axios"



export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
  
    try {
      e.preventDefault()
      const requestBody = {
        username: username,
        password: password
      }

      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, requestBody)

      const { token } = response.data

      localStorage.setItem('jwtToken', token)

      const decoded = jwt_decode(token)

      props.setCurrentUser(decoded)
      
    } catch (error) {
      if(error.response.status === 400) {
        setMessage(error.response.data.msg)
      } else {
        console.log(error)
      }
    }
  }

      if(props.setCurrentUser) return <Redirect to='/profile' component={ Profile } setCurrentUser={ props.setCurrentUser } />

      return(
        <div>
          <h3>Login Form:</h3>
          <p>{message}</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
            type="text"
            value={props.username}          
            placeholder="Username 🎠"
            />

            <label htmlFor="password">Password</label>
            <input 
            type="password"
            value={props.password}          
            placeholder="Password 🔐"
            />

            <input 
            type="submit"
            value="Log in here 😄"
            />
          </form>
        </div>
      )     
}
 



