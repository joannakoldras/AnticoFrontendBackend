import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Category from '../../components/Content/Category/Category';
import SearchBar from '../../components/Content/SearchBar/SearchBar';
import ProductList from '../../components/Content/ProductList/ProductList';
import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);  // Initialize as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:44343/Products/Categories/${category}`);
        const data = await response.json();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

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
    <Fragment>
      <Header />
      <div className="content-container">
        <div className="content-wrapper">
          <div className="category-wrapper">
            <Category />
          </div>
          <div className="searchbar-slider-wrapper">
            <div className="searchbar-wrapper">
            <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
        <div className="categorylist-wrapper">
          {loading ? (
            <p>Wczytywanie danych...</p>
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CategoryPage;