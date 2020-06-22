import React, { useState, useEffect } from "react";
import axios from "axios";
import URL from "../utils/URL";
import { featuredProducts } from "../utils/helpers";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${URL}/products`).then((response) => {
      const featured = featuredProducts(response.data);
      setProducts(response.data);
      setFeatured(featured);
      setLoading(false);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
