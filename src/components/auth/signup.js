import React, { use, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Logo from "@/public/photos/logo.png";
import Image from "next/image";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    username: "",
    age: "",
    country: "",
    password: "",
    confirm_password: "",
    language: "",
    user_type: "",
  });

  const logoImage = Logo.src;


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    console.log({ name: name, value: value });
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={6} sm={3} className="signup-logo">
            <Image src={logoImage} alt="image" width={500} height={500}/>
          </Col>
          
          <Col xs={6} sm={3} className="signup-col">
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={form.email}
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label>Username: (Unique, Globally displayed)</Form.Label>
              <Form.Control
                name="username"
                type="text"
                value={form.username}
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="age">
              <Form.Label>Age:</Form.Label>
              <Form.Control
                name="age"
                type="number"
                value={form.age}
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label>Country:</Form.Label>
              <Form.Control
                name="country"
                type="text"
                value={form.country}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>

          <Col xs={6} sm={3} className="signup-col">
            <Form.Group controlId="language">
              <Form.Label>Language:</Form.Label>
              <Form.Select
                name="language"
                value={form.language}
                onChange={handleFormChange}
                required
              >
                <option value="" disabled>
                  Select a language
                </option>
                <option value="cambodia">Khmer</option>
                <option value="others">Others</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="user-type">
              <Form.Label>You are a ...:</Form.Label>
              <Form.Select
                name="user_type"
                value={form.user_type}
                onChange={handleFormChange}
                required
              >
                <option value="" disabled>
                  Select below
                </option>
                <option value="musician">Musician</option>
                <option value="novelist">Novelist</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={form.password}
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="confirm-password">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                name="confirm_password"
                type="password"
                value={form.confirm_password}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
          </Col>
          
        </Row>
      </Form>
    </>
  );
}
