<<<<<<< HEAD
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, collection, getDocs } from "firebase/firestore";
=======
import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Data from './data.json';
import ItemDetail from './ItemDetail';
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    const db = getFirestore();
    const indumentariaCollection = collection(db, "indumentarias");
    getDocs(indumentariaCollection).then((querySnapshot) => {
      const productos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductos(productos);
    });
  }, []);

  const detailFilter =
    productos && productos.filter((producto) => producto.id == id);

  return <ItemDetail productos={detailFilter} />;
=======
    setProductos(Data);
  }, []);

  const bikeFilter = productos && productos.filter((producto) => producto.id == id);


  return (
    <ItemDetail productos={bikeFilter} />
  );
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
};

export default ItemDetailContainer;
