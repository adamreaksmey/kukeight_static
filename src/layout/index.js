import Footer from "@/components/top/section1/footer.js";
import BackgroundDay from "@/public/photos/main-background.jpeg";
import BackgroundNight from "@/public/photos/main-background-night.jpg";
import { Button } from "react-bootstrap";
import { useState } from "react";

const MainLayout = ({ children }) => {
  const [mode, setMode] = useState("night");

  const images = {
    background_day: BackgroundDay.src,
    background_night: BackgroundNight.src,
  };
  const switchMode = () => {
    setMode((prevMode) => (prevMode === "night" ? "day" : "night"));
  };
  return (
    <>
      <Button onClick={switchMode} className="position-fixed mode-switcher">
        Switch mode
      </Button>
      <div
        className="main-layout overflow-scroll"
        style={{
          backgroundImage: `url(${images["background_" + mode]})`,
          color: `${mode == "day" ? "black" : "white"}`,
        }}
      >
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
