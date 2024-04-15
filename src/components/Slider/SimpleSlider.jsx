import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Slider/SimpleSlider.css";
import bagsIcon from "../../assets/bags.jpg";
import penIcon from "../../assets/pen.jpg";
import tshirtIcon from "../../assets/t-shirt.jpg";

const images = [penIcon, tshirtIcon, bagsIcon];
const slideTitles = [
  "Artykuły piśmiennicze",
  "Koszulki z nadrukiem",
  "Torby reklamowe",
];

const SimpleSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div>
        <ul className="dots">{dots}</ul>
      </div>
    ),
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: (i) => (
      <div className="dot-container">
        <span
          className={`custom-dot ${activeSlide === i ? "active" : ""}`}
        ></span>
        <span
          className={`dot__title ${activeSlide === i ? "active-title" : ""}`}
        >
          {slideTitles[i]}
        </span>
      </div>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              className="slider__picture"
              src={src}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
