import { useEffect, useState } from "react";
import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, setPlantList] = useState([]
    )
  useEffect(() => {
  
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantList => setPlantList(plantList))
  }, [])

  //FUNCTIONALITY FOR UPDATING NEW ARRAY WITH NEW PLANT
  function addNewPlant(newPlant) {
    setPlantList([...plantList, newPlant])
  }


  
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search />
      <PlantList addNewPlant={addNewPlant} plantList={plantList} setPlantList={setPlantList} />
    </main>
  );
}

export default PlantPage;
