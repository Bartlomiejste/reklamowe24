import React from "react";
import "../../styles/SearchModalFilter/SearchModalFilter.css";
import modalIcon from "../../assets/searchmodalfilter/modalicon.png";

const FilterList = () => {
  const titles = ["Popularne"];
  const items = [
    "Torby na zakupy",
    "Bidony i butelki",
    "Torby bawełniane",
    "T-shirty",
    "Polary",
  ];

  return (
    <>
      <div className="filter__wrapper">
        {items.map((item, index) => (
          <div className="filter__items">
            {titles.map((title, index) => (
              <div className="filter__title" key={index}>
                {title}
              </div>
            ))}
            <li key={index} className="filter__item">
              <img src={modalIcon} alt="modal icon" className="filter__icon" />
              <span>{item}</span>
            </li>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterList;
