import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  let { productKey } = useParams();
  const exactProduct = fakeData.find((product) => product.key === productKey);

  return (
    <div>
      <h1>{productKey}</h1>
      <Product showAddToCart={false} product={exactProduct}></Product>
    </div>
  );
};

export default ProductDetail;
