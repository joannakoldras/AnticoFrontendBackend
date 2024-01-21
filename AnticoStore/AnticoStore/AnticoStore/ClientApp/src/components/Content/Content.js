import React, { useEffect, useState } from 'react';
import Category from './Category/Category';
import SearchBar from './SearchBar/SearchBar';
import Slider from './Slider/Slider';
import ProductList from './ProductList/ProductList';
import './Content.css';

function Content() {
  

  let [products ,setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDataFromServer = () => {
    fetch("https://localhost:44343/Products")
      .then((response) => response.json())
      .then((dataFromServer) => {
        setProducts(dataFromServer.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania danych:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []); 


  const handleSearch = (searchString) => {
    setLoading(true);

    fetch(`https://localhost:44343/Products/search/${searchString}`)
      .then((response) => response.json())
      .then((dataFromServer) => {
        setProducts(dataFromServer.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Błąd podczas wyszukiwania:', error);
        setLoading(false);
      });
  };

  return (
    <div className="content-container">
      <div className="content-wrapper">
        <div className="category-wrapper">
          <Category />
        </div>
        <div className="searchbar-slider-wrapper">
          <div className="searchbar-wrapper">
          <SearchBar onSearch={handleSearch} />
          </div>
          <div className="slider-wrapper">
            <Slider />
          </div>
        </div>
      </div>
      <div className="productlist-wrapper">
      {loading ? (
          <p>Wczytywanie danych...</p>
        ) : (
          <ProductList products={products} />
        )}
      
      </div>
      
    </div>
  );
}


export default Content;