import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({productos}) => {
  const { id } = useParams();


  const bikeFilter = productos && productos.filter((producto) => producto.id == id);

  return (
    <>
      {bikeFilter && bikeFilter.map((producto) => (
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
              stock={producto.stok}
              id={producto.id}
              price={producto.price}
              name={producto.name} 
              />
            </div>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
