import React, { useState } from 'react'
import "../../styles/Navigation/DropdownMenu.css";

const DropdownMenu = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <div className="dropdown">
        <button type="button" className="dropdown-toggle" onClick={toggleOpen}>
          {title} <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {items.map((item, index) => (
              <li key={index} className="dropdown-item">
                {item.label}
                <span className="dropdown-item-arrow">{'>'}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
export default DropdownMenu