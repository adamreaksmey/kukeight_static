import { BasicLayout } from "@/layout/library";
import React, { useEffect, useState } from "react";
import Logo from "@/public/photos/logo.png";
import Quotes from "@/components/quotes";
import { useRouter } from "next/router";
import SectionOne from "@/components/signup/SectionOne";
import SectionTwo from "@/components/signup/SectionTwo";
import BasicModal from "@/components/modal/index";
import Auth from "@/components/hoc/Auth";
import { v4 as uuidv4 } from 'uuid';

const SignupPage = () => {
  const [form, setForm] = useState({
    id: uuidv4(),
    email: "",
    username: "",
    age: "",
    country: "",
    password: "",
    confirm_password: "",
    language: "",
    user_type: "",
    user_is_loggedout: false
  });
  const [quotes, setQuotes] = useState();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // quotes
    if (Quotes) {
      setQuotes(Quotes);
    }
  }, []);

  const logoImage = Logo.src;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm_password) {
      setShowModal(true);
      return;
    }
    const { confirm_password, ...newUser } = form;
    const allUsers = JSON?.parse(localStorage.getItem("kukeight-authorized-users"));
    return allUsers;
    localStorage.setItem("kukeight-authorized-users", JSON.stringify([newUser]));
    localStorage.setItem("auth-user-id", newUser.id)
    router.push("/home");
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <>
      <BasicLayout>
        <div className="d-flex w-100">
          <SectionOne logoImage={logoImage} quotes={quotes} />
          <div
            className="w-100 d-flex align-items-center h-100"
            style={{ padding: "8rem" }}
          >
            <SectionTwo
              form={form}
              handleFormChange={handleFormChange}
              handleSubmit={handleSubmit}
              router={router}
            />
          </div>
        </div>
        <BasicModal
          showModal={showModal}
          handleModalClose={handleModal}
          title={"Oops!"}
          body={"Your passwords did not match each other!"}
        />
      </BasicLayout>
    </>
  );
};

export default Auth(SignupPage);
