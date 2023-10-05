import React, { useEffect } from "react";
import TopBookshelfs from "@/public/photos/top/top-pic-bookshelfs.png";
import Image from "next/image";

const Section2 = (props) => {

  return (
    <>
      <div className="w-100">
        <h2 className="fw-bold">What is this? what do we do?</h2>
        <hr />
        <div>
          KUKEight is a groundbreaking Cambodian web application that allows
          young, talented creators around the world to develop their
          storytelling abilities. Through an intuitive interface and robust set
          of creative tools, KUKEight enables users to translate their
          imaginative stories into captivating novels and movies. By fostering
          global collaboration on diverse narratives, the platform sparks
          creativity and imagination while cultivating important literary and
          filmmaking skills in the next generation of storytellers.
        </div>
      </div>
      <div className="w-100 d-flex justify-content-end">
        <Image
          src={TopBookshelfs.src}
          width={330}
          height={330}
          className="logo-img"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Section2;
