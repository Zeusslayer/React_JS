import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Expense List!</h2>
      <p>Let's get started!</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
