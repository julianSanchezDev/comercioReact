import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Data from './data.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(Data);
  }, []);

  const bikeFilter = productos && productos.filter((producto) => producto.id == id);


  return (
    <ItemDetail productos={bikeFilter} />
  );
};

export default ItemDetailContainer;
