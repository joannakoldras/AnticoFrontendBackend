import React from 'react';
import ProductList from '../Content/ProductList/ProductList';
import './Account.css';


function Account() {
  return (
    <div className="account">
      <div className="account-container">
        <h1>O mnie</h1>
        <div className="profile-info">
          <h2>Lokalizacja:</h2>
          <p>Zielona góra</p>
        </div>
        <div className="profile-info">
          <h2>Adres e-mail:</h2>
          <p>jan.kowalski@example.com</p>
        </div>
        <div className="profile-info">
          <h2>Numer telefonu:</h2>
          <p>+38********</p>
        </div>
        <div className="profile-info">
          <h2>Doświadczenie z antykami:</h2>
          <p></p>
        </div>
      </div>
      <div className="orders">
        <div className="buttons">
          <button className="account-button">Moje Ogłoszenia</button>
          <button className="account-button">Mój Koszyk</button>
          <button className="account-button selected">Wybrane</button>
        </div>
        <div className="productlist-wrapper">
          <ProductList  />
        </div>
      </div>
    </div>

  );
}

export default Account;