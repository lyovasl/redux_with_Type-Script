import { useState } from "react";

import Cart from "./Cart.tsx";
import { useCartSelector } from "./store/hooks.ts";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const itemQuantity = useCartSelector((state) =>
    state.cart.items.reduce((acc, cur) => acc + cur.quantity, 0)
  );

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({itemQuantity})</button>
        </p>
      </header>
    </>
  );
}
