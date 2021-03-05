import React from "react";

const CartReview = (props) => {
  const { name, count, img, key, price } = props.cartProduct;
  const { handleRemove } = props;

  return (
    <div className="singleProduct">
      <img src={img} alt="" />
      <div>
        <h3>{name}</h3>
        <h5>Quantity: {count}</h5>
        <br />
        <p>price: {price}</p>
        <button onClick={() => handleRemove(key)} className="button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartReview;
