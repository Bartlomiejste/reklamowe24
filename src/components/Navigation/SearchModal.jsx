import React, { useEffect } from "react";
import "../../styles/Navigation/SearchModal.css";
import FilterList from "../../utils/SearchModalFilter/SearchModalFilter";
import selectIcon from "../../assets/searchmodal/select.png";
import navigationIcon from "../../assets/searchmodal/navigation.png";
import escapeIcon from "../../assets/searchmodal/escape.png";

const SearchModal = ({ isOpen, close }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal__overlay" onClick={close} />
      <div className={`search__modal ${isOpen ? "open" : ""}`}>
        <input
          type="text"
          className="search__modal--input"
          placeholder="Szukaj produktu"
        />
        <FilterList />
        <hr className="search__modal--divider" />
        <div className="search__modal--footer">
          <span>
            <img src={selectIcon} alt="select icon" className="icon__modal" />
            Wybór
          </span>
          <span>
            <img
              src={navigationIcon}
              alt="navigation icon"
              className="icon__modal"
            />
            Nawigacja
          </span>
          <span>
            <img src={escapeIcon} alt="escape icon" className="icon__modal" />
            Zamknięcie
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
