import React from "react";
import "../../styles/ProductCard/ProductCard.css";
import Spinner from "../../utils/Spinner/Spinner";

const ProductCard = ({ product, isLoading }) => {
  if (isLoading) {
    return (
      <div className="product-card-spinner">
        <Spinner />
      </div>
    );
  }
  const { image, title, price } = product;

  return (
    <div className="product__card">
      <div className="product__tag">
        <span className="product__title">Gadżety EKO</span>
      </div>
      <img src={image} alt={title} className="product__image" />
      <h3 className="productImage__title">
        {title.length > 50 ? title.substring(0, 47) + "..." : title}
      </h3>
      <div className="product__symbol">Symbol: {product.id}</div>
      <div className="product__price-wrapper">
        <span className="price__label">cena od</span>
        <div className="product__price">{`${price} zł`}</div>
        <div className="product__price-netto">Cena netto</div>
      </div>
    </div>
  );
};

export default ProductCard;
