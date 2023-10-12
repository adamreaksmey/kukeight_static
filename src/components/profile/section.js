import React, { useEffect, useState } from "react";
import Image from "next/image";
import Unknown from "@/public/photos/creators/unknown.jpeg";
import { Button, Row, Col } from "react-bootstrap";
import getImageNameFromSrc from "@/components/functions/imageName";

const Section = (props) => {
  const { message } = props;
  const [imageSrc, setImageSrc] = useState({
    image: "",
    name: "",
  });

  useEffect(() => {
    const storedImage = localStorage.getItem("profile-pic");
    if (storedImage) {
      setImageSrc((prev) => ({
        image: storedImage,
        name: getImageNameFromSrc(Unknown.src),
      }));
    } else {
      fetch(Unknown.src)
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onloadend = function () {
            const base64data = reader.result;
            localStorage.setItem("profile-pic", base64data);
            setImageSrc({
              image: base64data,
              name: getImageNameFromSrc(Unknown.src),
            });
          };
          reader.readAsDataURL(blob);
        });
    }
  }, []);
  return (
    <>
      <Row
        className="p-4 rounded mb-1 logo-img"
        style={{ background: "#6A9C89" }}
      >
        <Col xs={6} md={3}>
          <Image
            className="img-logo rounded-circle"
            src={imageSrc.image}
            width={170}
            height={170}
            alt={"image"}
          />
          {console.log(imageSrc)}
        </Col>
        <Col xs={12} md={8} className="d-flex align-items-center">
          <div>
            <h4>Upload a new profile photo</h4>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Section;
