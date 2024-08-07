import React from "react";
import "./Card.css";
import { MdAdd, MdRemove } from "react-icons/md";

function Card({ item, onClick }) {
  return (
    <div className="card-item" onClick={onClick}>
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <span>
        {item.new_price} <del>{item.old_price}</del>
      </span>
    </div>
  );
}

export default Card;
