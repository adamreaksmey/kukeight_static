import React, { useState, useEffect } from "react";
import Auth from "@/components/auth/loginout";
import Title from "@/components/auth/title";
import { Row, Col } from "react-bootstrap";

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
      <Row className="d-flex">
        <Col className="description text-left" style={{ marginLeft: 'auto'}}>
          <Title />
          <hr className="w-50"/>
          <div style={{ paddingBottom: "5rem" }}>
            <div>Unleash Your Imagination:</div>
            <div
              className="dis-inline"
              style={{ animation: "slowmo 3s infinite" }}
            >
              {slides[currentSlide]}
            </div>
          </div>

          <div id="draggable-element" style={{ paddingBottom: "1em" }}>
            Not a user yet? Well, what are you waiting for? <br />
            Join the Authors, Read and be cool!!
          </div>
          <Auth />
        </Col>
        <Col className="description text-right">Hey</Col>
      </Row>
    </>
  );
}
