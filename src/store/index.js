import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./transactionSlice";

const ExpanseTrackerStore = configureStore({
  reducer: {
    Transaction: transactionSlice.reducer,
  },
});

export default ExpanseTrackerStore;
