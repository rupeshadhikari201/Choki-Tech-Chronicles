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
