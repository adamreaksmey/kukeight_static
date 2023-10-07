import React, { useEffect } from "react";
import { useRouter } from "next/router";

const logout = (router) => {
  const authName = "kukeight-authorized-user";
  const loggedInUser = localStorage.getItem(authName);
  if (loggedInUser) {
    localStorage.removeItem(authName);
    router.push("/");
  }
  return null;
};

export default logout;
