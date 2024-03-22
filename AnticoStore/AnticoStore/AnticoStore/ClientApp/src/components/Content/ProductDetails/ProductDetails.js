import React from 'react';

function ProductDetails({ product }) {
  console.log("Dane produktu:", product); // Dodajemy console.log do sprawdzenia przekazywanych danych

  if (!product || !product.data || product.data.length === 0) {
    return <div>Loading...</div>;
  }

  const { id, name, description, price, filePathPhoto, isAvaliable } = product.data[0];

  return (
    <div className="product-details">
      <p>{description}</p>
      <h2>{name}</h2>
      <p>Cena: {price} zł</p>
      <p>Dostępność: {isAvaliable ? 'Dostępny' : 'Nie dostępny'}</p>
      <img src={`data:image/jpeg;base64,${filePathPhoto}`} alt={name} className="product-details-image" />
    </div>
  );
}

export default ProductDetails;