import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import CartReview from "../CartReview/CartReview";
import "./review.css";
import CartContainer from "../Cart-container/CartContainer";

const Review = () => {
  const handleRemove = (key) => {
    const updateCart = cart.filter((item) => item.key !== key);
    setCart(updateCart);
    removeFromDatabaseCart(key);
  };

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();

    const productKeys = Object.keys(savedCart);

    const findCartProduct = productKeys.map((singleKey) => {
      const matchedProduct = fakeData.find(
        (everyProduct) => everyProduct.key === singleKey
      );
      matchedProduct.count = savedCart[singleKey];
      return matchedProduct;
    });

    setCart(findCartProduct);
  }, []);

  return (
    <div className="review">
      <div className="review__product">
        {cart.map((cartProduct) => (
          <CartReview
            key={cartProduct.key}
            cartProduct={cartProduct}
            handleRemove={handleRemove}
          ></CartReview>
        ))}
      </div>

      <div className="review__cart">
        <CartContainer cart={cart}></CartContainer>
      </div>
    </div>
  );
};

export default Review;
