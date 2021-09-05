import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //gets the data from child + adds an id
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  //onSaveExpenseData points to a function, it can be executed when it's called
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
