import Footer from "@/components/auth/footer";
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
    <div
      className="main-layout"
      style={{
        backgroundImage: `url(${images["background_" + mode]})`,
        color: `${mode == "day" ? "black" : "white"}`,
      }}
    >
      <Button onClick={switchMode} className="position-fixed mode-switcher">
        Switch mode
      </Button>
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;