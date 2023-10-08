const logout = (router) => {
  const authName = "kukeight-authorized-users";
  const loggedInUsers = JSON.parse(localStorage.getItem(authName));
  const authUserId = localStorage.getItem("auth-user-id");
  const foundUser = loggedInUsers.find((obj) => obj.id == authUserId);

  const newObjectUsers = loggedInUsers.map((obj) => {
    if (obj.id == authUserId) {
      return { ...obj, user_is_loggedout: true };
    }
  });

  if (foundUser) {
    localStorage.setItem(authName, JSON.stringify(newObjectUsers));
    router.push("/");
  }
  return null;
};

export default logout;