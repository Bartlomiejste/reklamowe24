import React from "react";
import "../../styles/Navigation/SearchModalFilter.css";

const FilterList = () => {
  const items = [
    "Torby na zakupy",
    "Bidony i butelki",
    "Torby bawełniane",
    "T-shirty",
    "Polary",
  ];

  return (
    <>
      {items.map((item, index) => (
        <div className="filter__wrapper">
          <div>Popularne</div>
          <li key={index} className="filter__item">
            {item}
          </li>
        </div>
      ))}
    </>
  );
};

export default FilterList;
