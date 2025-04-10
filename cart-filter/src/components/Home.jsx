import React, { useState } from "react";
import { ShoppingCartState } from "../context/context";
import Product from "./Product";

const Home = () => {
  const [pages, setPage] = useState(1);

  const {state: { products }} = ShoppingCartState();

  return (
    <>
      <div>
        {/* filter */}
        {/* products */}

        {products?.length > 0 && (
          <div className="product">
            {products.slice(pages * 10 - 10, pages * 10).map((prod , index) => (
              <div key={index} className="map_container">
                <img className="img-box" src={prod.thumbnail} alt="" />
                <div>{prod.title}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {products?.length > 0 && (
        <Product products={products} pages={pages} setPage={setPage} />
      )}
    </>
  );
};

export default Home;
