import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Algorithm from "@/public/photos/top/section4/algorithms.png";
import Collaboration from "@/public/photos/top/section4/collab.png";

const Section4 = () => {
  return (
    <>
      <div className="w-100 text-center pb-5">
        <h2 className="glow">
          But why us? Why choose to write with us? and on us?
        </h2>
      </div>
      <Row>
        <Col>
          <div>
            <Image
              src={Algorithm.src}
              width={50}
              height={50}
              className="logo-img pb-2"
              alt="logo"
            />
            <h5>AI-Driven</h5>
            <hr className="w-50" />
            <div>
              KUKEight leverages AI algorithms to provide personalized
              recommendations for enhancing your narratives. Receive suggestions
              to refine your writing style, improve pacing, and create more
              impactful storylines, helping you become a better writer.
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <Image
              src={Collaboration.src}
              width={50}
              height={50}
              className="logo-img pb-2"
              alt="logo"
            />
            <h5>Creative Collaboration</h5>
            <hr className="w-50" />
            <div>
              KUKEight provides a vibrant community of global creators where you
              can connect, collaborate, and share ideas. Gain inspiration,
              receive valuable feedback, and collaborate with like-minded
              individuals, fostering growth and expanding your creative
              horizons.
            </div>
          </div>
        </Col>
        <Col>
          <div>Hello world</div>
          <div>Hello world</div>
          <div>Hello world</div>
        </Col>
      </Row>
    </>
  );
};

export default Section4;
