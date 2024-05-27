import React from "react";
import { auth, provider } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
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
    navigate("/expense-tracker");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen w-screen bg-gray-100 ">
      <div className="shadow-lg bg-white px-5 py-20  rounded-lg min-h-1/2 items-center flex flex-col justify-center gap-5 border border-violet-600 w-11/12 md:w-96">
        <div className="flex gap-5 items-center justify-center ">
          <img
            src="/src/assets/react.svg"
            alt=""
            className="w-10 bg-violet-600 rounded-full"
          />

          <h2 className="text-2xl font-semibold tracking-wider uppercase">
            Expense Tracker
          </h2>
        </div>
        <p className="text-lg font-semibold tracking-wider text-center">
          keep your Transactions Organized
        </p>

        <div className="shadow-md bg-white p-10 space-y-5 rounded-lg border border-violet-600">
          <h2 className="font-semibold text-lg text-center">
            Sign in with Google to continue
          </h2>
          <button
            onClick={signInWithGoogle}
            className="bg-violet-600 w-full py-2 text-white active:bg-violet-600 md:hover:bg-violet-700 md:active:bg-violet-500 rounded-lg font-semibold flex items-center justify-center gap-x-3"
          >
            <FcGoogle className="w-8 h-6" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};
