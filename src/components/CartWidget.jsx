
import React from "react";
import { useContext } from "react";
import { CartContext } from "./contexts/ShoppingCartContext";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return (
    <>
      <div className="container">
        <button className="flex items-center space-x-2">
          <img src="/public/carrito-de-compras.png" alt="" id="carroCompras" />
          <div className="badge badge-secondary">{quantity}</div>
        </button>
      </div>
    </>
  );
};

export default CartWidget;
