import apiclient from "../utils/api-client";

export function Signup(user, profile) {
  const body = new FormData();
  body.append("name", user.name);
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("address", user.address);
  body.append("profilePic", profile);

  return apiclient.post("/user/signup", body);
}
