import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/index";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import CartContainer from "../Cart-container/CartContainer";
import Product from "../Product/Product";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState(fakeData);
  const first10Products = products.slice(0, 10);

  const [cart, setCart] = useState([]);

  const handleAddCart = (productDetails) => {
    setCart([...cart, productDetails]);

    const sameProduct = cart.filter(
      (product) => product.key === productDetails.key
    );
    let count = sameProduct.length + 1;
    addToDatabaseCart(productDetails.key, count);
  };

  useEffect(() => {
    const existingCartInfo = getDatabaseCart();
    const productKeys = Object.keys(existingCartInfo);

    const findMatchedProduct = productKeys.map((singleKey) => {
      const matchedProduct = fakeData.find(
        (product) => product.key === singleKey
      );
      matchedProduct.count = existingCartInfo[singleKey];
      return matchedProduct;
    });

    setCart(findMatchedProduct);
  }, []);

  console.log(cart);

  return (
    <div className="shop-container">
      <div className="shopping">
        {first10Products.map((pr) => (
          <Product
            showAddToCart={true}
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
