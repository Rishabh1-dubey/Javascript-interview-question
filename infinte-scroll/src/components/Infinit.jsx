import React, { useEffect, useState } from "react";


const Infinite = () => {
  const [product, setProduct] = useState([]);
  const [pages, setPages] = useState(1);
const[loading , setLoading] = useState(false)


  const fetchDataProduct = async () => {
    setLoading(true)
    const response = await fetch(`https://dummyjson.com/products?limit=${pages*10}`);
    const data = await response.json();
    console.log(data);

    if (data && data.products) {
      setProduct(data.products);
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, []);




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

    </div>
  );
};

export default Infinite;
