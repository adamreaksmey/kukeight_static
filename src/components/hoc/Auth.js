import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Auth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [hasNavigated, setHasNavigated] = useState(false);

    useEffect(() => {
      const allUsers = JSON?.parse(
        localStorage.getItem("kukeight-authorized-users")
      );
      const authUserId = localStorage.getItem("auth-user-id");

      const foundUser = allUsers?.find((obj) => obj?.id == authUserId);
      const checkIfLoggedOut = foundUser?.user_is_loggedout;

      if (!checkIfLoggedOut && foundUser && router.asPath == "/" && !hasNavigated) {
        router.push("/home");
        setHasNavigated(true);
      } else if (!authUserId && router.asPath !== "/signup" && !hasNavigated) {
        router.push("/");
        setHasNavigated(true);
      }
    }, [router, hasNavigated]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default Auth;