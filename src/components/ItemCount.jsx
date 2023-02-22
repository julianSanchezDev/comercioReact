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
