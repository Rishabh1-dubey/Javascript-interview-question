import React, { useEffect, useState, useCallback } from "react";

const Infinite = () => {
  const [product, setProduct] = useState([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchDataProduct = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(
      `https://dummyjson.com/products?limit=${pages * 10}`
    );
    const data = await response.json();

    if (data && data.products) {
      setProduct((prev) => [...prev, ...data.products]); // Append new products
      setPages((prev) => prev + 1); // Increment pages for next fetch
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDataProduct();
  }, []);

  // Throttling Implementation
  const myThrottle = (cb, d) => {
    let last = 0;

    return (...args) => {
      let now = new Date().getTime();
      if (now - last < d) return; // ✅ Fixed condition
      last = now;
      cb(...args);
    };
  };

  const handleScroll = useCallback(
    myThrottle(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 500 >
        document.documentElement.offsetHeight
      ) {
        fetchDataProduct();
      }
    }, 500),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="main_container">
      {product.length > 0 && (
        <div className="product">
          {product.map((prod) => (
            <div key={prod.id} className="map_container">
              <img className="img-box" src={prod.thumbnail} alt="" />
              <div>{prod.title}</div>
            </div>
          ))}
        </div>
      )}
      {loading &&( <div className="loading-container">
    <div className="spinner"></div>
  </div>)}
    </div>
  );
};

export default Infinite;
