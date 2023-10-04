import Footer from "@/components/top/section1/footer.js";
import BackgroundDay from "@/public/photos/main-background.jpeg";
import BackgroundNight from "@/public/photos/main-background-night.jpg";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import React from "react";

const MainLayout = ({ children }) => {
  const [localStorageMode, setLocalStorageMode] = useState("");
  const [mode, setMode] = useState(localStorageMode);

  useEffect(() => {
    let value = localStorage.getItem("mode");
    setLocalStorageMode(value);
    setMode(value || "night");
  }, []);

  const images = {
    background_day: BackgroundDay.src,
    background_night: BackgroundNight.src,
  };

  const switchMode = () => {
    const newMode = mode === "night" ? "day" : "night";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
    setLocalStorageMode(newMode);
  };

  return (
    <>
      <Button onClick={switchMode} className="position-fixed mode-switcher">
        Switch mode
      </Button>
      <div
        className="main-layout"
        style={{
          backgroundImage: `url(${images["background_" + localStorageMode]})`,
          color: `${localStorageMode == "day" ? "black" : "white"}`,
        }}
      >
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
