/** @format */

import { useEffect } from "react";
import { transactionActions } from "../store/transactionSlice";
import Transection from "./Transection";
import { useSelector, useDispatch } from "react-redux";

export default function TransectionList({ handleClearHistory }) {
  const transactions = useSelector((store) => store.Transaction);

  const dispatch = useDispatch();
  // Dispatch the whole transaction list whenever new transaction is added
  useEffect(() => {
    dispatch(transactionActions.addTransactionListToLocalStorage(transactions));
  }, [dispatch, transactions]);

  function handleClearHistory() {
    // Removing data action dispatched
    dispatch(transactionActions.removeDataFromLocalStorage());
  }

  return (
    <div className="my-8">
      <div className=" flex justify-between my-1">
        <h2 className="text-lg font-medium">History</h2>
        <button
          type="button"
          onClick={handleClearHistory}
          className="px-4 py-1 border border-violet-800 bg-violet-200 text-violet-800 rounded-lg cursor-pointer hover:bg-violet-600 hover:text-white active:bg-violet-700 transition"
        >
          Clear History
        </button>
      </div>
      <div className="border border-t-2 border-t-gray-300 border-transparent py-2 max-h-40 overflow-y-scroll scrollbar-hidden">
        {transactions.map((transaction, index) => (
          <Transection
            key={index}
            text={transaction.text}
            amount={transaction.amount}
            date={transaction.date}
          />
        ))}
      </div>
    </div>
  );
}
