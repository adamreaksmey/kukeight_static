import React from "react";
import Icon1 from "@/public/photos/topicons/icon1.png";
import Icon2 from "@/public/photos/topicons/icon2.png";
import Icon3 from "@/public/photos/topicons/icon3.png";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";

const Icons = () => {
  const icons = {
    img1: Icon1.src,
    img2: Icon2.src,
    img3: Icon3.src,
  };
  return (
    <>
      <Row>
        <Col
          className="d-flex justify-content-center icons"
          style={{ gap: "10%" }}
        >
          <div>
            <Image
              src={icons.img1}
              width={180}
              height={90}
              className="logo-img"
              alt="logo"
            />
            <div className="fw-bold text">Read</div>
          </div>
          <div>
            <Image
              src={icons.img2}
              width={90}
              height={90}
              className="logo-img"
              alt="logo"
            />
            <div className="fw-bold text">Write</div>
          </div>
          <div>
            <Image
              src={icons.img3}
              width={180}
              height={90}
              className="logo-img"
              alt="logo"
            />
            <div className="fw-bold text">Immerse</div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Icons;
