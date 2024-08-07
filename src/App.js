import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./style.css";
import Shop from "./pages/shop/Shop";
import ShopCategory from "./pages/ShopCategory";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Footer from "./components/Footer/Footer";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/kids" element={<ShopCategory category="kid" />} />
        <Route path="/womens" element={<ShopCategory category="women" />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
