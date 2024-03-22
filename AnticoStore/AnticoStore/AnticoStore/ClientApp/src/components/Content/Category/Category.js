import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

function Category() {
  const categories = [ 'malarstwo', 'biżuteria', 'meble', 'lampy', 'zegary', 'porcelana i ceramika', 'literatura', 'pozostałe'];

  return (
    <div className='box'>
      <h2>Kategorie</h2>
      <div className='category-list'>
      <ul className='category-list'>
        {categories.map((category, index) => (
          <div className='category' key={index}>
            <li>
              <Link to={`/category/${encodeURIComponent(category)}`}>{category}</Link>
            </li>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Category;