import React from "react";
import { useState } from "react";
import BasicModal from "@/components/modal";
import Login from "@/components/modal/auth/login";

export default function Auth() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const helloWorld = () => {
    console.log("hello world");
  };

  return (
    <>
      <div className="d-flex auth-action">
        <button className="btn1" onClick={handleModalOpen}>
          Sign up
        </button>
        <button className="btn2">Log in</button>
      </div>
      <BasicModal
        handleModalClose={handleModalClose}
        helloWorld={helloWorld}
        showModal={showModal}
        title={"Log in"}
        body={<Login />}
      />
    </>
  );
}
