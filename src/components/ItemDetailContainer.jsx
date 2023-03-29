
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {

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

  const detailFilter =productos && productos.filter((producto) => producto.id==id);

  return <ItemDetail productos={detailFilter} />;

    
 
};

export default ItemDetailContainer;
