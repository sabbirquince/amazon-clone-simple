import React from "react";

const CartContainer = (props) => {
  const { cart, itemsOrdered } = props;

  const priceList = cart.map((item) => item.price);

  let totalPrice = 0;
  for (let i = 0; i < priceList.length; i++) {
    const itemPrice = priceList[i];
    totalPrice = totalPrice + itemPrice;
  }

  return (
    <div>
      <h3>Order Summery</h3>
      <div>
        <h4>Items Ordered: {itemsOrdered}</h4>
        <p>Items: ${totalPrice}</p>
        <p>Shipping Handling: {}</p>
        <p>total Before TAX: ${}</p>
        <p>Order Total: ${}</p>
      </div>
    </div>
  );
};

export default CartContainer;
