import React from "react";
import Hero from "../../Hero/Hero";
import "./shop.css";

import data_product from "../../assets/data";
import new_collection from "../../assets/new_collections";
import Card from "../../components/Card/Card";

import bannerImg from "../../assets/exclusive_image.png";

function Shop() {
  return (
    <div className="shop-container">
      <Hero />
      <div className="popular-women">
        <div className="shop-title">
          <h1 >POPULAR IN WOMEN</h1>
          <hr />
        </div>

        <div className="shop-items">
          {data_product.map((item, index) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="shop-banner">
        <div className="banner-info">
          <h2>
            Exclusive <br /> Offers For You
          </h2>
          <p>Get 20% off on all orders above $50</p>
          <button>Check Now</button>
        </div>
        <img src={bannerImg} alt="" srcset="" />
      </div>
      <div className="new-collections">
        <div className="shop-title">
          <h1>New Collections</h1>
          <hr />
        </div>

        <div className="shop-items">
          {new_collection.map((item, index) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </div>

      <div className="exclusive-contact">
        <h2>Get Exclusive Offers On Your Email</h2>
        <p>Subscribe to our newsletter and stay updated</p>

        <div className="contact-input">
          <input type="text" placeholder="Get Your Offer , NOW !!" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
