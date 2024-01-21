import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <div className="product-list">
      <div className="main-content">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
// const {categoryName} = useParams();
  // const[products, setProducts] = useState([]);

  // fetch(`/api/products?category=${categoryName}`)
    //   .then(response => response.json())
    //   .then(data => setProductList(data));