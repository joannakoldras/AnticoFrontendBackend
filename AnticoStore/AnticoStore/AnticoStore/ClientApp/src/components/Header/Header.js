import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <header className="header">

      <a href="/" className='logo'>Antico</a>
      <div className="header-right">
      <Link to="/addpost" className="header-button-link">
          <button className="header-button">Dodaj ogłoszenie</button>
        </Link>
        <a href="#" className='link1'><img src="img/basket.png" alt="" />Koszyk</a>
        <a href="/login" className='link2'><img src="img/avatar.png" alt=""/>Wejście</a>
      </div>
    </header>
  );
}

export default Header;