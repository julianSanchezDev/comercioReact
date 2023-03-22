<<<<<<< HEAD
import React, { useContext, useState } from "react";
import { CartContext } from "./contexts/ShoppingCartContext";
const ItemCount = ({ id, title, price, image }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, price, title, image }];
      }
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
    <button onClick={decrement} className="btn btn-outline btn-error col-span-1">
      -
    </button>
    <div className="col-span-1">
      <button className="btn btn-outline btn-primary" onClick={addToCart}>
        Agregar {count}
      </button>
    </div>
    <button onClick={increment} className="btn btn-outline btn-success col-span-1">
      +
    </button>
  </div>
  
  );
};

export default ItemCount;
=======
import React, { useState } from 'react'

const ItemCount = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className=''>
      <button onClick={decrement} className='btn btn-outline btn-error' >RESTAR</button>
      <span>{count}</span>
      <button onClick={increment} className='btn btn-outline btn-success'>SUMAR</button>
    </div>
  )
}

export default ItemCount
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
