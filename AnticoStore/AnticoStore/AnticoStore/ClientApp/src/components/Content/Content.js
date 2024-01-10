import React, { useEffect, useState } from 'react';
import Category from './Category/Category';
import SearchBar from './SearchBar/SearchBar';
import Slider from './Slider/Slider';
import ProductList from './ProductList/ProductList';
import './Content.css';
import { json } from 'react-router-dom';

function Content() {
  

  let [products ,setProducts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44343/Products") 
    .then((response) => response.json()) 
    .then((dataFromServer) => {
      setProducts(dataFromServer.data); 
    });
   }, []);


   let data = JSON.stringify(products);

  return (
    <div className="content-container">
      <div className="content-wrapper">
        <div className="category-wrapper">
          <Category />
        </div>
        <div className="searchbar-slider-wrapper">
          <div className="searchbar-wrapper">
            <SearchBar />
          </div>
          <div className="slider-wrapper">
            <Slider />
          </div>
        </div>
      </div>
      <div className="productlist-wrapper">
        <ProductList products={products} />
      </div>
      
    </div>
  );
}

export default Content;