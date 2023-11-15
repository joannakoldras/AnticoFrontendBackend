import React, { useEffect, useState } from 'react';
import Category from './Category/Category';
import SearchBar from './SearchBar/SearchBar';
import Slider from './Slider/Slider';
import ProductList from './ProductList/ProductList';
import './Content.css';
import { json } from 'react-router-dom';

function Content() {
  const products2 = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 19.99 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 5.99 },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 5.99 },
  ];

  let [products ,setProducts] = useState("");

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
        <ProductList products={products2} />
      </div>
      <p> {
          data
        }</p>
    </div>
  );
}

async function GetDataFromServer(){

  useEffect(() => {
    fetch("https://localhost:44343/Products") 
    .then((response) => response.json()) 
    .then((dataFromServer) => {
      console.log( dataFromServer.data); 
    });
   }, []);
}

export default Content;