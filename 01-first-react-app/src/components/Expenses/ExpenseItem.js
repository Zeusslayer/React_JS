import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import "./ExpenseItem.css"; // must import css to the js file

const ExpenseItem = (props) => {
  // use the const to hard-code data and use props to access App.js attributes
  //return should only return one div, there may be others inside it
  //adding css to divs with className
  //you can add operations inside the brackets
  let title = props.title;
  const clickHandler = () => {
    console.log("Clicked");
    title = "Updated";
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date2={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">NOK {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change the Title</button>
    </Card>
  );
};

export default ExpenseItem;
