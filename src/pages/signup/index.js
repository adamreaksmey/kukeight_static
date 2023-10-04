import { BasicLayout } from "@/layout/basic";
import React, { useState } from "react";
import Signup from "@/components/top/signup";

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

  return (
    <>
      <BasicLayout>
        <Signup />
      </BasicLayout>
    </>
  );
}
