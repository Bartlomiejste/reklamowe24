import React from "react";
import "../../styles/Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section newsletter">
        <h2>Zapisz się do newslettera</h2>
        <div className="newsletter-input-group">
          <input type="email" placeholder="Wpisz swój adres e-mail" />
          <button type="submit">→</button>
        </div>
      </div>
      <div className="footer-section links">
        <div className="link-column">
          <h3>ZAMÓWIENIA</h3>
          {/* Add links here */}
        </div>
        <div className="link-column">
          <h3>INFORMACJE</h3>
          {/* Add links here */}
        </div>
        <div className="link-column">
          <h3>KONTAKT</h3>
          {/* Add contact info here */}
        </div>
      </div>
      <div className="footer-section social-media">
        {/* Add social media icons here */}
      </div>
    </footer>
  );
};

export default Footer;
