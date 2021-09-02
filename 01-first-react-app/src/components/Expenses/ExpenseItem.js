import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import "./ExpenseItem.css"; // must import css to the js file

const ExpenseItem = (props) => {
  // use the const to hard-code data and use props to access App.js attributes

  /* const expenseDate = new Date(2021, 8, 28); //september
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67; */

  //return should only return one div, there may be others inside it
  //adding css to divs with className
  //you can add operations inside the brackets

  return (
    <Card className="expense-item">
      <ExpenseDate date2={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">NOK {props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
