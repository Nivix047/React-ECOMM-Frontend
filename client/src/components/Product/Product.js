import React from "react";

const Product = ({ product, onAddToCart }) => (
  <div className="product">
    <h2>{product.name}</h2>
    <h3>{product.price}</h3>
    <button onClick={() => onAddToCart(product)}>Add to cart</button>
  </div>
);

export default Product;
