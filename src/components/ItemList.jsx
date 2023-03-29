
import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      <div className="flex flex-wrap  grid-cols-3 gap-5">
        {" "}
        {productos?.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            description={producto.description}
            category={producto.category}
            image={producto.image}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;

