import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

//1. When the app starts, I can see all plants. YES
//2. I can add a new plant to the page by submitting the form. YES
//3. I can mark a plant as "sold out". YES
//4. I can search for plants by their name and see a filtered list of plants.


//We need two properties to manage our components state:
// One parameter will be needed to store the original list of search results.
// One to store the results that have been filtered by the users' selection
// Some code to move the data passed in as props into state using componentWillMount()
// Some JSX to render the component
// An event handler to take the user input, filter the collection and modify the state, forcing React to re-render the component



function App() {


  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
