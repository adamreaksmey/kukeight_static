import React from "react";
import Image from "next/image";

const TopWriters = (props) => {
  const { writers } = props;
  return (
    <>
      {writers.slice(0, 6).map((data, index) => (
        <div className="d-flex w-100 gap-2 pb-4" key={index}>
          <Image
            src={data.image_url}
            width={60}
            height={60}
            className="logo-img"
            alt={data.name}
          />
          <div style={{ fontSize: "0.9em" }} className="w-100">
            <div className="pb-1">{data.name}</div>
            <div style={{ fontSize: "0.8em" }}>{data.most_read_book}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopWriters;
