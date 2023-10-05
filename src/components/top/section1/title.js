import React from "react";
import Image from "next/image";
import Logo from "@/public/photos/logo.png";

const Title = () => {
  const logoImage = Logo.src;
  return (
    <>
      <div className="text-nowrap title glow">
        <Image
          className="logo-img"
          alt="logo"
          src={logoImage}
          width={130}
          height={130}
        />
        <div className="full-title d-inline">
          <div className="d-inline title-one">UKeight</div>&nbsp;&nbsp;
          <div className="title-two d-inline">Studio</div>
        </div>
        <div className="title-3"> Welcome...wanderers!</div>
      </div>
    </>
  );
};

export default Title;
