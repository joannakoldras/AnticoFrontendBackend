import React from 'react';

function ProductDetails({ product }) {
  if (!product || !product.data || product.data.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(product.data[0]);

  const { id, name, description, price, filePathPhoto, isAvaliable } = product.data[0];

  return (
    <div className="product-details">
      <p>{description}</p>
      <h2>{name}</h2>
      <p>Cena: {price} zł</p>
      <p>Dostępność: {isAvaliable ? 'Dostępny' : 'Nie dostępny'}</p>
      <img src={filePathPhoto} alt={name} />

      {/* Add more details as needed */}
    </div>
  );
}

export default ProductDetails;