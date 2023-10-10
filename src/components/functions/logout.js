const logout = (router) => {
  const authName = "kukeight-authorized-users";
  const loggedInUsers = JSON.parse(localStorage.getItem(authName));
  const authUserId = localStorage.getItem("auth-user-id");
  const foundUser = loggedInUsers.find((obj) => obj.id == authUserId);

  const newObjectUsers = loggedInUsers.find(data => data.id == authUserId);
  newObjectUsers["user_is_loggedout"] = true;

  if (foundUser) {
    localStorage.setItem(authName, JSON.stringify(loggedInUsers));
    localStorage.removeItem("auth-user-id");
    router.push("/");
  }
  return;
};

export default logout;