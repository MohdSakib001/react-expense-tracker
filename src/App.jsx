/** @format */

import Header from "./components/Header";
import Balance from "./components/Balance";
import Incomeexpense from "./components/IncomeExpense";
import TransectionList from "./components/TransectionList";
import NewTransaction from "./components/NewTransaction";
import { useSelector } from "react-redux";

function App() {
  const transactions = useSelector((store) => store.Transaction);

  // Declaring expense and income
  let expense = 0;
  let income = 0;

  // Calculating expense and income
  transactions.forEach((element) => {
    // Converting amount into number
    let amount = Number(element.amount);

    if (amount > 0) {
      income += amount;
    } else if (amount < 0) {
      expense += amount;
    }
  });

  return (
    <div className="bg-gray-100 h-vh flex justify-center items-center">
      <div className="w-full max-w-sm">
        <Header />
        <div className="space-y-5">
          <Balance income={income} expense={expense} />
          <Incomeexpense income={income} expense={expense} />
        </div>
        {transactions.length > 0 && <TransectionList />}

        <NewTransaction />
      </div>
    </div>
  );
}

export default App;
