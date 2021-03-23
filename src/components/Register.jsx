import axios from "axios"
import { useState } from "react"


export default function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      const requestBody = {
        username: username,
        email: email,
        password: password
      }

     // const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/`)

    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div>
      hello from register!
    </div>
  )
}