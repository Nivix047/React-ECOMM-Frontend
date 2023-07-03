import React from "react";

const Cart = ({ cart, addQty, reduceQty, removeFromCart }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {cart.map((product, idx) => (
      <div key={idx}>
        <h5>{product.name}</h5>
        <h5>{product.price}</h5>
        <h5>Quantity: {product.qty}</h5>
        <button onClick={() => addQty(product)}>+</button>
        <button onClick={() => reduceQty(product)}>-</button>
        <button onClick={() => removeFromCart(product)}>
          Remove from cart
        </button>
      </div>
    ))}
  </div>
);

export default Cart;
