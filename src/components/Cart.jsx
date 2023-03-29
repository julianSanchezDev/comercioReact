
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
                  <th>sport line</th>
                  <th>Estado</th>
                  
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
                        <div className="text-sm opacity-50">INDUMENTARIA</div>
                      </div>
                    </div>
                  </td>
                  <td>
                     SPORT LINE
                    <br />
                    <span className="badge badge-ghost badge-sm">
                     OFERTA
                    </span>
                  </td>
                  <td>Disponible</td>
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



