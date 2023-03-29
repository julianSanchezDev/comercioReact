import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetail = ({productos}) => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const indumentariasRef = doc(db, "indumentarias", `${id}`);

    getDoc(indumentariasRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("ERROR");
      }
    });
  }, []);

  const cartFilter = productos && productos.filter((producto) => producto.id == id);

  return (
    <>
      {cartFilter && cartFilter.map((producto) => (

        <div className="card card-compact w-96 bg-base-100 shadow-xl my-8" key={producto.id}>
          <img src={producto.image} alt="" />
          <div className="card-body">
            <h2 className="card-title">{producto.title}</h2>

            <h3>Categoria: {producto.category}</h3>
            <div className="card-actions justify-end">
              <p>Precio: {producto.price} USD</p>
              <p>Cantidad En STOCK: {producto.stock}</p>
            </div>
          </div>
          <div className='card-body'>
              <ItemCount 
              stock={producto.stock}
              id={producto.id}
              price={producto.price}
              title={producto.title} 
              image={producto.image}
              description={producto.description}
              name={producto.name} 
              />
            </div>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
