import React from "react";
import { useState } from "react";

function PlantCard({image, price, name}) {

 const [inStock, setInStock] = useState(true)


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>

      <button onClick={() => 
        {setInStock(!inStock)}} 
        className={inStock ? "primary" : ""}> 
      {inStock ? "In Stock" : "Out of Stock"}
      </button>
      
    </li>
  );
}

export default PlantCard;







