import { createContext, useContext, useEffect, useReducer } from "react";
import { ShoppingCartReducer } from "../context/reducer";

const ShoppingCart = createContext();

const Context = ({ children }) => {
  //product stae

  const [state, dispatch] = useReducer(ShoppingCartReducer, {
    products: [],
  });

  const fetchProduct = async () => {
    const res = await fetch("/products.json");
    const data = await res.json();

    if (data && data.products) {
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: data.products,
      });
    }
  };


  useEffect(()=>{
fetchProduct()
  },[])

  return <ShoppingCart.Provider
    value={{state,dispatch}}
  >{children}</ShoppingCart.Provider>;
};

export const ShoppingCartState=()=>{
    return useContext(ShoppingCart)
}

export default Context;
