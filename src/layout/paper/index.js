import React from "react";
import PaperImage from "@/public/photos/background/paper.jpg";
import TopBar from "@/layout/topbar";

const Paper = ({ children }) => {
  return (
    <>
    <TopBar />
      <div
        className="paper-layout main-layout"
        style={{
          backgroundImage: `url(${PaperImage.src})`,
          color: "black",
          fontWeight: "bold",
          padding: "0px",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Paper;
