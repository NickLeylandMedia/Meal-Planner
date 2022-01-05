/* Library Imports */
//React
import React, { useEffect, useRef, useState } from "react";

/* Stylesheet Imports */
import "../styles/Planner.scss";

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Planner = () => {
  //Variable for blank meal plan
  const blank = [
    { Day: "Sunday", Meals: [] },
    { Day: "Monday", Meals: [] },
    { Day: "Tuesday", Meals: [] },
    { Day: "Wednesday", Meals: [] },
    { Day: "Thursday", Meals: [] },
    { Day: "Friday", Meals: [] },
    { Day: "Saturday", Meals: [] },
  ];

  //Variable for storing meals
  const food = [
    { CatName: "Appetizers", Items: [] },
    {
      CatName: "Beverages",
      Items: [
        { SubCatName: "Cold", Items: [] },
        { SubCatName: "General", Items: [] },
        { SubCatName: "Hot", Items: [] },
      ],
    },
    { CatName: "Breads", Items: [] },
    {
      CatName: "Breakfast",
      Items: [
        { SubCatName: "Cereals", Items: [] },
        { SubCatName: "QuickBreads", Items: [] },
        { SubCatName: "Sandwiches", Items: [] },
      ],
    },
    { CatName: "Condiments", Items: [] },
    { CatName: "Dessert", Items: [] },
    {
      CatName: "Entrees",
      Items: [
        { SubCatName: "Meat", Items: [] },
        { SubCatName: "Mexican", Items: [] },
        { SubCatName: "Pasta", Items: [] },
        { SubCatName: "Pizza", Items: [] },
        { SubCatName: "Stromboli", Items: [] },
      ],
    },
    { CatName: "General", Items: [] },
    { CatName: "Salads", Items: [] },
    { CatName: "Sandwiches", Items: [] },
    { CatName: "Sides", Items: [] },
    { CatName: "Soups", Items: [] },
  ];

  //State to store target day
  const [dayTarg, setDayTarg] = useState<string>("");

  //State to store week plan
  const [plan, setPlan] = useState(blank);

  //State to store panel state
  const [panelAct, setPanelAct] = useState<boolean>(false);

  //State to store maintenance panel action
  const [maintAct, setMaintAct] = useState<string>("Actions");

  //Effect for loading from local storage
  useEffect(() => {
    // if (localStorage.getItem("plan"))
  }, []);

  //Variable for storing if it is the first run or not
  const isFirstRun = useRef(true);

  //Effect to display meal adding panel
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    } else {
      setPanelAct(true);
    }
  }, [dayTarg]);

  //Logic to render plan from state
  const renderedPlan = plan.map(({ Day, Meals }) => {
    let renderedMeals;
    if (Meals.length) {
      renderedMeals = Meals.map(({ Name }) => {
        return <li className="meal">{Name}</li>;
      });
    } else {
      renderedMeals = <li className="mealPH">Please add a meal!</li>;
    }

    return (
      <div className="day" key={`day${Day}`}>
        <div className="dayMeals">
          <h4>{Day}</h4>
          <ul className="mealList">{renderedMeals}</ul>
        </div>
        <div className="dayActions">
          <button className="dayButton" onClick={() => setDayTarg(Day)}>
            Edit Meals
          </button>
        </div>
      </div>
    );
  });

  //Logic to render different panel states
  let panelDisp;
  if (maintAct === "Actions") {
    panelDisp = (
      <div className="maintMenu">
        <button className="maintButton">Add Meals</button>
        <button className="maintButton">Remove Meals</button>
        <button className="maintButton">Reset Day</button>
      </div>
    );
  }

  // if (maintAct === "Add") {
  //   panelDisp;
  // }

  //Function return statement
  if (panelAct === true) {
    return (
      <div className="Planner">
        <h2>Maintenance Panel</h2>
        <h3>
          Target Day:<span>{dayTarg}</span>
        </h3>
        {panelDisp}
      </div>
    );
  } else {
    return (
      <div className="Planner">
        <h1>Planner</h1>
        <div className="week">{renderedPlan}</div>
        <div className="actionBar">
          <button className="actionButton">Reset Plan</button>
        </div>
      </div>
    );
  }
};

/* Export Statement */
export default Planner;
