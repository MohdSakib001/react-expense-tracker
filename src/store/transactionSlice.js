import { createSlice } from "@reduxjs/toolkit";

// Getting data from localStorage and set it in an array which will be passed as initial value
const INITIAL_DATA =
  localStorage.getItem("TransactionList") !== null
    ? JSON.parse(localStorage.getItem("TransactionList"))
    : [];

const transactionSlice = createSlice({
  name: "transaction",
  initialState: INITIAL_DATA,
  reducers: {
    addTransaction: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    // Method to store data in localStorage
    addTransactionListToLocalStorage: (state, action) => {
      // Storing whole data
      localStorage.setItem("TransactionList", JSON.stringify(action.payload));
    },
    removeDataFromLocalStorage: (state) => {
      // Removing the data from localStorage
      localStorage.removeItem("TransactionList");
      alert("Your History has been Cleared.");

      // Returning an empty history
      return [];
    },
  },
});

export default transactionSlice;

export const transactionActions = transactionSlice.actions;
