const logout = (router) => {
  const authName = "kukeight-authorized-user";
  const loggedInUser = localStorage.getItem(authName);
  const parsed = JSON.parse(loggedInUser);
  const addOrMutateLogStatus = {
    ...parsed,
    user_is_loggedout: true
  }
  if (loggedInUser) {
    localStorage.setItem(authName, JSON.stringify(addOrMutateLogStatus));
    router.push("/");
  }
  return null;
};

export default logout;
