import React from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";

const SectionOne = (props) => {
  const { logoImage, quotes } = props;
  return (
    <div>
      <Col className="signup-logo w-100">
        <div className="w-100 text-center">
          <Image
            src={logoImage}
            alt="image"
            width={500}
            height={500}
            style={{ filter: "drop-shadow(21px 20px 8px black)" }}
          />
        </div>
        <div className="text-center">
          <div className="full-title d-inline mb-3">
            <div className="d-inline title-one" style={{ color: "#78D6C6" }}>
              KUKeight
            </div>
            &nbsp;&nbsp;
            <div className="title-two d-inline" style={{ color: "#F5FCCD" }}>
              Studio
            </div>
          </div>
          <p
            style={{
              transform: "translateY(1vw)",
              color: "#EAD7BB",
              fontWeight: "bold",
            }}
            className="pb-3 glow"
          >
            Read, Write, Immerse!
          </p>
          <hr />
          <pre
            className="signup-quotes"
            dangerouslySetInnerHTML={{ __html: quotes }}
          />
        </div>
      </Col>
    </div>
  );
};

export default SectionOne;
