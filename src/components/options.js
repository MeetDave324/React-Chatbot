import React from "react";
import "./options.css";

const Options = (props) => {
  const options = [
    {
      text: "हिंदी",
      handler: () => props.actionProvider.handleLanguage("hi"),
      id: 1,
    },
    { text: "English", handler: () => props.actionProvider.handleLanguage("en"), id: 2 },
    { text: "ગુજરાતી",handler: () => props.actionProvider.handleLanguage("gu"), id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;