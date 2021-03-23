

export default function Login(props) {
  try {
        
    return(
      <div>
        <form>
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

  } catch (error) {
    console.log(error)
  }

}



