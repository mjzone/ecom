import React from "react";

export const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
    const greeting = "Hello Products";
    const products = { id: 100, name: "Nike Shoe"}
    return (
        <ProductContext.Provider value={{greeting, products}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
