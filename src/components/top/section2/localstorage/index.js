import React from "react";
import { useEffect } from "react";

const LocalStorage = (key) => {
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        console.log("LocalStorage detected a change");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);
};

export default LocalStorage;
