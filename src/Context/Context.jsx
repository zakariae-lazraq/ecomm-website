import { createContext, useEffect, useState } from "react";

import allProducts from "../assets/all_product";
import Cart from "../pages/cart/Cart";
export const storeContext = createContext(null);

export default function GlobalState({ children }) {
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState(allProducts);
  const [cartItems, setCartItems] = useState({});
  const [inCart, setInCart] = useState([]);

  const shoppingCountCart = Object.values(cartItems).reduce((count, item) => {
    return count + item;
  },0);

  const cartIds = Object.keys(cartItems).map((id) => parseInt(id, 10));
  useEffect(() => {
    setInCart(products.filter((item) => cartIds.includes(item.id)));
  }, [cartItems]);

  const getTotal = () => {
    return inCart.reduce((total, item) => {
      return total + item.new_price * cartItems[item.id];
    }, 0);
  };

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prevCart) => ({ ...prevCart, [itemId]: 1 }));
    } else {
      setCartItems((prevCart) => ({
        ...prevCart,
        [itemId]: prevCart[itemId] + 1,
      }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => {
      const updateCart = { ...prevCart };
      if (updateCart[itemId] > 1) {
        updateCart[itemId] -= 1;
      } else {
        delete updateCart[itemId];
      }
      return updateCart;
    });
  };
  const [filteredProducts, setFilteredProducts] = useState([]);

  const values = {
    category,
    setCategory,
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    addToCart,
    cartItems,
    inCart,
    removeFromCart,
    getTotal,
    shoppingCountCart,
  };
  return (
    <storeContext.Provider value={values}>{children}</storeContext.Provider>
  );
}
