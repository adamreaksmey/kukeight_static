import React from "react";
import { BasicLayout } from "@/layout/library";
import BackHome from "@/components/general/backhome";

const Help = () => {
  return (
    <BasicLayout>
      <div className="d-flex flex-column justify-content-center w-100 align-items-center vh-100">
        <div className="pb-4">Help!</div>
        <div>
          <BackHome />
        </div>
      </div>
    </BasicLayout>
  );
};

export default Help;
