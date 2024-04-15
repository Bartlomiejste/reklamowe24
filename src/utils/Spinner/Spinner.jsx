import React from "react";
import "../../styles/Spinner/Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
