import TextArea from "../TextArea/TextArea";
import "./GameOn.css";
// import React from 'react'

const GameOn = ({
  timeLeft,
  timerStarted,
  characters,
  words,
  speed,
  sampleText,
  handleInput,
  textInfo,
}) => {
  
  return (
    <div className="input__container">
      <div className="scoreboard">
        <div className="wordsUpdate">
          <p className="words">words</p>
          <p className="words-count">{words}</p>
        </div>
        <div className="charactersUpdate">
          <p className="characters">characters</p>
          <p className="characters-count">{characters}</p>
        </div>
        <div className="speedUpdate">
          <p className="speed">speed</p>
          <p className="speed-value">{speed}</p>
        </div>
      </div>
      <div className="practice-page">
        <h4 className="timer__container">
          <p className="timer__text">Remaining:</p> <h1 className="timer"> 00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</h1> <p className="timer__text">sec</p></h4>
        <TextArea
          timerStarted={timerStarted}
          characters={characters}
          sampleText={sampleText}
          handleInput={handleInput}
          textInfo={textInfo}
        />
      </div>
    </div>
  );
};

export default GameOn;
