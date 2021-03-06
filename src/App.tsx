/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "./styles/App.scss";

/* Image Imports */

/* Component Imports */
import Planner from "./components/Planner";
import Timers from "./components/Timers";

/* Component Interfaces */

/* Component/Functions */
const App = () => {
  //Function return statement
  return (
    <div className="App">
      <Planner />
      <Timers />
    </div>
  );
};

/* Export Statement */
export default App;
