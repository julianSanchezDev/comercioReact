<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, title, image }) => {
  console.log("estoy en ITEM");

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl my-8" key={id}>
      <img src={image} alt="" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end mt-6">
          <Link to={`./item/${id}`}>
            <button className="btn btn-primary"> Ver Detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
=======
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,title,image}) => {
    
  console.log("estoy en ITEM");

  return (

    <div className="card card-compact w-96 bg-base-100 shadow-xl my-8" key={id}>
    <img src={image} alt="" />
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <div className="card-actions justify-end mt-6">
          <button className="btn btn-primary">     
                <Link to={`./item/${id}`}>Ver detalle</Link>
            </button>
      </div>
    </div>
  </div>

  )
}

export default Item

>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
