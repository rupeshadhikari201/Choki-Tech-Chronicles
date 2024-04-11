export const saveproject = (state, payload) => {
  let update = {
    ...state,
    data: [...payload],
  };
  return update;
};

export const addproject = (state, payload) => {
  let update = {
    ...state,
    data: [...state.data, ...payload],
  };
  return update;
};
