/** @format */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { transactionActions } from "../store/transactionSlice";

export default function NewTransaction() {
  // useState hook to keep the value of text and amount
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // useDispatch to dispatch the action of add transaction
  const dispatch = useDispatch();

  // Function to handle add transaction
  function handleAddTransaction(e) {
    // To prevent default behaviour of form (refreshing)
    e.preventDefault();

    if (amount === "") {
      alert("Come On Gareeb, Enter Some Amount");
    } else {
      // creating an object of new transaction
      const newTransaction = {
        text,
        amount,
        date: new Date().toLocaleString(),
      };

      // Clearing the input fields
      setText("");
      setAmount("");

      // dispatching the action
      dispatch(transactionActions.addTransaction(newTransaction));
    }
  }

  return (
    <>
      <div className="mt-8">
        <h2 className="text-md font-medium">New Transaction</h2>
        <form className="border border-t-2 border-t-gray-300 border-transparent py-4 space-y-4">
          <div className="flex flex-col gap-y-1">
            <label className="font-medium">Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="p-2 focus:outline-none focus:border-2 focus:border-gray-300 border-2 border-transparent placeholder:font-medium"
              placeholder="Enter Text..."
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label className="font-medium">
              Amount <br /> (negative-Expensis, positive-Income)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 focus:outline-none focus:border-2 focus:border-gray-300 border-2 border-transparent placeholder:font-medium"
              placeholder="Enter Amount..."
            />
          </div>

          <button
            type="submit"
            onClick={handleAddTransaction}
            className="bg-violet-600 w-full py-2 text-white active:bg-violet-600 md:hover:bg-violet-700 md:active:bg-violet-500 "
          >
            Add transaction
          </button>
        </form>
      </div>
    </>
  );
}
