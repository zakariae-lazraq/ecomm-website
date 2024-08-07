import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../Context/Context";

function CartTotal() {
  const { getTotal } = useContext(storeContext);
  const subtotal = getTotal();
  const [fees, setFees] = useState(2);
  console.log(getTotal());

  return (
    <div className="cart-totals-box">
      <div className="cart-totals-container">
        <h1>Cart Totals</h1>
        <div className="cart-total-item">
          <p>Subtotal: </p> <span>${subtotal}</span>
        </div>
        <div className="cart-total-item">
          <p>Delivery Fee: </p>{" "}
          <span>${subtotal === 0 ? 0 :fees }</span>
        </div>
        <div className="cart-total-item">
          <p>Total: </p> <span>${subtotal===0?0:subtotal + fees}</span>
        </div>
        <Link to={"/order"}>
          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
        </Link>
      </div>
      <div className="contact-cart">
        <p>If you have a promo code, enter it here</p>
        <div className="input-group">
          <input type="text" placeholder="Promo code" />
          <button className="promo-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
