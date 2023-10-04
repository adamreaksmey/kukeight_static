import React, { useState, useEffect } from "react";
import Auth from "@/components/top/loginout";
import Title from "@/components/top/title";
import { Row, Col } from "react-bootstrap";
import Books from "@/public/photos/pngwing.com.png";
import Books2 from "@/public/photos/book2.png";
import Image from "next/image";

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

  const bookImage = Books.src;
  const bookImage2 = Books2.src;

  return (
    <>
      <Row className="d-flex" style={{ height: '60vh' }}>
        <Col
          className="description text-left"
          flex={1}
          style={{ marginLeft: "auto" }}
        >
          <Title />
          <hr className="w-50" />
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
        <Col className="description pt-5" flex={1}>
          <div style={{ float: "right" }}>
            <Image
              src={bookImage}
              width={330}
              height={330}
              className="logo-img"
              alt="logo"
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
