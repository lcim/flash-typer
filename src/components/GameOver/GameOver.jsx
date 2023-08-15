import "./GameOver.css";
import React from "react";

const GameOver = ({ characters, words, speed, retakeTest }) => {
  const highScore = parseInt(localStorage.getItem("records")) || 0;
  const determinant = characters < highScore;

  // The code below works fine but I don't know how
  const displayRecord =
    !determinant &&
    React.createElement(
      "h3",
      { className: "records" },
      `NewRecord! ${characters}`
    );
  if (highScore < characters) {
    localStorage.setItem("records", JSON.stringify(characters));
  }

  return (
    <div className="game__over-container">
      <div className="result">
        <h1 className="header">Results</h1>
        {displayRecord}
      </div>
      <div className="scores">
        <div className="characters">
          Total Characters Typed: <span className="digitals">{characters}</span>
        </div>
        <div className="words">
          Total Words Typed: <span className="digitals">{words}</span>
        </div>
        <div className="speed">
          Your Speed is: <span className="digitals">{speed}</span> words/minute
        </div>
      </div>
      <div className="btn">
        <div className="btn-retry" onClick={() => retakeTest()}>
          Retry
        </div>
        <div
          className="btn-share"
          onClick={() => {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=https://github.com/lcim",
              "facebook-share-dialogu",
              "width=auto,height=500"
            );
          }}
        >
          Fshare
        </div>
        <div
          className="btn-tweet"
          onClick={() => {
            window.open(
              "https://twitter.com/intent/tweet?text=https://youtu.be/Sjs8Ax6wh0Q",
              "Twitter-Profile",
              "width=auto,height=500"
            );
          }}
        >
          Tweet
        </div>
      </div>
    </div>
  );
};

export default GameOver;
