import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import emailIcon from "../../assets/email.svg";
import phoneIcon from "../../assets/phone.svg";
import "../../styles/Header/Header.css";


const Header = () => {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  const revealEmail = () => {
    setIsEmailVisible(true);
  };

  const revealPhone = () => {
    setIsPhoneVisible(true);
  };

  return (
    <div className='header'>
       <Link to="/">
      <img className="logo" src={logo} alt="Reklamowe24" loading="lazy" />
      </Link>
      <div className='header__information'>
        <div className='header__email'>
          <img src={emailIcon} alt="Email icon" className='header__icon' /> 
          {isEmailVisible ? (
            <a className='header__email--contact revealed' href='mailto:biuro@reklamowe24.pl'>
              biuro@reklamowe24.pl
            </a>
          ) : (
            <span className='header__email--contact'>
              biuro@
            </span>
          )}
          {!isEmailVisible && (
            <button className='header__button' onClick={revealEmail}>Pokaż</button>
          )}
        </div>

        <div className='header__phone'>
          <img src={phoneIcon} alt="Phone icon" className='header__icon' /> 
          {isPhoneVisible ? (
            <a className='header__phone--contact revealed' href='tel:+42426305515'>
              tel. 42 630 55 15
            </a>
          ) : (
            <span className='header__phone--contact'>
              tel. 42
            </span>
          )}
          {!isPhoneVisible && (
            <button className='header__button' onClick={revealPhone}>Pokaż</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
