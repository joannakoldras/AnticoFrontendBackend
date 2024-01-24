import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Category from '../../components/Content/Category/Category';
import SearchBar from '../../components/Content/SearchBar/SearchBar';
import Product from '../../components/Content/Product/Product';
import ProductDetails from '../../components/Content/ProductDetails/ProductDetails';
import './ProductPage.css';

function ProductPage() {
  const { id: productId } = useParams();
  console.log('ProductPage rendered with productId:', productId);
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://localhost:44343/Products/${productId}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error.message);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

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
      <Header /><div className="content-container">
        <div className="content-wrapper">
          <div className="category-wrapper">
            <Category />
          </div>
          <div className="slider-wrapper">
        <ProductDetails product={product} />
          </div>
          <div className="searchbar-slider-wrapper">
            <div className="searchbar-wrapper">
            <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
        
        
      </div>
  <Footer />
  </Fragment>
  );
}

export default ProductPage;
  