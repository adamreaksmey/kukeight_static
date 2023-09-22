import React, { useState, useEffect } from "react";

export default function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(async () => {
      await setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(slideTimer);
    };
  }, []);

  const slides = [
    "Discover The World Of Novels Within Us...",
    "Discover The World Of Novels Written By The Greatest...",
    "Discover The World Of Novels Written By You!",
  ];

  return (
    <>
      <div className="description text-left">
        <div style={{ paddingBottom: "5vw" }}>
          <div>Unleash Your Imagination:</div>
          <div
            className="dis-inline"
            style={{ animation: "slowmo 3s infinite" }}
          >
            {slides[currentSlide]}
          </div>
        </div>

        <div id="draggable-element">
          Not a user yet? Well, what are you waiting for? <br />
          Join the Authors, Read and be cool!!
        </div>
      </div>
    </>
  );
}
