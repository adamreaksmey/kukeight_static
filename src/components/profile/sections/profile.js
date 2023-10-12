import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

const EditProfile = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    age: "",
    country: "",
    password: "",
    confirm_password: "",
    language: "",
    user_type: "",
    user_is_loggedout: false,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Row
        className="p-4 rounded mb-1 logo-img"
        style={{ background: "#6A9C89" }}
      >
        <div className="pb-4">
          <h5 className="fw-bold text-decoration-underline title-font">
            Edit your info below here!
          </h5>
        </div>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Userame:</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  value={form.username}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Language:</Form.Label>
                <Form.Control
                  name="language"
                  type="email"
                  value={form.username}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Row>
    </div>
  );
};

export default EditProfile;
