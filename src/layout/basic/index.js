import React from "react";
import Library from "@/public/photos/bookshelfs.jpg";

export const BasicLayout = ({ children }) => {
  const bookshelfsImage = Library.src;

  return (
    <div
      className="basic-layout main-layout"
      style={{
        backgroundImage: `url(${bookshelfsImage})`,
        color: "white",
        fontWeight: "bold",
        padding: "0px"
      }}
    >
      {children}
    </div>
  );
};
