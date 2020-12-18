import React from "react";
const SpeechButton = (props) => {
    const options = [
      {
        text: "Speak",
        handler: () => {
            props.actionProvider.speechToText()},
        id: 1,
      },
    ];
  
    const buttonsMarkup = options.map((option) => (
      <button key={option.id} onClick={option.handler} className="option-button">
        {option.text}
      </button>
    ));
  
    return <div className="options-container">{buttonsMarkup}</div>;
  };
  
export default SpeechButton;