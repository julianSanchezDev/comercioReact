
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
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

  const catFilter = productos.filter(
    (producto) => producto.category === category
  );

  return (
    <div>
      {category ? (
        <ItemList productos={catFilter} />
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
