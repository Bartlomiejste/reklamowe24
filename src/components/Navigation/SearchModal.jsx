import React from "react";
import "../../styles/Navigation/SearchModal.css";
import FilterList from "./SearchModalFilter";

const SearchModal = ({ isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={close} />
      <div className="search-modal">
        <input
          type="text"
          className="search-modal-input"
          placeholder="Szukaj produktu"
        />
        <FilterList />
        <div className="search-modal-footer">
          <span>Wybór</span>
          <span>Nawigacja</span>
          <span>Zamknięcie</span>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
