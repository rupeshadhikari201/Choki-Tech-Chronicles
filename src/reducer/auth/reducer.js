export function signInUser() {}

export function signOutUser() {}

export function signUpUser(user, state) {
  const newState = {
    ...state,
    user: {
      auth: true,
      firstName: user.firstName,
      email: user.email,
    },
  };
  localStorage.setItem("user", JSON.stringify(newState.user));
  return newState;
}
