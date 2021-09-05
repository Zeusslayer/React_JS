import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  // array of objects
  {
    id: "e1",
    title: "Norsk Utdanning",
    amount: 126000,
    date: new Date(2022, 7, 15),
  },
  {
    id: "e2",
    title: "Study Permit",
    amount: 5000,
    date: new Date(2022, 8, 15),
  },
  {
    id: "e3",
    title: "Job Applications",
    amount: "3 years of my life expectancy",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Dinner",
    amount: 100,
    date: new Date(2021, 8, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //setExpenses([expense, ...expenses]); // could be used but not the most correct way
    setExpenses((prevExpenses) => {
      //whenever we use this functional way, react ensures that we have the latest state in the argument "prevExpenses"
      return [expense, ...prevExpenses];
    });
  };

  // old react, would still work but not so charming

  //  return React.createElement(
  //    "div",
  //    {},
  //    React.createElement("h2", {}, "Expense List!"),
  //    React.createElement(Expenses, {items: expenses})
  //    );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
