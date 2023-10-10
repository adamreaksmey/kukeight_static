import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";

const Index = (props) => {
  const { image, buttonCaption, description } = props;
  return (
    <>
      <div className="d-flex gap-3">
        <Image
          src={image}
          width={160}
          height={160}
          alt={image}
          className="logo-img"
        />
        <div>
          <div className="pb-2">{description}</div>
          <Button variant="danger">{buttonCaption}</Button>
        </div>
      </div>
    </>
  );
};

export default Index;
