import React from "react";
import Image from "next/image";

const TopWriters = (props) => {
  const { writers } = props;
  return (
    <>
      {writers.slice(0, 5).map((data, index) => (
        <div className="d-flex w-100 gap-2">
          <Image
            src={data.image_url}
            width={60}
            height={60}
            className="logo-img"
            alt={data.name}
          />
          <div style={{ fontSize: "0.9em" }}>
            <div>{data.name}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopWriters;
