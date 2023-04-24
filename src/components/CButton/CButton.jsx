import React from "react";
import "./CButton.scss";

const CButton = (props) => {
  return (
    <button
      onClick={props.handleClick}
      type={props.type}
      className={`button ${props.background}`}
    >
      {props.text}
    </button>
  );
};

export default CButton;
