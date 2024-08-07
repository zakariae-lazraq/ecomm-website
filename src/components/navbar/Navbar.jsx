import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { storeContext } from "../../Context/Context";

function Navbar() {
  const { category, setCategory, shoppingCountCart, cartItems } =
    useContext(storeContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  console.log(Object.keys(shoppingCountCart).length);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav-store">
      <div className="left-nav">
        <Link className="logo" to={"/"}>
       <img src={logo} alt="logo" srcset="" />
          <h2>SHOPPER</h2>
        </Link>
        <FaBars
          className="mobile-menu-icon"
          size={24}
          onClick={toggleMobileMenu}
        />
      </div>
      <ul className={`center-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <Link to={"/"} onClick={() => setCategory("Shop")}>
            Shop
            {category === "Shop" ? <hr className="underline-link" /> : ""}
          </Link>
        </li>
        <li>
          <Link to={"/mens"} onClick={() => setCategory("mens")}>
            Men
            {category === "mens" ? <hr className="underline-link" /> : ""}
          </Link>
        </li>
        <li>
          <Link to={"/womens"} onClick={() => setCategory("womens")}>
            Women
            {category === "womens" ? <hr className="underline-link" /> : ""}
          </Link>
        </li>
        <li>
          <Link to={"/kids"} onClick={() => setCategory("kids")}>
            Kids
            {category === "kids" ? <hr className="underline-link" /> : ""}
          </Link>
        </li>
      </ul>
      <div className="right-nav">
        <button>Sign In</button>
        <div className="shopping-cart">
          <Link to={"/cart"}>
            <FaShoppingCart size={24} />
          </Link>
          {Object.keys(cartItems).length > 0 ? (
            <span className="cart-count">
              {shoppingCountCart === 0 ? "" : shoppingCountCart}
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
