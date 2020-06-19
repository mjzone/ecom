import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <h1>
      Hello from the product details page. {id}
    </h1>
  )
}

export default ProductDetails

