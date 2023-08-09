import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList}) {

// const [plantList, setPlantList] = useState([]
//   )
// useEffect(() => {

//   fetch("http://localhost:6001/plants")
//   .then(res => res.json())
//   .then(plantList => setPlantList(plantList))
// }, [])


  return (
    <ul className="cards">
    {plantList.map (plant => 
    <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price} />)}
    </ul>
  );
}

export default PlantList;
