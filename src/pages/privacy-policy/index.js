import React from "react";
import { BasicLayout } from "@/layout/basic/index";
import BackHome from "@/components/general/backhome";

const PrivacyPolicy = () => {
  return (
    <BasicLayout>
      <div className="d-flex flex-column justify-content-center w-100 align-items-center vh-100">
        <div className="pb-4">Privacy Policy!</div>
        <div>
          <BackHome />
        </div>
      </div>
    </BasicLayout>
  );
};

export default PrivacyPolicy;
