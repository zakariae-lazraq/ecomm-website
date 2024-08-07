import React, { useContext, useEffect } from "react";
import { storeContext } from "../Context/Context";
import Card from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
import banner_kids from "../assets/banner_kids.png";
import banner_women from "../assets/banner_women.png";
import banner_men from "../assets/banner_mens.png";

function ShopCategory({ category }) {
  const { products, setProducts, filteredProducts, setFilteredProducts } =
    useContext(storeContext);

  useEffect(() => {
    if (products && setFilteredProducts) {
      setFilteredProducts(
        products.filter((item) => item.category === category)
      );
    }
  }, [category, products, setFilteredProducts]);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="shop-category">
      <div className="banner-category">
        <img
          src={
            category === "kid"
              ? banner_kids
              : category === "women"
              ? banner_women
              : category === "men"
              ? banner_men
              : ""
          }
          alt=""
          srcset=""
        />
      </div>
      <div className="shop-title">
        <h1>{category} Collection</h1>
        <hr />
      </div>

      <div className="shop-items">
        {filteredProducts &&
          filteredProducts.map((item) => (
            <Card
              item={item}
              key={item.id}
              onClick={() => handleNavigate(item.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default ShopCategory;
