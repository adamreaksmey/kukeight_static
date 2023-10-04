import { BasicLayout } from "@/layout/basic";
import React, { useState } from "react";
import Signup from "@/components/top/signup";

export default function SignupPage() {
  return (
    <>
      <BasicLayout>
        <Signup />
      </BasicLayout>
    </>
  );
}
