import { BasicLayout } from "@/layout/basic";
import React, { useEffect, useState } from "react";
import Logo from "@/public/photos/logo.png";
import Quotes from "@/components/quotes";
import { useRouter } from "next/router";
import SectionOne from "@/components/signup/SectionOne";
import SectionTwo from "@/components/signup/SectionTwo";

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
  const [quotes, setQuotes] = useState();
  const router = useRouter();

  useEffect(() => {
    if (Quotes) {
      setQuotes(Quotes);
    }
  }, []);

  const logoImage = Logo.src;

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/home");
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
      </BasicLayout>
    </>
  );
}
