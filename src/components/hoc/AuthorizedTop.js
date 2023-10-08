import React, { useEffect, useState } from "react";

const TopIsAuthorized = (WrappedComponent, UnauthorizedComponent) => {
  const Authorized = (props) => {
    const { showAuthorized, ...rest } = props;
    const [authorized, setAuthorized] = useState(false);
    const [userExistsInLocal, setuserExistsInLocal] = useState(true);

    useEffect(() => {
      const userIsAuthorized = localStorage.getItem("kukeight-authorized-user");
      if (userIsAuthorized) {
        setuserExistsInLocal(true);
        const parsed = JSON.parse(userIsAuthorized);
        const userIsLoggedOut = parsed?.user_is_loggedout;
        setAuthorized(userIsLoggedOut);
      } else {
        setAuthorized(false);
        setuserExistsInLocal(false);
      }
    });

    if (authorized || !userExistsInLocal) {
      return <UnauthorizedComponent {...props} />;
    }
    return <WrappedComponent {...props} />;
  };
  return Authorized;
};

export default TopIsAuthorized;
