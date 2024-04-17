import React, { useState, useEffect, useRef } from "react";
import "../../styles/Bestsellery/Bestsellery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard/ProductCard";

const buttons = [
  { namebutton: "Nowości" },
  { namebutton: "Eko" },
  { namebutton: "Biuro" },
  { namebutton: "Torby" },
  { namebutton: "Elektronika" },
  { namebutton: "Kubki" },
  { namebutton: "Sport" },
  { namebutton: "Odzież" },
  { namebutton: "Parasole" },
];

const chunkSize = 4;

const Bestsellery = () => {
  const [products, setProducts] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [activeChunk, setActiveChunk] = useState(0);
  const sliderRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products?limit=8");
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const settings = {
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: false,
    afterChange: null,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          vertical: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bestsellery__wrapper">
      <div>
        <span className="bestsellery__title">Bestsellery</span>
      </div>
      <div className="bestsellery__buttonWrapper">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`bestellery__button ${
              index === activeButton ? "active" : ""
            }`}
            onClick={() => setActiveButton(index)}
          >
            {button.namebutton}
          </button>
        ))}
      </div>
      <div className="bestsellery__products">
        <Slider ref={sliderRef} {...settings}>
          {isLoading
            ? Array.from({ length: 4 }, (_, index) => (
                <ProductCard key={index} isLoading={true} />
              ))
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isLoading={false}
                />
              ))}
        </Slider>
      </div>
      <div className="slider__best">
        <div
          className={`best__dot ${activeChunk === 0 ? "active" : ""}`}
          onClick={() => {
            setActiveChunk(0);
            sliderRef.current.slickGoTo(0);
          }}
        />
        <div
          className={`best__dot ${activeChunk === 1 ? "active" : ""}`}
          onClick={() => {
            setActiveChunk(1);
            sliderRef.current.slickGoTo(chunkSize);
          }}
        />
      </div>
    </div>
  );
};

export default Bestsellery;
