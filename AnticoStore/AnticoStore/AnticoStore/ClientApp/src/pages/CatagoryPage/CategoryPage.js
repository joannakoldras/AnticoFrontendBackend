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
  const [hasProducts, setHasProducts] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:44343/Products/Categories/${category}`);
        const data = await response.json();

        if (data && data.data && Array.isArray(data.data)) {
          setProducts(data.data);
          setHasProducts(data.data.length > 0);
        } else {
          // Handle the case where the response doesn't have the expected structure
          console.error('Invalid data structure in the response:', data);
          setHasProducts(false);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setHasProducts(false);
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
            <div className="slider-wrapper">
            {loading ? (
            <p>Wczytywanie danych...</p>
          ) : hasProducts ? (
            <ProductList products={products} />
          ) : (
            <p>Brak produktów w tej kategorii.</p>
          )}
          </div>
          </div>
        </div>
        

      </div>
      <Footer />
    </Fragment>
  );
};

export default CategoryPage;