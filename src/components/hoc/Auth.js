import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Auth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    useEffect(() => {
      const userIsAuthorized = localStorage.getItem("kukeight-authorized-user");
      if (userIsAuthorized) {
        router.push("/home");
      }
    }, []);
    return <WrappedComponent {...props} />;
  };
  return Wrapper;
};

export default Auth;
