import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';


function Category() {
  const categories = ['Wszystkie','Malarstwo', 'Biżuteria', 'Meble', 'Lampy', 'Zegary', 'Porcelana i cenamika','Literatura','Pozostałe'];

  return (
    <div className='box'>
    <h2>Kategorie</h2>
    
    <ul className='category-list'>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/${category}`}>{category}</Link>
          </li>
        ))}
    </ul>
   
  </div>
  );
}

export default Category;