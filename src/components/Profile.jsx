import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function Profile(props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const secretMessage = async function () {
      try {
        const token = localStorage.getItem("jwtToken");
        const authHeaders = {
          Authorization: token,
        };

        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`,
          { headers: authHeaders }
        );

        setMessage(response.data.msg);
      } catch (error) {
        if (error.response.status === 400) {
          props.handleLogout();
        } else {
          console.log(error);
        }
      }
    };
    secretMessage();
  }, [props]);

  //if (!props.currentUser) return <Redirect to="/login" component={Login} />;

  return (
    <div className="profile">
      <h4>Hello {props.currentUser.username}. I was expecting you.</h4>
      <div className="saved-wisdom">
        <h2>{props.currentUser.quotes}</h2>
      </div>
    </div>
  );
}
