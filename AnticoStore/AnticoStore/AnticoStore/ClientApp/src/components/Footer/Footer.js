import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Antico</p>
        <a href="#" className='contact'>Kontakt i dane</a>
        <a href="#" className='info'>O nas</a>
        <a href="#" className='reklama'>Reklama</a>
        <a href="#" className='facebook'><img src="img/facebook.png" alt=""/></a>
        <a href="#" className='instagram'><img src="img/instagram.png" alt=""/></a>

      </div>
    </footer>
  );
}

export default Footer;