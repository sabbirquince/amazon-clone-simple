import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./product.css";

const Product = (props) => {
  const { img, name, seller, price } = props.product;

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>

      <div className="product-details">
        <p>{name}</p>
        <p>
          <small>By {seller}</small>
        </p>
        <p>Price ${price}</p>

        <button onClick={props.handleAddCart}>
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
