import React, { useEffect, useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const Product = () => {
  const [product, setProduct] = useState([]);

  const [pages, setPages] = useState(1);

  const fetchDataProduct = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    console.log(data);

    if (data && data.products) {
      setProduct(data.products);
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, []);


const slectedPage=(selectPage)=>{
    setPages(selectPage)
}

  return (
    <div className="main_container">
      {product.length > 0 && (
        <div className="product">
          {product.slice(pages * 10 - 10, pages * 10).map((prod) => (
            <div className="map_container">
              <img className="img-box" src={prod.thumbnail} alt="" />
              <div>{prod.title}</div>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button  disabled={pages ===1}>
          {" "}
          <CircleArrowLeft onClick={()=>slectedPage(pages-1)} />
        </button>
        {[...Array(product.length / 10)].map((_, i) => (
          <span className={pages === i+1 ?"selected_pagination" :""} onClick={()=>slectedPage(i+1)}>{i + 1}</span>
        ))}
        <button disabled ={pages === Math.ceil(product.length / 10)}>
          <CircleArrowRight onClick={()=>slectedPage(pages+1)} />
        </button>
      
      </div>
    </div>
  );
};

export default Product;
