import React, { useState, useEffect } from "react";
import arrowUpIcon from "../../assets/arrowup.png";
import "../../styles/Navigation/Navigation.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
      <button onClick={scrollToTop} className="scroll-to-top-button">
        <img src={arrowUpIcon} alt="Go to top" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
