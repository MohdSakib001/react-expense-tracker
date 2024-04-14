import React from "react";

export const useGetAuth = () => {
  const { userId, name, photoURL, isAuth } = JSON.parse(
    localStorage.getItem("auth")
  );

  return { userId, name, photoURL, isAuth };
};
