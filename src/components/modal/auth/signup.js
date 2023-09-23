import React, { use, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = () => {};
  const handleEmailChange = () => {};
  const handlePasswordChange = () => {};

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
