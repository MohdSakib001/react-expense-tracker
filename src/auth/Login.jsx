import React from "react";
import { auth, provider } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
// import { useGetAuth } from "../hooks/useGetAuth";

export const Login = () => {
  // const { isAuth } = useGetAuth();

  // usenavigate hook to create a navigate function
  const navigate = useNavigate();

  // Function to make the popup
  async function signInWithGoogle() {
    // Create the popup
    const result = await signInWithPopup(auth, provider);

    // All of the info that we need from the user credentials
    const authInfo = {
      userId: result.user.uid,
      name: result.user.displayName,
      photoURL: result.user.photoURL,
      isAuth: true,
    };

    // Storing the necessary info into localstorage so that we can use it among diff pages also user will not get logged out after refresh
    localStorage.setItem("auth", JSON.stringify(authInfo));

    // Navigate to home page after login
    navigate("/react-expense-tracker/expense-tracker");
  }

  // if (isAuth) {
  //   <Navigate to="/react-expense-tracker/expense-tracker" />;
  // }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="shadow-md bg-white p-10 space-y-5 rounded-lg">
        <h2 className="font-semibold text-lg">
          Sign in with Google to continue
        </h2>
        <button
          onClick={signInWithGoogle}
          className="bg-violet-600 w-full py-2 text-white active:bg-violet-600 md:hover:bg-violet-700 md:active:bg-violet-500 rounded-lg font-semibold"
        >
          Add transaction
        </button>
      </div>
    </div>
  );
};
