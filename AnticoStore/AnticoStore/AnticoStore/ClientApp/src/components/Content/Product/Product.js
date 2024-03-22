import React from 'react';
import './Product.css';
import { Link, useNavigate } from 'react-router-dom';

function Product({ product }) {
  const { id, name, description, price, filePathPhoto, isAvaliable } = product;
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const response = await fetch("https://localhost:44343/ShoppingCart/Products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, description, price, filePathPhoto, isAvaliable }), // użyj filePathPhoto zamiast image
      });

      if (!response.ok) {
        throw new Error(`Failed to add to cart: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success) {
        console.log("Product added to cart successfully!");
        // You can add further logic here if needed
        navigate("/basket");
      } else {
        console.error("Failed to add to cart:", result.message);
      }
    } catch (error) {
      console.error('Error during addToCart:', error.message);
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={`data:image/jpeg;base64,${filePathPhoto}`} alt={name} className="product-image" /> {/* Użyj filePathPhoto jako źródło obrazu */}
      </Link>
      <div className="product-details">
        <p>{price} zł</p>
        <p>{name}</p>
      </div>
      <button className="product-button" onClick={handleAddToCart}>
        Dodaj 
      </button>
    </div>
  );
}

export default Product;