export const saveproject = (state, payload) => {
  let update = {
    ...state,
    data: [...state.data, payload],
  };
  return update;
};
