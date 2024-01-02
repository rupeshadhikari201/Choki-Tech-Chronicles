export const path_to_signin = "/Choki-Tech-Chronicles/signin";
export const path_to_signup = "/Choki-Tech-Chronicles/signup";
export const isPasswordStrong = (password) => {
  if (!password) return false;
  return true;
};
export const isEmailValid = (email) => {
  if (!email) return false;
  return true;
};
export const isNameValid = (name) => {
  if (!name || name.length < 2) return false;

  return true;
};
