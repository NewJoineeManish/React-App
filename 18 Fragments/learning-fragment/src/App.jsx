import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
// import "./App.css";

function App() {
  // let foodItems = [];
  let foodItems = ["sabzi", "dosa", "green veg", "roti", "salad", "milk"];
  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage foodList={foodItems} />
      <FoodItems foodList={foodItems} />
    </>
  );
}

export default App;
