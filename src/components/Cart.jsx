import React from 'react'

const Cart = () => {
  return (
   <>
      <main className='flex items-center justify-center h-screen bg-gray-100'>

    <form action="">
      <div className='bg-white w-96 p-6 rounded shadow-sm'>
      <div className='flex items-center justify-center mb-4'>
      <img src="/logomain.svg" alt="" className='h-32'/>
      </div>
      <label className='text-gray-700'>Email</label>
      <input className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4'
      type="email"/>
        <label className='text-gray-700'>Password</label>
      <input className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4'
      type="password"/>
       <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox" checked className="checkbox checkbox-primary" />
  </label>
      </div>
      </form>
      </main>
   
   </>
  )
}

export default Cart