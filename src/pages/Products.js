import React, { useContext } from "react";
import { ProductContext } from "../context/products";

const Products = () => {
  const { greeting } = useContext(ProductContext);
  return (
    <div>
      <h1>hello from products page</h1>;
      <p>{greeting}</p>
    </div>
  )
}

export default Products
