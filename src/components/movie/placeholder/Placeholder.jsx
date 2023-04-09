import React from "react";
import "./placeholder.scss";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";
const Placeholder = ({ size, spinner_size }) => {
  return (
    <div className={size}>
      <SpinnerIcon pulse style={{ fontSize: { spinner_size } }} />
    </div>
  );
};

export default Placeholder;
