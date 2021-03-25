import { useState } from "react";
import { quotes } from "../public/quotes.json";

export default function CrystalBall(props) {
  const [currentWisdom, setCurrentWisdom] = useState("");
  // console.log({ quotes });

  const getRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote.quote;
  };

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

      <form onSaveWisdom={this.handleSaveWisdom}>
        <input type="hidden" value={saveWisdom} method="post" />
      </form>
    </div>
  );
}
