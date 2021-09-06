import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020"); //default 2020, setFilteredYear sets the filteredYear.

  const filterChangeHandler = (selectedYear) => {
    //this function is sent down(it's being pointed from child, the value of it is selectedYear and then it's getting set to the filteredYear)
    setFilteredYear(selectedYear); //sets the filteredYear to the selectedYear from ExpensesFilter
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          //instead of multiple ExpenseItem for each item, we dynamically mapped ExpenseItem for each element of the array
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
