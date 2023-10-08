import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Auth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    useEffect(() => {
      const allUsers = JSON.parse(localStorage.getItem("kukeight-authorized-user"));
      const authUserId = localStorage.getItem("auth-user-id");

      const foundUser = allUsers?.find(obj => obj.id == authUserId);
      const checkIfLoggedOut = foundUser?.user_is_loggedout;
      if (!checkIfLoggedOut){
        router.push("/home");
      }
    }, []);
    return <WrappedComponent {...props} />;
  };
  return Wrapper;
};

export default Auth;
