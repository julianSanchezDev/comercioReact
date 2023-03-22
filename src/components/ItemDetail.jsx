import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
=======
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37

const ItemDetail = ({productos}) => {
  const { id } = useParams();

<<<<<<< HEAD
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
=======

  const bikeFilter = productos && productos.filter((producto) => producto.id == id);

  return (
    <>
      {bikeFilter && bikeFilter.map((producto) => (
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-8" key={producto.id}>
          <img src={producto.image} alt="" />
          <div className="card-body">
            <h2 className="card-title">{producto.title}</h2>
<<<<<<< HEAD
            <h3>CATEGORIA: {producto.category}</h3>
            <div className="card-actions justify-end">
              <p>PRECIO: {producto.price} USD</p>
=======
            <h3>Categoria: {producto.category}</h3>
            <div className="card-actions justify-end">
              <p>Precio: {producto.price} USD</p>
              <p>Cantidad En STOCK: {producto.stock}</p>
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
            </div>
          </div>
          <div className='card-body'>
              <ItemCount 
<<<<<<< HEAD
              stock={producto.stock}
              id={producto.id}
              price={producto.price}
              title={producto.title} 
              image={producto.image}
              description={producto.description}
=======
              stock={producto.stok}
              id={producto.id}
              price={producto.price}
              name={producto.name} 
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
              />
            </div>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
