import Footer from "@/components/top/section1/footer.js";
import BackgroundDay from "@/public/photos/main-background.jpeg";
import BackgroundNight from "@/public/photos/main-background-night.jpg";
import { createContext, useEffect, useState, useRef } from "react";
import React from "react";
import TopBar from "@/layout/topbar";

const LayoutContext = createContext();
const MainLayout = ({ children }) => {
  const [localStorageMode, setLocalStorageMode] = useState("");
  const [mode, setMode] = useState(localStorageMode);
  const [showTopBar, setShowTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position >= 2) {
        return setShowTopBar(true);
      }
      return setShowTopBar(false);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      {showTopBar && <TopBar switchMode={switchMode} />}

      <LayoutContext.Provider value={mode}>
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
      </LayoutContext.Provider>
    </>
  );
};

export { LayoutContext, MainLayout };
