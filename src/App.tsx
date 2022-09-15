import Balance from "./components/Balance/Balance";
import History from "./components/History/History";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import { useState } from "react";
import "./App.css";

const history = [
  {
    id: 1,
    description: "this is desc",
    isExpense: true,
    isIncome: false,
    value: 20,
  },
];

function App() {
  const [state, setState] = useState();

  return (
    <>
      <h2>Expense Tracker</h2>
      <Balance />
      <div className="container">
        <div className="grid">
          <History />
          <AddTransaction />
        </div>
      </div>
    </>
  );
}

export default App;
