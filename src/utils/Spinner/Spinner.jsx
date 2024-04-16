import React from "react";
import "../../styles/Spinner/Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner__overlay">
      <div className="spinner__container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
