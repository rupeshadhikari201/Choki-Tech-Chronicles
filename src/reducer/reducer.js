const ACTION_TYPE = {
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
  SIGN_UP: "SIGN_UP",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.SIGN_IN:
      break;
    case ACTION_TYPE.SIGN_UP:
      break;
    case ACTION_TYPE.SIGN_OUT:
      break;
    default:
      return state;
  }
}
