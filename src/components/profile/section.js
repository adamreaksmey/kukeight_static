import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Unknown from "@/public/photos/creators/unknown.jpeg";
import { Button, Row, Col } from "react-bootstrap";
import getImageNameFromSrc from "@/components/functions/imageName";
import Profile from "@/components/profile/sections/profile";
import Notification from "@/components/profile/sections/notification";
import MemberShip from "@/components/profile/sections/membership";
import Security from "@/components/profile/sections/security";
import SocialProfile from "@/components/profile/sections/socialprofile";

const Section = (props) => {
  const { message, activeTab } = props;
  const [imageSrc, setImageSrc] = useState({
    image: "",
    name: "",
  });
  const [usersData, setUsersData] = useState({
    auth_id: "",
    allUsers: [],
    singleUser: {},
  });
  const [ImageExists, setImageExists] = useState("");

  // test image upload

  const imageInputRef = useRef();

  useEffect(() => {
    const getUsersInfo = JSON.parse(
      localStorage.getItem("kukeight-authorized-users")
    );
    const userId = localStorage.getItem("auth-user-id");
    const userFound = getUsersInfo.find((data) => data.id == userId);
    setUsersData((prev) => ({
      auth_id: userId,
      allUsers: getUsersInfo,
      singleUser: userFound,
    }));

    const foundImage = userFound?.image;
    setImageExists(foundImage);
  }, []);

  useEffect(() => {
    const UserExists = usersData.allUsers.find(
      (data) => data.id == usersData.auth_id
    );
    const ImageExists = UserExists?.image.url;
    if (ImageExists) {
      setImageSrc((prev) => ({
        image: ImageExists,
        name: getImageNameFromSrc(Unknown.src),
      }));
    }
  }, [ImageExists, usersData.allUsers, usersData.auth_id]);

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
      const user = usersData.allUsers.find(
        (data) => data.id == usersData.auth_id
      );
      user["image"] = {
        name: file.name,
        url: base64String,
      };
      localStorage.setItem(
        "kukeight-authorized-users",
        JSON.stringify(usersData.allUsers)
      );
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const tabComponents = {
    profile: (
      <Profile
        imageSrc={imageSrc}
        usersData={usersData}
        handleImageChange={handleImageChange}
        imageInputRef={imageInputRef}
        handleImageUpload={handleImageUpload}
      />
    ),
    notification: <Notification />,
    membership: <MemberShip />,
    security: <Security />,
    social_profile: <SocialProfile />
  };

  return <>{tabComponents[activeTab]}</>;
};

export default Section;
