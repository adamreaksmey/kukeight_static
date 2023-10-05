import React from "react";
import Image from "next/image";
import Lightbulb from "@/public/photos/top/cometolife.png"

const Section3 = () => {
  return (
    <>
      <div className="w-100 text-end" style={{ color: "white" }}>
        <h2 className="text-right">What makes us different?</h2>
        <hr />
        <div>
            We have seen many websites that offer you the ability to read
            and write novels but that is only a small part of us!
            Have you ever thought your novel | imagination would come to life?
            Sign up, join us and why not give us a try!
        </div>
      </div>
      <div className="w-100 d-flex justify-content-start">
        <Image
          src={Lightbulb.src}
          width={330}
          height={330}
          className="logo-img"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Section3;
