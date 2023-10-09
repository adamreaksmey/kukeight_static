import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import BasicModal from "..";
import { useRouter } from "next/router";

export default function Login() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [allUsers, setAllUsers] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalForm, setModalForm] = useState({
    title: "Oops",
    body: "",
  });
  const router = useRouter();

  useEffect(() => {
    const allUsersFromLocal = JSON.parse(
      localStorage.getItem("kukeight-authorized-users")
    );

    setAllUsers(allUsersFromLocal);
  }, []);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = allUsers.find((obj) => obj.email == formLogin.email);
    if (!user) {
      setModalForm((prev) => ({
        ...prev,
        body: "Sorry, user not found. Please sign up!",
      }));
      setShowModal(true);
      return;
    }
    if (user?.password !== formLogin.password) {
      setModalForm((prev) => ({
        ...prev,
        body: "Wrong password!, Please try again!",
      }));
      setShowModal(true);
      return;
    }

    const mutatedArray = allUsers.map((data) => {
      return { ...data, user_is_loggedout: false };
    });
    localStorage.setItem(
      "kukeight-authorized-users",
      JSON.stringify(mutatedArray)
    );
    localStorage.setItem("auth-user-id", user.id);
    router.push("/home");
    return;
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <BasicModal
        showModal={showModal}
        handleModalClose={handleModal}
        title={modalForm.title}
        body={modalForm.body}
      />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formLogin.email}
            onChange={handleForm}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formLogin.password}
            onChange={handleForm}
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
