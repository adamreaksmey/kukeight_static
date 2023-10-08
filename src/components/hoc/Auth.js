import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Auth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    useEffect(() => {
      const userIsAuthorized = localStorage.getItem("kukeight-authorized-user");
      const parsed = JSON.parse(userIsAuthorized);
      const userIsLoggedOut = parsed?.user_is_loggedout;
      if (!userIsLoggedOut) {
        router.push("/home");
      }
    }, []);
    return <WrappedComponent {...props} />;
  };
  return Wrapper;
};

export default Auth;
