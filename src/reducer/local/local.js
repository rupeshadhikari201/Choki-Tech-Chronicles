export const getUserFromLocal = (state) => {
  let user = localStorage.getItem("user") ?? {};
  try {
    user = JSON.parse(user);
  } catch (e) {
    console.error(e.message);
    user = {};
  }

  return {
    ...state,
    user,
    loading: false,
  };
};
