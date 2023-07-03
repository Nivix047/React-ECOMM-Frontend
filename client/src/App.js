import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import products from "./data";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const addQty = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const reduceQty = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={addToCart} />
      ))}
      <Cart
        cart={cart}
        addQty={addQty}
        reduceQty={reduceQty}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
