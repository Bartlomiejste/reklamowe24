import React from "react";
import "../../styles/Hamburger/Hamburger.css";
import logo from "../../assets/header/logo.png";
import hamburgerIcon from "../../assets/hamburger/hamburger.png";
import keylockIcon from "../../assets/navigation/keylock-black.png";
import basketIcon from "../../assets/navigation/basket-black.png";

const Hamburger = () => {
  return (
    <>
      <div className="hamburger">
        <img
          src={hamburgerIcon}
          className="hamburger__icon"
          alt="hamburger icon"
        />
        <img className="hamburger__logo" src={logo} alt="logo" />
        <div className="navigation__icon">
          <img
            src={keylockIcon}
            alt="keylock icon"
            className="keylock__icon"
          ></img>
          <img
            src={basketIcon}
            alt="basket icon"
            className="basket__icon"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
