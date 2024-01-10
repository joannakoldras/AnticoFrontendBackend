import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../products';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Category from '../../components/Content/Category/Category';
import SearchBar from '../../components/Content/SearchBar/SearchBar';
import ProductList from '../../components/Content/ProductList/ProductList';

function ProductPage() {
  const { productId } = useParams();
  const productDetails = products.find(product => product.id.toString() === productId);

  

  return (
    <Fragment>
      <Header />
      <Category/>
      <SearchBar/>
      <ProductList products={products} />

      <Footer />
    </Fragment>
  );

}

export default ProductPage;
  // const [productDetails, setProductDetails] = useState(null);

  // useEffect(() => {
    // Tutaj możesz wykonać zapytanie do backendu lub użyć innego źródła danych,
    // aby pobrać informacje o produkcie na podstawie `productId`.

    // Przykład zapytania do API:
    // fetch(`/api/products/${productId}`)
    //   .then(response => response.json())
    //   .then(data => setProductDetails(data));

    // Upewnij się, że Twoje API zwraca dane produktu na podstawie `productId`.
  // }, [productId]);

  // if (!productDetails) {
  //   // Możesz wyświetlić komunikat "Ładowanie" lub coś podobnego, jeśli dane są w trakcie pobierania.
  //   return <p>Ładowanie...</p>;
  // }
