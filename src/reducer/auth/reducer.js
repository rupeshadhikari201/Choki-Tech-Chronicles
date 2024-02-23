import axios from "axios";

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
  console.log(payload);
  signup(payload);
  localStorage.setItem("user", JSON.stringify(newState.user));
  return newState;
}
const base_url = "https://django-backend-zb2n.onrender.com";
async function signup(user) {
  const response = await axios.post(base_url + "/api/user/register/", {
    firstname: user?.firstName,
    lastname: user?.lastName,
    email: user?.email,
    password: user?.password,
  });
}
