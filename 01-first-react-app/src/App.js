import Expenses from "./components/Expenses";
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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
