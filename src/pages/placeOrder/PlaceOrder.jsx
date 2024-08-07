import React, { useContext, useState } from "react";
import { storeContext } from "../../Context/Context";
import "./placeOrder.css";
function PlaceOrder() {
  const { getTotal } = useContext(storeContext);
  const subtotal = getTotal();
  const [fees, setFees] = useState(2);
  return (
    <div className="order-container">
      <div className="form">
        <h1>Delivery Information</h1>
        <div className="input-col">
          <input type="text" placeholder="Firse name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="text" placeholder="Email Adress" />
        <input type="text" placeholder="Street" />
        <div className="input-col">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="input-col">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="cart-total-container">
        <h1>Cart Totals</h1>
        <div className="cart-total-item">
          <p>Subtotal: </p> <span>${getTotal()}</span>
        </div>
        <div className="cart-total-item">
          {" "}
          <p>Delivery Fee </p> <span>${getTotal() > 0 ? 2 : 0}</span>
        </div>
        <div className="cart-total-item">
          <p>Total: </p> <span>${getTotal() > 0 ? 2 + getTotal() : 0}</span>
        </div>
        <button className="checkout-btn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}

export default PlaceOrder;
