import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1000)); 

    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
    );
    const data = await response.json();

    if (data && data.products) {
      setProducts((prev) => [...prev, ...data.products]); // Append new products
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 10 >=
      document.documentElement.offsetHeight
    ) {
      if (!loading) {
        fetchProducts();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Infinite Scroll Example</h2>
      <div className="product-container">
        {products.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.thumbnail} alt={prod.title} className="product-img" />
            <p>{prod.title}</p>
          </div>
        ))}
      </div>

      {loading && <p className="loading">Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
