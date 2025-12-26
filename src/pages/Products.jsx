import { useEffect, useState } from "react";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="card-body">
              <h3>{product.name}</h3>
              <p className="desc">{product.description}</p>
            </div>
            <div className="card-footer">
              <h2>₹{product.price}</h2>
              <button>Subscribe</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
