import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";
import Loading from "../components/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === parseInt(id));
  if (!products.length) {
    return <Loading />;
  }

  const {
    image: { url: PRODUCT_URL },
    title,
    price,
    description
  } = product;

  return (
    <section className="single-product">
      <img src={PRODUCT_URL} alt={title} className="single-product-image" />
      <article>
        <h1>{title}</h1>
        <h2>${price}</h2>
        <p>{description}</p>
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            // add to cart
            addToCart(product);
            // navigate to cart page
            history.push("/cart");
          }}
        >
          add to cart
        </button>
      </article>
    </section>
  );
};

export default ProductDetails;
