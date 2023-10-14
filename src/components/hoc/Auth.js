import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Auth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    useEffect(() => {
      const allUsers = JSON?.parse(
        localStorage.getItem("kukeight-authorized-users")
      );
      const authUserId = localStorage.getItem("auth-user-id");

      const foundUser = allUsers?.find((obj) => obj?.id == authUserId);
      const checkIfLoggedOut = foundUser?.user_is_loggedout;
      if (!checkIfLoggedOut && foundUser && router.asPath == "/") {
        router.push("/home");
      }
      else if (!authUserId) {
        router.push("/")
      }
    }, []);
    return <WrappedComponent {...props} />;
  };
  return Wrapper;
};

export default Auth;
