import SectionOne from "@/components/signup/SectionOne";
import SectionTwo from "@/components/signup/SectionTwo";
import React, { useEffect, useState } from "react";
import BasicModal from "@/components/modal/index";
import { BasicLayout } from "@/layout/library";
import Logo from "@/public/photos/logo.png";
import Quotes from "@/components/functions/quotes";
import Auth from "@/components/hoc/Auth";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const SignupPage = (props) => {
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
    user_is_loggedout: false,
  });
  const [quotes, setQuotes] = useState();
  const [showModal, setShowModal] = useState({
    show: false,
    title: "",
    body: "",
  });
  const { users } = props;
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
      setShowModal((prev) => ({
        show: true,
        title: "Oops!",
        body: "Wrong password, please try again!",
      }));
      return;
    }
    const checkIfUsersExists = users.find((data) => data.email == form.email);
    if (checkIfUsersExists) {
      setShowModal((prev) => ({
        show: true,
        title: "Oops!",
        body: "User already exists, Please log in!",
      }));
      return;
    }
    const { confirm_password, ...newUser } = form;
    users.push(form);
    localStorage.setItem("kukeight-authorized-users", JSON.stringify(users));
    localStorage.setItem("auth-user-id", newUser.id);
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
          showModal={showModal.show}
          handleModalClose={handleModal}
          title={showModal.title}
          body={showModal.body}
        />
      </BasicLayout>
    </>
  );
};

export default Auth(SignupPage);
