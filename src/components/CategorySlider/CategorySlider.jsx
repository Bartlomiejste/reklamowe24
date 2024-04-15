import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/CategorySlider/CategorySlider.css";

import Icon1 from "../../assets/category/eko.png";
import Icon2 from "../../assets/category/slodycze.png";
import Icon3 from "../../assets/category/kalendarze.png";
import Icon4 from "../../assets/category/kubki.png";
import Icon5 from "../../assets/category/pendrive.png";
import Icon6 from "../../assets/category/torby.png";
import Icon7 from "../../assets/category/smycze.png";
import Icon8 from "../../assets/category/dla-dzieci.png";
import Icon9 from "../../assets/category/czapki.png";
import Icon10 from "../../assets/category/do-biura.png";
import Icon11 from "../../assets/category/elektronika.png";
import Icon12 from "../../assets/category/parasole.png";
import Icon13 from "../../assets/category/koszulki.png";
import Icon14 from "../../assets/category/breloki.png";
import Icon15 from "../../assets/category/narzedzia.png";
import Icon16 from "../../assets/category/poligrafia.png";
import Icon17 from "../../assets/category/wypoczynek.png";
import Icon18 from "../../assets/category/plazowanie.png";
import Icon19 from "../../assets/category/rowerowe.png";
import Icon20 from "../../assets/category/hamaki.png";
import Icon21 from "../../assets/category/lezaki.png";

const categories = [
  { Icon: Icon1, name: "eko icon" },
  { Icon: Icon2, name: "sweet icon" },
  { Icon: Icon3, name: "calendar icon" },
  { Icon: Icon4, name: "mugs icon" },
  { Icon: Icon5, name: "pendrive icon" },
  { Icon: Icon6, name: "bag icon" },
  { Icon: Icon7, name: "lanyards icon" },
  { Icon: Icon8, name: "for-kids icon" },
  { Icon: Icon9, name: "hat icon" },
  { Icon: Icon10, name: "for-office icon" },
  { Icon: Icon11, name: "electronic icon" },
  { Icon: Icon12, name: "umbrella icon" },
  { Icon: Icon13, name: "t-shirt icon" },
  { Icon: Icon14, name: "key icon" },
  { Icon: Icon15, name: "tools icon" },
  { Icon: Icon16, name: "printing icon" },
  { Icon: Icon17, name: "printing icon" },
  { Icon: Icon18, name: "sunbathing icon" },
  { Icon: Icon19, name: "bicycle icon" },
  { Icon: Icon20, name: "hammocks icon" },
  { Icon: Icon21, name: "deckchairs icon" },
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
          <div key={index} className="category-slide">
            <img src={category.Icon} alt={category.name} />
          </div>
        ))}
      </Slider>
      <div className="slider-nav">
        <div
          className={`nav-dot ${activeChunk === 0 ? "active" : ""}`}
          onClick={() => {
            setActiveChunk(0);
            sliderRef.current.slickGoTo(0);
          }}
        />
        <div
          className={`nav-dot ${activeChunk === 1 ? "active" : ""}`}
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
