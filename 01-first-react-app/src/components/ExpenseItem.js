import "./ExpenseItem.css"; // must import css to the js file
function ExpenseItem() {
  const expenseDate = new Date(2021, 8, 28); //september
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  //return should only return one div, there may be others inside it
  //adding css to divs with className
  //you can add operations inside the brackets
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
