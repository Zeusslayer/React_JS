import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //const [userInput, setUserInput] = useState({
  //  //one state instead of three separe states
  //  //must update every single value on each call
  //  enteredTitle: "",
  //  enteredAmount: "",
  //  enteredDate: "",
  //});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //one by one

    //setUserInput({
    //  //all states at once
    //  ...userInput,
    //  enteredTitle: event.target.value,
    //});

    //setUserInput((prevState) => {
    //  //same but safer way to get the last state
    //  return { ...prevState, enteredTitle: event.target.value };
    //});
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredAmount: event.target.value,
    //});
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredDate: event.target.value,
    //});
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.10"
            step="0.10"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
