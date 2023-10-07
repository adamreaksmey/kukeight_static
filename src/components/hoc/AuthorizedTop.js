import React from "react";

const TopIsAuthorized = (WrappedComponent, UnauthorizedComponent) => {
    const Authorized = (props) => {
        const { showAuthorized, ...rest } = props;
        if (!showAuthorized){
            return <UnauthorizedComponent {...props} />
        }
        return <WrappedComponent {...props}/>;
    }
    return Authorized;
};

export default TopIsAuthorized;
