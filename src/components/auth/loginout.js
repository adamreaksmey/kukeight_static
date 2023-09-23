import React from "react";
import { useState } from "react";
import BasicModal from "@/components/modal";
import Login from "@/components/modal/auth/login";
import Signup from "@/components/modal/auth/signup";

export default function Auth() {
  const [showModal, setShowModal] = useState(false);
  const [component, setComponent] = useState({
    component: null,
    title: null,
  });

  const handleModalOpen = (method) => {
    if (method == "sign-up") {
      setComponent({
        component: <Signup />,
        title: "Sign-up",
      });
    }
    if (method == "log-in") {
      setComponent({
        component: <Login />,
        title: "Log-in",
      });
    }
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="d-flex auth-action">
        <button
          className="btn1"
          onClick={() => {
            handleModalOpen("sign-up");
          }}
        >
          Sign up
        </button>
        <button
          className="btn2"
          onClick={() => {
            handleModalOpen("log-in");
          }}
        >
          Log in
        </button>
      </div>
      <BasicModal
        handleModalClose={handleModalClose}
        showModal={showModal}
        title={component.title}
        body={component.component}
      />
    </>
  );
}
