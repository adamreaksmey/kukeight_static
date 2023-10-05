import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Algorithm from "@/public/photos/top/section4/algorithms.png";
import Collaboration from "@/public/photos/top/section4/collab.png";
import CrossPlatform from "@/public/photos/top/section4/cross-platform.png";

const ComponentOne = (props) => {
  const [theme, setTheme] = useState("grid-dark");
  const { mode } = props;

  useEffect(() => {
    if (mode && mode == "night") {
      setTheme("grid-dark");
      return;
    }
    return setTheme("grid-light");
  }, [mode]);

  return (
    <>
      <Col>
        <div className={theme}>
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
        <div className={theme}>
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
            can connect, collaborate, and share ideas. Gain inspiration, receive
            valuable feedback, and collaborate with like-minded individuals,
            fostering growth and expanding your creative horizons.
          </div>
        </div>
      </Col>
      <Col>
        <div className={theme}>
          <Image
            src={CrossPlatform.src}
            width={50}
            height={50}
            className="logo-img pb-2"
            alt="logo"
          />
          <h5>Creative Collaboration</h5>
          <hr className="w-50" />
          <div>
            KUKEight provides a vibrant community of global creators where you
            can connect, collaborate, and share ideas. Gain inspiration, receive
            valuable feedback, and collaborate with like-minded individuals,
            fostering growth and expanding your creative horizons.
          </div>
        </div>
      </Col>
    </>
  );
};

export default ComponentOne;
