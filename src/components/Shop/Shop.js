import React, { useState } from "react";
import fakeData from "../../fakeData/index";
import CartContainer from "../Cart-container/CartContainer";
import Product from "../Product/Product";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState(fakeData);
  const first10Products = products.slice(0, 10);

  const [cart, setCart] = useState([]);

  const handleAddCart = (productDetails) => {
    setCart([...cart, productDetails]);
  };

  return (
    <div className="shop-container">
      <div className="shopping">
        {first10Products.map((pr) => (
          <Product
            product={pr}
            handleAddCart={() => {
              handleAddCart(pr);
            }}
          ></Product>
        ))}
      </div>

      <div className="cart">
        <CartContainer cart={cart} itemsOrdered={cart.length}></CartContainer>
      </div>
    </div>
  );
};

export default Shop;
