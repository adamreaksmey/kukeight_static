import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Unknown from "@/public/photos/creators/unknown.jpeg";
import { Button, Row, Col } from "react-bootstrap";
import getImageNameFromSrc from "@/components/functions/imageName";
import Profile from "@/components/profile/sections/profile";
import Notification from "@/components/profile/sections/notification";
import MemberShip from "@/components/profile/sections/membership";
import Security from "@/components/profile/sections/security";

const Section = (props) => {
  const { message, activeTab } = props;
  const [imageSrc, setImageSrc] = useState({
    image: "",
    name: "",
  });

  const imageInputRef = useRef();
  const tabComponents = {
    profile: <Profile />,
    notification: <Notification />,
    membership: <MemberShip />,
    security: <Security />,
  };

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

  const handleImageUpload = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setImageSrc({
        image: base64String,
        name: file.name,
      });
      localStorage.setItem("profile-pic", base64String);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

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
        </Col>
        <Col xs={11} md={7} className="d-flex align-items-center">
          <div>
            <h4 className="title-font">Upload a new profile photo</h4>
            <div>{imageSrc.name}</div>
          </div>
        </Col>
        <Col xs={3} md={2} className="d-flex align-items-center">
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="d-none"
              ref={imageInputRef}
            />
            <Button
              variant="secondary"
              onClick={handleImageUpload}
              style={{ backgroundColor: "transparent" }}
            >
              Upload Photo
            </Button>
          </div>
        </Col>
      </Row>
      {tabComponents[activeTab]}
    </>
  );
};

export default Section;
