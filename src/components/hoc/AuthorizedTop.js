import React, { useEffect, useState } from "react";

const TopIsAuthorized = (WrappedComponent, UnauthorizedComponent) => {
  const Authorized = (props) => {
    const { showAuthorized, ...rest } = props;
    const [authorized, setAuthorized] = useState(false);
    const [userExistsInLocal, setUserExistsInLocal] = useState(false);

    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem("kukeight-authorized-users"));
        const authUserId = localStorage.getItem("auth-user-id");
  
        const foundUser = allUsers?.find(obj => obj.id == authUserId);
        if (foundUser){
            setUserExistsInLocal(true);
        }
        const checkIfLoggedOut = foundUser?.user_is_loggedout;
        setAuthorized(checkIfLoggedOut);
    })

    if (authorized || !userExistsInLocal) {
      return <UnauthorizedComponent {...props} />;
    }
    return <WrappedComponent {...props} />;
  };
  return Authorized;
};

export default TopIsAuthorized;
