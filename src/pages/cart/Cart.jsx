import React, { useContext } from "react";
import { storeContext } from "../../Context/Context";
import { FaTrashAlt } from "react-icons/fa"; // Import remove icon
import { Link } from "react-router-dom";
import CartTotal from "../CartTotal";
import "./cart.css";

function Cart() {
  const { cartItems, products, inCart, removeFromCart } =
    useContext(storeContext);

  console.log(cartItems);

  return (
    <div className="cart-table-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {inCart.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  srcSet=""
                  alt={item.name}
                  className="cart-item-image"
                />
              </td>
              <td>{item.name}</td>
              <td>${item.new_price}</td>
              <td>{cartItems[item.id]}</td>
              <td>{item.category}</td>
              <td>${item.new_price * cartItems[item.id]}</td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CartTotal />
    </div>
  );
}

export default Cart;
