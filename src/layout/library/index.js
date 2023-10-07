import React, { useEffect } from "react";
import Library from "@/public/photos/bookshelfs.jpg";
import { useRouter } from "next/router";

export const BasicLayout = ({ children }) => {
  const bookshelfsImage = Library.src;
  const router = useRouter();
  return (
    <div
      className="basic-layout main-layout"
      style={{
        backgroundImage: `url(${bookshelfsImage})`,
        color: "white",
        fontWeight: "bold",
        padding: "0px",
      }}
    >
      {children}
    </div>
  );
};
