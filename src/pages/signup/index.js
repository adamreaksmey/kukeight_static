import { BasicLayout } from "@/layout/basic";
import React, { use, useState } from "react";
import Signup from "@/components/top/signup";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function SignupPage() {
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
      <BasicLayout>
        <Signup />
      </BasicLayout>
    </>
  );
}
