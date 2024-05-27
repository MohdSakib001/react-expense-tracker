import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import ExpanseTrackerStore from "./store/index.js";
import { Provider } from "react-redux";
import Home from "./routes/Home.jsx";
import { Login } from "./auth/Login.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/expense-tracker",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ExpanseTrackerStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
