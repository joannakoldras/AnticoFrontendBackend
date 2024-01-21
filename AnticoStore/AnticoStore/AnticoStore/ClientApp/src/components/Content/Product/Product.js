import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product({ product }) {
  const { id, name, description, price, image } = product;
  const productDetails = encodeURIComponent(JSON.stringify(product));

  return (
    <div className="product-card">
      <Link to={`/product/${productDetails}`}>
        <img src={image} alt={name} className="product-image" />
      </Link>
      <div className="product-details">
        <p>{price} zł</p>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Product;