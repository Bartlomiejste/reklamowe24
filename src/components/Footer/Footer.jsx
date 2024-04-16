import React, { useState } from "react";
import "../../styles/Footer/Footer.css";
import socialMedia from "../../assets/footer/socialMedia.png";
import logo from "../../assets/footer/logofooter.png";

const Footer = () => {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  const [isPhoneVisibleSecond, setIsPhoneVisibleSecond] = useState(false);

  const revealEmail = () => {
    setIsEmailVisible(true);
  };

  const revealPhone = () => {
    setIsPhoneVisible(true);
  };

  const revealPhoneSecond = () => {
    setIsPhoneVisibleSecond(true);
  };
  return (
    <div className="footer">
      <div className="footer__section">
        <h2 className="footer__title">
          Zapisz się do <i>newslettera</i>
        </h2>
        <div className="newsletter__input-group">
          <input
            className="newsletter__input"
            type="email"
            placeholder="Wpisz swój adres e-mail"
          />
          <button className="newsletter__button" type="submit"></button>
        </div>
      </div>
      <div className="footer__link">
        <div className="link__column">
          <span>ZAMÓWIENIA</span>
          <ul>
            <li>Najczęściej zadawane pytania</li>
            <li>Czas realizacji</li>
            <li>Znakowanie</li>
            <li>Sposoby zamawiania</li>
            <li>Dostawa i płatności</li>
            <li>Reklamacje</li>
            <li>Regulamin zakupów</li>
            <li>Polityka prywatności</li>
          </ul>
        </div>
        <div className="link__column">
          <span>INFORMACJE</span>
          <ul>
            <li>Akutalności</li>
            <li>Kontakt</li>
            <li>O nas</li>
            <li>Nasze realizacje</li>
            <li>Referencje</li>
            <li>Katologi do pobrania</li>
            <li>Oznaczenia</li>
            <li>System OMS</li>
            <li>Blog</li>
            <li>Agencja reklamowa</li>
          </ul>
        </div>
        <div className="link__column">
          <span>KONTAKT</span>
          <p>
            Reklamowe24 <br></br>ul. Zgierska 249A<br></br>91-495 Łódź
          </p>

          <div className="link__contact">
            <div className="link__info">
              {isPhoneVisible ? (
                <a
                  className="footer__phone--contact revealed"
                  href="tel:+42426305515"
                >
                  tel. 42 630 55 15
                </a>
              ) : (
                <span className="footer__phone--contact">tel. 42</span>
              )}
              {!isPhoneVisible && (
                <button className="footer__button" onClick={revealPhone}>
                  Pokaż
                </button>
              )}
            </div>
            <div className="link__info">
              {isPhoneVisibleSecond ? (
                <a
                  className="footer__phone--contact revealed"
                  href="tel:+426300508"
                >
                  tel. 42 630 05 08
                </a>
              ) : (
                <span className="footer__phone--contact">tel. 42</span>
              )}
              {!isPhoneVisibleSecond && (
                <button className="footer__button" onClick={revealPhoneSecond}>
                  Pokaż
                </button>
              )}
            </div>
            <div className="link__info">
              {isEmailVisible ? (
                <a
                  className="footer__email--contact revealed"
                  href="mailto:biuro@reklamowe24.pl"
                >
                  biuro@reklamowe24.pl
                </a>
              ) : (
                <span className="footer__email--contact">biuro@</span>
              )}
              {!isEmailVisible && (
                <button className="footer__button" onClick={revealEmail}>
                  Pokaż
                </button>
              )}
            </div>
            <img src={socialMedia} alt="social media"></img>
          </div>
        </div>
      </div>
      <div className="footer__end">
        <img src={logo} alt="logo24" className="footer__logo" />
        <p className="footer__end-text">
          © 2023 Sklep internetowy Reklamowe24.pl. Gadżety reklamowe w Twoim
          mieście: Gadżety reklamowe Warszawa, Gadżety reklamowe Katowice,
          Gadżety reklamowe Ruda Śląska, Gadżety reklamowe Gdańsk, Gadżety
          reklamowe Wrocław, Gadżety reklamowe Szczecin, Gadżety reklamowe
          Bydgoszcz, Gadżety reklamowe Poznań, Gadżety reklamowe Białystok,
          Gadżety reklamowe Kraków, Gadżety reklamowe Lublin, Gadżety reklamowe
          Rzeszów.
        </p>
      </div>
    </div>
  );
};

export default Footer;
