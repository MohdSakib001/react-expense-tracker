import React from "react";
import { useGetAuth } from "../hooks/useGetAuth";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { useNavigate } from "react-router-dom";

export const UserDetails = () => {
  const { name, photoURL } = useGetAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      // Async function
      await signOut(auth);

      //   If logout sucessfully than do this
      localStorage.clear("auth");
      alert("You want to log Out?");
      navigate("/react-expense-tracker");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full max-w-sm flex items-center justify-between px-1 py-4 shadow-md ">
      <div className="flex items-center gap-x-2">
        <img src={photoURL} alt="profile" className="rounded-full w-8" />
        <h2 className="font-semibold text-sm">{name}</h2>
      </div>
      <button
        onClick={handleLogout}
        className="bg-violet-600 px-2 py-1 text-white active:bg-violet-600 md:hover:bg-violet-700 md:active:bg-violet-500 rounded-sm"
      >
        Sign out
      </button>
    </div>
  );
};
