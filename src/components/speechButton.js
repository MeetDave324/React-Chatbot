import React from "react";
const SpeechButton = (props) => {
  var speakText='Speak'
    if(localStorage.getItem('language')=='hi'){
      speakText= 'बोले'
    }
    else if(localStorage.getItem('language')=='gu'){
      speakText= 'બોલો'
    }
      
    const options = [
      {
        text: speakText,
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