import axios from "axios";
import { useState } from "react";
import { quotes } from "../public/quotes.json";
export default function CrystalBall(props) {
  const [currentWisdom, setCurrentWisdom] = useState("");
  // console.log({ quotes });
  const getRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote.quote;
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${props.currentUser.id}/quotes`,{
      quote:currentWisdom
    })
  }
  console.log(props)
  return (
    <div className="crystal-ball">
      <h3 className="future-banner">Come to see your future?</h3>
      <h4 className="wisdom">{currentWisdom}</h4>
      <h1>
        <button
          className="big-button"
          onClick={() => {
            const randomQuote = getRandomQuote();
            setCurrentWisdom(randomQuote);
          }}
        >
          🔮
        </button>
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="hidden" value={currentWisdom} />
        <input type="submit"/>

      </form>
    </div>
  );
}