import React from "react";
import { Link } from "react-router-dom";

const CartContainer = (props) => {
  const { cart } = props;

  const priceList = cart.map((item) => {
    const itemCount = item.count || 1;
    const singleItemPrice = item.price * itemCount;
    return singleItemPrice;
  });

  let totalPrice = 0;
  for (let i = 0; i < priceList.length; i++) {
    const itemPrice = priceList[i];
    totalPrice = totalPrice + itemPrice;
  }

  return (
    <div>
      <h3>Order Summery</h3>
      <div>
        <h4>Items Ordered: {cart.length}</h4>
        <br />
        <h4>Total Price: ${totalPrice}</h4>
        <p>Shipping Handling: {}</p>
        <p>total Before TAX: ${}</p>
        <p>Order Total: ${}</p>
        <br />
        <Link to="/review">
          <button className="button">Review</button>
        </Link>
      </div>
    </div>
  );
};

export default CartContainer;
