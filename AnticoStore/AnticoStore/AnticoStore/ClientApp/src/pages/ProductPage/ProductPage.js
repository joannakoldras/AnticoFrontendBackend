import React, { Fragment,useEffect, useState  } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Category from '../../components/Content/Category/Category';
import SearchBar from '../../components/Content/SearchBar/SearchBar';
import ProductList from '../../components/Content/ProductList/ProductList';
import './ProductPage.css';

function ProductPage() {
  //const { productId } = useParams();
  //const productDetails = products.find(product => product.id.toString() === productId);
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
    <Fragment>
    <Header/>
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
    <div className="productlist-wrapper">
    {loading ? (
        <p>Wczytywanie danych...</p>
      ) : (
        <ProductList products={products} />
      )}
    
    </div>
    
  </div>
  <Footer/>
  </Fragment>
    
  );

}

export default ProductPage;
  