import React from "react";
import ComponentOne from "@/components/top/section4/grids/componentone";
import { Row } from "react-bootstrap";
import ComponentTwo from "@/components/top/section4/grids/componenttwo";

const Section4 = (props) => {
  const { mode } = props;
  return (
    <>
      <div className="w-100 text-center pb-5">
        <h2 className="fw-bold text-decoration-underline white">
          But why us? Why choose to write with us? and on us?
        </h2>
      </div>
      <Row className="pb-5">
        <ComponentOne mode={mode} />
      </Row>
      <Row>
        <ComponentTwo mode={mode} />
      </Row>
    </>
  );
};

export default Section4;
