import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {

const [newPlantName, setNewPlantName] = useState()

const [newPlantImg, setNewPlantImg] = useState()

const [newPlantPrice, setNewPlantPrice] = useState()


//HANDLE INPUT EVENTS, ADD NEW POST REQUEST AND FETCH NEW TOY

const handlePlantName = (event) => setNewPlantName(event.target.value)
const handlePlantImg = (event) => setNewPlantImg(event.target.value)
const handlePlantPrice = (event) => setNewPlantPrice(event.target.value)



const handleNewPlantSubmit = (event) => {
  event.preventDefault()
  const OPTIONS = {
      method: "POST",
      headers: {
          "ACCEPT": "application/json",
          "Content-Type" : "application/json"
      },
      body: JSON.stringify ({
          name: newPlantName,
          image: newPlantImg,
          price: newPlantPrice
      })
  }
   fetch("http://localhost:6001/plants", OPTIONS) 
   .then(res => res.json())
   .then(newPlant => addNewPlant(newPlant))
   setNewPlantName("")
   setNewPlantImg("")
   setNewPlantPrice("")
    
}




  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input onChange={handlePlantName} type="text" name="name" placeholder="Plant name" value={newPlantName} />
        <input onChange={handlePlantImg} type="text" name="image" placeholder="Image URL" value={newPlantImg}/>
        <input onChange={handlePlantPrice} type="number" name="price" step="0.01" placeholder="Price" value={newPlantPrice}/>
        <button onClick={handleNewPlantSubmit} value="Add new plant" type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
