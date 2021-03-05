import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { img, name, seller, price, key } = props.product;
  const { showAddToCart } = props;

  // let addButton;
  // if (showAddToCart) {
  //   addButton = (
  //     <button onClick={props.handleAddCart}>
  //       <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
  //     </button>
  //   );
  // }

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>

      <div className="product-details">
        <p>
          <Link to={`/product/${key}`}>{name}</Link>
        </p>
        <p>
          <small>By {seller}</small>
        </p>
        <p>Price ${price}</p>

        {showAddToCart && (
          <button className="button" onClick={props.handleAddCart}>
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart{" "}
          </button>
        )}

        {/* {addButton} */}
      </div>
    </div>
  );
};

export default Product;
