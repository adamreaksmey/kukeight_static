import React from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Back from "@/public/photos/icons/back.png"
import Image from "next/image";

const BackHome = () => {
  const router = useRouter();
  const handleRedirectHome = () => {
    router.push("/");
  };
  return (
    <>
      <Button variant="secondary" onClick={handleRedirectHome}>
        <Image
          src={Back.src}
          width={30}
          height={30}
          className="logo-img scale-2"
          alt="logo"
        />
      </Button>
    </>
  );
};

export default BackHome;
