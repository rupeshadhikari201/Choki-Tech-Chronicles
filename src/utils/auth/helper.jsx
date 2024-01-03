import { toast } from "react-toastify";

export const path_to_signin = "/Choki-Tech-Chronicles/signin";
export const path_to_signup = "/Choki-Tech-Chronicles/signup";

export const isPasswordStrong = (password) => {
  if (!password) return false;
  if (password.length < 6) return false;
  return true;
};
export const isEmailValid = (email) => {
  const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return false;
  if (!expression.test(email.toLowerCase())) return false;
  return true;
};
export const isNameValid = (name) => {
  if (!name || name.length < 2) return false;

  return true;
};

export const validateSignUpInput = (userData, state) => {
  let valid = true;
  const {
    setValidFirstName,
    setValidLastName,
    setValidPassword,
    setValidConfirm,
    setValidEmail,
  } = state;
  if (!isNameValid(userData.firstName)) {
    setValidFirstName(false);
    valid = false;
  } else setValidFirstName(true);
  //
  if (!isNameValid(userData.lastName)) {
    setValidLastName(false);
  } else setValidLastName(true);

  if (!isEmailValid(userData.email)) {
    setValidEmail(false);
    valid = false;
  } else setValidEmail(true);
  //

  if (!isPasswordStrong(userData.password)) {
    setValidPassword(false);
    valid = false;
  } else setValidPassword(true);
  //
  if (!userData.password || userData.confirmPassword != userData.password) {
    setValidConfirm(false);
    valid = false;
  } else setValidConfirm(true);
  if (valid) {
    console.log("Authenticaiton is valid");
    toast("Successfuly signed");
  }
};

export const validateSignInInput = (userData, state) => {
  const { setValidEmail, setValidPassword } = state;
  if (!isEmailValid(userData.email)) {
    setValidEmail(false);
  } else setValidEmail(true);
  if (!isPasswordStrong(userData.password)) {
    setValidPassword(false);
  } else setValidPassword(true);
};
