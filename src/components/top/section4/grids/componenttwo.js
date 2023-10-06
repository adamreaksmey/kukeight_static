import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Dynamic from "@/public/photos/top/section4/dynamic-arrow.png";
import Futuristic from "@/public/photos/top/section4/futuristic.png";
import Visual from "@/public/photos/top/section4/visual-experience.png";

const ComponentTwo = (props) => {
  const { mode } = props;
  const [theme, setTheme] = useState("grid-dark");

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
            src={Dynamic.src}
            width={50}
            height={50}
            className="logo-img pb-2"
            alt="logo"
          />
          <h5>Dynamic Animations</h5>
          <hr className="w-50" />
          <div>
            With KUKEight, you can go beyond static storytelling. Add
            captivating animations to your narratives, bringing your characters
            and scenes to life. Engage your readers on a whole new level with
            dynamic storytelling that captures their imagination.
          </div>
        </div>
      </Col>
      <Col>
        <div className={theme}>
          <Image
            src={Futuristic.src}
            width={50}
            height={50}
            className="logo-img pb-2"
            alt="logo"
          />
          <h5>Future-Proof Technology</h5>
          <hr className="w-50" />
          <div>
            KUKEight is built on cutting-edge technology, keeping you at the
            forefront of storytelling innovations. As the platform evolves, you
            can expect new features and enhancements to further enhance your
            writing experience.
          </div>
        </div>
      </Col>
      <Col>
        <div className={theme}>
          <Image
            src={Visual.src}
            width={50}
            height={50}
            className="logo-img pb-2"
            alt="logo"
          />
          <h5>Integrated Visual Experience</h5>
          <hr className="w-50" />
          <div>
            Unlike traditional writing platforms, KUKEight allows you to
            generate visually stunning images based on your written novels. This
            integration of visuals enhances the reading experience, immersing
            your audience in the world you have created.
          </div>
        </div>
      </Col>
    </>
  );
};

export default ComponentTwo;
