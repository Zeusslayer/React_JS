import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //const [userInput, setUserInput] = useState({
  //  // one state instead of three separe states
  //  // must update every single value on each call
  //  // use this if you want to update state depending on the previous one
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
    //submit button handler
    event.preventDefault(); //prevents the refresh on submit

    const expenseData = {
      //object for us to use
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    //passing the expenseData object to the function we called from NewExpense.js
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.10"
            step="0.10"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
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
