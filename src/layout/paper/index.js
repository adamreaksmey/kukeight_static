import React, { useEffect, useState } from "react";
import PaperImage from "@/public/photos/background/paper.jpg";
import TopBar from "@/layout/topbar";
import scroll from "@/components/functions/scroll";

const Paper = ({ children }) => {
  const [showTopBar, setShowTopBar] = useState(false);
  useEffect(() => {
    scroll(setShowTopBar);
  });
  return (
    <>
      <TopBar />
      <div
        className="paper-layout main-layout"
        style={{
          backgroundImage: `url(${PaperImage.src})`,
          color: "black",
          fontWeight: "bold",
          padding: "150px 7rem 150px 7rem"
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Paper;
