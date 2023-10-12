import React from "react";
import { Row, Col } from "react-bootstrap";

const EditProfile = () => {
  return (
    <div>
      <Row
        className="p-4 rounded mb-1 logo-img"
        style={{ background: "#6A9C89" }}
      >
        <div>
            <h5 className="fw-bold text-decoration-underline">Edit your info below here!</h5>
        </div>
        <Col>Hello world</Col>
        <Col>Hello world</Col>
      </Row>
    </div>
  );
};

export default EditProfile;
