import { useEffect, useState } from "react";
import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


//FILTER --> CREATE A STATE FOR SEARCH TERM, SET TO EMPTY STRING PASS DOWN AS PROPS TO SEARCH BAR
// CREATE FUNCTION FOR FILTERTING PLANTS, ASSIGN IT A VARIABLE.


function PlantPage() {

  const [plantList, setPlantList] = useState([])
  const [searchTerm, setSearchTerm]= useState("")


  useEffect(() => {
  
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantList => setPlantList(plantList))
  }, [])

  //FUNCTIONALITY FOR UPDATING NEW ARRAY WITH NEW PLANT
  function addNewPlant(newPlant) {
    setPlantList([...plantList, newPlant])
  }

//FUNCTIONALITY FOR FILTERING
const filteredPlant = plantList.filter((plant) => {
  return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
})

  
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <PlantList plantList={filteredPlant} addNewPlant={addNewPlant}  setPlantList={setPlantList} />
    </main>
  );
}

export default PlantPage;
