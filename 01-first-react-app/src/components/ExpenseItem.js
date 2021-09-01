import "./ExpenseItem.css"; // must import css to the js file
function ExpenseItem(props) {
  // use the const to hard-code data and use props to access App.js attributes

  /* const expenseDate = new Date(2021, 8, 28); //september
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67; */

  //return should only return one div, there may be others inside it
  //adding css to divs with className
  //you can add operations inside the brackets
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">NOK {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
