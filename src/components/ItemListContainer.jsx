<<<<<<< HEAD
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
=======
import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Data from './data.json';
import ItemList from './ItemList';

const ItemListContainer = () => {

  const { category } = useParams();
  console.log(category);
  const {id} = useParams();
  const [productos, setProductos] = useState([]);
  useEffect(()=>{

    async function fetchData(){

      try{
        const response =await fetch(Data);
        const data = await response.json();
        setBikes(data);
      }catch (error){
        console.log(error);
      }

    }
    
  },[]);


  const catFilter = Data.filter((producto)=> producto.category === category);
    
  return (
    <div>
        {category ? <ItemList productos = {catFilter}/> : <ItemList productos={Data}/>}
    </div>

  )
}
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37

export default ItemListContainer;
