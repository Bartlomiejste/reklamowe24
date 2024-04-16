import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/CategorySlider/CategorySlider.css";
import * as Icons from "../../assets/category";

const categories = [
  { Icon: Icons.Icon1, name: "eko icon" },
  { Icon: Icons.Icon2, name: "sweet icon" },
  { Icon: Icons.Icon3, name: "calendar icon" },
  { Icon: Icons.Icon4, name: "mugs icon" },
  { Icon: Icons.Icon5, name: "pendrive icon" },
  { Icon: Icons.Icon6, name: "bag icon" },
  { Icon: Icons.Icon7, name: "lanyards icon" },
  { Icon: Icons.Icon8, name: "for-kids icon" },
  { Icon: Icons.Icon9, name: "hat icon" },
  { Icon: Icons.Icon10, name: "for-office icon" },
  { Icon: Icons.Icon11, name: "electronic icon" },
  { Icon: Icons.Icon12, name: "umbrella icon" },
  { Icon: Icons.Icon13, name: "t-shirt icon" },
  { Icon: Icons.Icon14, name: "key icon" },
  { Icon: Icons.Icon15, name: "tools icon" },
  { Icon: Icons.Icon16, name: "printing icon" },
  { Icon: Icons.Icon17, name: "printing icon" },
  { Icon: Icons.Icon18, name: "sunbathing icon" },
  { Icon: Icons.Icon19, name: "bicycle icon" },
  { Icon: Icons.Icon20, name: "hammocks icon" },
  { Icon: Icons.Icon21, name: "deckchairs icon" },
];

const chunkSize = 11;

const CategorySlider = () => {
  const [activeChunk, setActiveChunk] = useState(0);
  const sliderRef = useRef();

  const settings = {
    infinite: false,
    speed: 800,
    slidesToShow: chunkSize,
    slidesToScroll: chunkSize,
    initialSlide: 0,
    autoplay: false,
    afterChange: null,
  };

  return (
    <div className="category__wrapper">
      <div>
        <span className="category__title">Kategorie</span>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="category__slide">
            <img
              src={category.Icon}
              alt={category.name}
              className="category__img"
            />
          </div>
        ))}
      </Slider>
      <div className="slider__nav">
        <div
          className={`nav__dot ${activeChunk === 0 ? "active" : ""}`}
          onClick={() => {
            setActiveChunk(0);
            sliderRef.current.slickGoTo(0);
          }}
        />
        <div
          className={`nav__dot ${activeChunk === 1 ? "active" : ""}`}
          onClick={() => {
            setActiveChunk(1);
            sliderRef.current.slickGoTo(chunkSize);
          }}
        />
      </div>
    </div>
  );
};

export default CategorySlider;
