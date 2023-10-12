import React from "react";
import { Form, Button, Col } from "react-bootstrap";

const SectionTwo = (props) => {
  const { form, handleFormChange, handleSubmit, router } = props;
  return (
    <Col className="signup-col h-100">
      <div className="d-flex justify-content-center">
        <h2>Sign up</h2>
      </div>
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
              <option value="english">English</option>
              <option valuee="others">Others</option>
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
  );
};

export default SectionTwo;
