import React, { useEffect } from "react";
import "../../styles/ScrolltoTopButton/ScrollToTopButton.css";
import arrowUpIcon from "../../assets/scrolltotopbutton/arrowup.png";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById("scrollToTopButton");
      if (window.scrollY > 100) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      id="scrollToTopButton"
      style={{ display: "none" }}
      onClick={scrollToTop}
    >
      <img src={arrowUpIcon} alt="Go to top" />
    </button>
  );
};

export default ScrollToTopButton;
