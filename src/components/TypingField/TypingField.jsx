import "./TypingField.css";
import GameOn from "../GameOn/GameOn";
import GameOver from "../GameOver/GameOver";
// import React from 'react'

const TypingField = ({
  timeLeft,
  timerStarted,
  handleInput,
  characters,
  words,
  speed,
  sampleText,
  retakeTest,
  textInfo,
}) => {
  const swaggerWord =
    timeLeft > 0 ? (
      <h1 className="header">It&apos;s time to prove it!</h1>
    ) : (
      <h1 className="header">So how did you fare?😍</h1>
    );

  const currentDisplay =
    timeLeft > 0 ? (
      <GameOn
        sampleText={sampleText}
        timerStarted={timerStarted}
        characters={characters}
        timeLeft={timeLeft}
        words={words}
        speed={speed}
        handleInput={handleInput}
        textInfo={textInfo}
      />
    ) : (
        <GameOver
          characters={characters}
          words={words}
          speed={speed}
          retakeTest={retakeTest}
        />
    );

  return (
    <div className="typing-field-container">
      <div>{swaggerWord}</div>
      <div className="game-on">{currentDisplay}</div>
    </div>
  );
};

export default TypingField;

/* 
<div>
        {timeLeft > 0 ? (
          <h1 className="header">It&apos;s time to prove it!</h1>
        ) : (
          <h1 className="header">So how did you fare?😍</h1>
        )}
      </div>
      <div className="game-on">
        {timeLeft > 0 ? <GameOn /> : <GameOver />}
      </div>
*/
