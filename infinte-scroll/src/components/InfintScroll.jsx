import React, { useEffect, useState } from "react";

const InfintScroll = () => {
  const [pages, setPages] = useState(1);
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const InfiniteScroll = async () => {
    setLoading(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${(pages - 1) * 10}`
    );

    const data = await response.json();
    if (data && data.products) {
      setProducts((prev) => [...prev, ...data.products]);
      setPages((prev) => prev + 1);
    }
    setLoading(false);
  };

  useEffect(() => {
    InfiniteScroll();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 10 >=
      document.documentElement.offsetHeight
    ) {
      if (!loading) {
        InfiniteScroll();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Infinite Scroll Example</h2>
        <div className="product-container">
          {product.map((prod) => (
            <div key={prod.id}>
              <img src={prod.thumbnail} />
              <p>{prod.title}</p>
            </div>
          ))}
        </div>
        {loading && <p>laidng .......</p>}
      </div>
    </div>
  );
};

export default InfintScroll;
