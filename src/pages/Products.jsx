import { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activeProductId, setActiveProductId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSubscribeClick = (productId) => {
    setActiveProductId(
      activeProductId === productId ? null : productId
    );
  };

  const handlePlanSelect = (productId, plan) => {
    console.log("Product:", productId, "Plan:", plan);
    // navigate or call API here
  };

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

              <button onClick={() => handleSubscribeClick(product.id)}>
                Subscribe
              </button>

              {activeProductId === product.id && (
                <div className="subscription-options">
                  <button
                    onClick={() =>
                      handlePlanSelect(product.id, "monthly")
                    }
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() =>
                      handlePlanSelect(product.id, "yearly")
                    }
                  >
                    Yearly
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
