import Character from "../Character/Character";
import "./TextArea.css";

const TextArea = ({
  textInfo,
  handleInput,
}) => {

  // const letters = textInfo.map((letterObj, ind) => { console.log(letterObj)
  //   return
  //       <Character letterObj={letterObj} key={ind} />
  // })
  return (
    <div className="textarea-container">
      <div className="fixed-text">
        {textInfo.map((letterObj, ind) => {
          return <Character key={ind} letterObj={letterObj} />;
        })}
      </div>
      <div className="dynamic-text">
        <textarea
          placeholder="Type the paragraph text shown on the left (above if using mobile device) here. You can only go back using the backspace key. Correctly typed characters are highlighted in green while mistyped ones are in red"
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextArea;
