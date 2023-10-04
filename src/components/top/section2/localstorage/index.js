import React from "react";

const LocalStorage = () => {
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
