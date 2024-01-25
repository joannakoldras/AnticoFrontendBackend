import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Category from '../../components/Content/Category/Category';
import ProductDetails from '../../components/Content/ProductDetails/ProductDetails';
import ProductList from '../../components/Content/ProductList/ProductList';
import './ProductPage.css';

function ProductPage() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    const fetchDataFromServer = () => {
      fetch("https://localhost:44343/Products")
        .then((response) => response.json())
        .then((dataFromServer) => {
          console.log("Fetched products:", dataFromServer.data);
          setProducts(dataFromServer.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    };
  
    fetchDataFromServer();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="content-container">
        <div className="content-wrapper">
          <div className="category-wrapper">
            <Category />
          </div>
          <div className="slider-wrapper">
          {console.log("Product in ProductPage:", product)}
            <ProductDetails product={product} />
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
      <Footer />
    </Fragment>
  );
}

export default ProductPage;
  