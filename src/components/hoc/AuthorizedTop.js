import React, { useEffect, useState } from "react";

const TopIsAuthorized = (WrappedComponent, UnauthorizedComponent) => {
  const Authorized = (props) => {
    const { showAuthorized, ...rest } = props;
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
      const userIsAuthorized = localStorage.getItem("kukeight-authorized-user");
      if (userIsAuthorized) {
        const parsed = JSON.parse(userIsAuthorized);
        const userIsLoggedOut = parsed?.user_is_loggedout;
        console.log(userIsLoggedOut)
        setAuthorized(userIsLoggedOut);
      } else {
        setAuthorized(false);
      }
    });

    if (authorized) {
      return <UnauthorizedComponent {...props} />;
    }
    return <WrappedComponent {...props} />;
  };
  return Authorized;
};

export default TopIsAuthorized;
