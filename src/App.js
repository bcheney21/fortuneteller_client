
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from './components/partials/Navbar.jsx'
import Login from './components/Login.jsx'
import Logout from './components/Logout.jsx'
import Profile from './components/Profile.jsx'

import './App.css';


const App = () => {
  return(
  <Router>
     <div>
       <Navbar />
       <Profile />
       <Login />
       <Logout />
     </div>
   </Router>
  // <div>Hello World</div>
  )
 
}

export default App;