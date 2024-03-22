import React, { Fragment, useState, useEffect } from 'react';
import './Basket.css';

function Basket() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedDelivery, setSelectedDelivery] = useState(null);


  const handlePaymentSelection = (paymentOption) => {
    setSelectedPayment(paymentOption); // Ustawienie aktualnie wybranego sposobu płatności
  };

  const handleDeliverySelection = (deliveryOption) => {
    setSelectedDelivery(deliveryOption); // Ustawienie aktualnie wybranego sposobu płatności
  };

  useEffect(() => {
    fetchShoppingCartProducts();
  }, []);

  const fetchShoppingCartProducts = async () => {
    try {
      const response = await fetch('https://localhost:44343/ShoppingCart/Products');
      const data = await response.json();
      if (data.success) {
        setProducts(data.data);
      } else {
        console.error('Failed to fetch shopping cart products:', data.message);
      }
    } catch (error) {
      console.error('Error fetching shopping cart products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await fetch(`https://localhost:44343/ShoppingCart/DeleteProduct/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (result.success) {
        // Usunięto produkt z koszyka, należy zaktualizować widok
        fetchShoppingCartProducts();
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  return (
    <div className="basket">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="products-container">
          {products.length > 0 ? (
             <div className="product-list">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <img src={`data:image/jpeg;base64,${product.filePathPhoto}`} alt={product.name} className="product-image" />
                <div className="product-details">
                  <p>{product.name}</p>
                  <p>{product.price} zł</p>
                </div>
            
                <button className="product-delete" onClick={() => handleRemoveFromCart(product.id)}>Usuń</button>
              </div>
              
            ))}
            </div>
          ) : (
            <p>Twój koszyk jest pusty</p>
          )}
        </div>
      )}
      <div className="delivery">
        <p>Sposób dostawy</p>
        <button
            className={`kurier ${selectedDelivery === 'courier' ? 'selected' : ''}`}
            onClick={() => handleDeliverySelection('courier')}
          >
            Kurier
          </button>
          <button
            className={`kurier ${selectedDelivery === 'inpost' ? 'selected' : ''}`}
            onClick={() => handleDeliverySelection('inpost')}
          >
            Paczkomat Inpost
          </button>
          <button
            className={`kurier ${selectedDelivery === 'personal' ? 'selected' : ''}`}
            onClick={() => handleDeliverySelection('personal')}
          >
            Odbiór osobisty
          </button>
      </div>
      <div className="payment">
        <p>Metoda płatności</p>
        <button
            className={`kurier ${selectedPayment === 'blik' ? 'selected' : ''}`}
            onClick={() => handlePaymentSelection('blik')}
          >
            BLIK
          </button>
          <button
            className={`kurier ${selectedPayment === 'transfer' ? 'selected' : ''}`}
            onClick={() => handlePaymentSelection('transfer')}
          >
            Przelew online
          </button>
        <button
            className={`kurier ${selectedPayment === 'card' ? 'selected' : ''}`}
            onClick={() => handlePaymentSelection('card')}
          >
            Płatność kartą
          </button>
      </div>
      <div className="sum">
      <p>Razem: {products.reduce((total, product) => total + product.price, 0)} zł</p>
      </div>
      <div>
      <div>
      <button className="buy">
            Kupić
          </button>
      </div>
      </div>
    </div>
  );
}

export default Basket;