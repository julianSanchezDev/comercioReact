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

export default ItemListContainer;
