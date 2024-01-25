import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Antico</p>
        <a href="/contact" className='contact'>Kontakt i dane</a>
        <a href="/info" className='info'>O nas</a>
        <a href="/documentation" className='reklama'>Dokumentacja</a>
        <a href="/facebook" className='facebook'><img src="img/facebook.png" alt=""/></a>
        <a href="/instagram" className='instagram'><img src="img/instagram.png" alt=""/></a>

      </div>
    </footer>
  );
}

export default Footer;