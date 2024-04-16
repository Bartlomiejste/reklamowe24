import React, { useState, useEffect, useRef } from "react";
import "../../styles/DropdownMenu/DropdownMenu.css";
import boxImg from "../../assets/dropdownmenu/box.png";
import arrowIcon from "../../assets/dropdownmenu/arrowdropdownmenu.svg";

const DropdownMenu = ({ title, items, width, fontSize, showArrow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button type="button" className="dropdown__toggle" onClick={toggleOpen}>
        {title} <span className="dropdown__arrow">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="dropdown__menu" style={{ width, fontSize }}>
          {title === "Oferta gadżetów" ? (
            <div className="dropdown__columns">
              <ul className="dropdown__column">
                {items.map((item, index) => (
                  <li key={index} className="dropdown__item gadget__item">
                    {item.label}
                    <span className="dropdown__item--arrow">
                      <img src={arrowIcon} alt="arrow icon"></img>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="dropdown__column">
                <div className="column__info">Nowość</div>
                <div className="column__title">Stwórz własny zestaw</div>
                <p className="column__text">
                  Stwórz własny giftbox i zaskocz swoich klientów lub
                  pracowników! Komponując box pamiętaj, by dopasować produkty do
                  upodobań danej grupy odbiorców. Całość zapakujemy w tekturowe
                  pudełko wyścielane naturalnym wypełniaczem.
                </p>
                <button className="column__button">Stwórz giftbox</button>
                <img className="column__img" alt="box icon" src={boxImg}></img>
              </div>
            </div>
          ) : (
            <ul>
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  {(item.label === "Archiwalne promocje" &&
                    title === "Rabaty i promocje") ||
                  (item.label === "Inspiracje" &&
                    title === "Oferta tematyczna") ? (
                    <hr className="dropdown__divider" />
                  ) : null}
                  <li className="dropdown__item">{item.label}</li>
                </React.Fragment>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
