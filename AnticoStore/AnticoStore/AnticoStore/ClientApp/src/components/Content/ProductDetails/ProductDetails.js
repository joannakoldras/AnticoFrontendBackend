import React from 'react';

function ProductDetails({ product }) {
  if (!product || !product.data || product.data.length === 0) {
    return <div>Loading...</div>;
  }

  const { id, name, description, price, image } = product.data[0];

  return (
    <div className="product-details">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: {price} zł</p>
      <img src={image} alt={name} />
      {/* Add more details as needed */}
    </div>
  );
}

export default ProductDetails;