import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import BasicModal from "@/components/modal/index";

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
    image: {
      name: "",
      url: "",
    },
    user_is_loggedout: false,
  });
  const [showModal, setShowModal] = useState({
    show: false,
    title: "",
    body: "",
  });
  const [users, setUsers] = useState("");

  useEffect(() => {
    const getUsers = JSON.parse(
      localStorage.getItem("kukeight-authorized-users")
    );
    setUsers(getUsers);
    const authId = localStorage.getItem("auth-user-id");
    const userExists = getUsers.find((data) => data.id == authId);
    setForm(userExists);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm_password) {
      setShowModal((prev) => ({
        show: true,
        title: "Oops!",
        body: "Wrong password, please try again!",
      }));
      return;
    }

    const authUserId = localStorage.getItem("auth-user-id");
    const userExists = users.find((data) => data.id == authUserId);
    Object.assign(userExists, form);
    localStorage.setItem("kukeight-authorized-users", JSON.stringify(users));

    return setShowModal({
      show: true,
      title: "Success!",
      body: "Your info has been changed",
    });
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <BasicModal
        showModal={showModal.show}
        handleModalClose={handleModal}
        title={showModal.title}
        body={showModal.body}
      />
      <Row
        className="p-4 rounded mb-1 logo-img"
        style={{ background: "#6A9C89" }}
      >
        <div className="pb-4">
          <h5 className="fw-bold text-decoration-underline title-font">
            Edit your info below here!
          </h5>
          <hr />
        </div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  value={form?.username}
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
                  value={form?.email}
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
                <Form.Select
                  name="language"
                  value={form?.language}
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
            </Col>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>You are a ...:</Form.Label>
                <Form.Select
                  name="user_type"
                  value={form?.user_type}
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
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  value={form?.password}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="confirm-password">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  name="confirm_password"
                  type="password"
                  value={form?.confirm_password}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="age">
                <Form.Label>Age:</Form.Label>
                <Form.Control
                  name="age"
                  type="number"
                  value={form?.age}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="country">
                <Form.Label>Country:</Form.Label>
                <Form.Control
                  name="country"
                  type="text"
                  value={form?.country}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </div>
  );
};

export default EditProfile;
