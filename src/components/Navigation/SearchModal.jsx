import React from 'react';
import "../../styles/Navigation/SearchModal.css";

const SearchModal = ({ isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={close} />
      <div className="modal-content">
        <div>Search Results...</div>
      </div>
    </>
  );
};

export default SearchModal;
