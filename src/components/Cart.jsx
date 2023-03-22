<<<<<<< HEAD
import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "./contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  console.log(cart, "estoy en cart");

  return (
    <>
    
      {cart.map((item) => {
        return (
          <div className="overflow-x-auto w-full" key={item.id}>
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Indumentaria</th>
                  <th>Job</th>
                  <th>Estado</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Disponible</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">{item.description}</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
      <SendOrder />
    </>
  );
};

export default Cart;
=======
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
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
