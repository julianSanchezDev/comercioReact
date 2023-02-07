import React from 'react'

const CartWidget = () => {

  const numeroFijo = 10;
  
  return (
    <div>

        <span class="material-symbols-outlined">
        shopping_cart
        </span>
        <p>{numeroFijo}</p>

    </div>
  )
}

export default CartWidget