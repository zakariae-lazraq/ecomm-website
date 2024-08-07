import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { storeContext } from "../../Context/Context";
import { FaStar } from "react-icons/fa";
import "./products.css";

function Products() {
  const { products, cartItems, addToCart } = useContext(storeContext);
  const { id } = useParams();
  const product = products.filter((item) => item.id === +id)[0];
  const [selectedImage, setSelectedImage] = useState(product.image);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="products-container">
      <div className="left-side">
        <div className="main-image-container">
          <img className="main-image" src={selectedImage} alt={product.name} />
          <div className="short-images">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={product.image}
                alt={`Thumbnail ${index}`}
                onClick={() => handleImageClick(product.image)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="right-side">
        <h2>{product.name}</h2>
        <div className="rating-icons">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} />
          ))}
          <span>(122)</span>
        </div>
        <h3 className="product-price">
          <del>${product.old_price}</del> ${product.new_price}
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          architecto quasi nesciunt reprehenderit non laudantium accusamus.
        </p>

        <h3>Select Size</h3>
        <div className="choosing-sizes">
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
        </div>
        <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
          ADD TO CART
        </button>

        <div className="additional-info">
          <h3>
            <b>Category: </b>
            {product.category}
          </h3>
          <h3>
            <b>Tags: </b>
            Modern, Latest
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Products;
