import React, { use, useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Logo from "@/public/photos/logo.png";
import Image from "next/image";
import Quotes from "@/components/quotes";
import { useRouter } from "next/router";

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
  const [quotes, setQuotes] = useState();
  const router = useRouter();

  useEffect(() => {
    if (Quotes) {
      setQuotes(Quotes);
    }
  }, []);

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
      <Row>
        <Col xs={6} sm={3} className="signup-logo">
          <div className="w-100 text-center">
            <Image
              src={logoImage}
              alt="image"
              width={500}
              height={500}
              style={{ filter: "drop-shadow(21px 20px 8px black)" }}
            />
          </div>
          <div className="text-center">
            <div className="full-title d-inline mb-3">
              <div className="d-inline title-one" style={{ color: "#78D6C6" }}>
                KUKeight
              </div>
              &nbsp;&nbsp;
              <div className="title-two d-inline" style={{ color: "#F5FCCD" }}>
                Studio
              </div>
            </div>
            <p
              style={{
                transform: "translateY(1vw)",
                color: "black",
                fontWeight: "bold",
              }}
              className="pb-3"
            >
              Read, Write, Immerse!
            </p>
            <hr />
            <pre
              className="signup-quotes"
              dangerouslySetInnerHTML={{ __html: quotes }}
            />
          </div>
        </Col>

        <Col xs={3} sm={5} className="signup-col">
          <div className="text-center">SIGN UP TEST</div>
          <Form onSubmit={handleSubmit} className="d-flex w-100 gap-5">
            <div className="w-50">
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
              &nbsp;
              <Button
                variant="secondary"
                type="button"
                onClick={() => {
                  router.push("/");
                }}
              >
                Back
              </Button>
            </div>

            <div className="w-50">
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
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
}
