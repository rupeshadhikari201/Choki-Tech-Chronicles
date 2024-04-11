import axios from "axios";
import { base_url } from "../../utils/constants/path";

export function signInUser() {}

export function signOutUser() {}

export function signUpUser(payload, state) {
  const newState = {
    ...state,
    user: {
      auth: true,
      firstName: payload.firstName,
      email: payload.email,
    },
  };
  signup(payload);
  localStorage.setItem("user", JSON.stringify(newState.user));
  return newState;
}
async function signup(user) {
  const response = await axios.post(base_url + "/api/user/register/", {
    firstname: user?.firstName,
    lastname: user?.lastName,
    email: user?.email,
    password: user?.password,
  });
}
