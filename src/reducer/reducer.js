import { ACTION_TYPE } from "./action/action";
import { signUpUser } from "./auth/reducer";
import { getUserFromLocal } from "./local/local";
import { addproject, saveproject } from "./project/project";
import Cookies from "js-cookie";
export function authReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.SIGN_IN:
      break;
    case ACTION_TYPE.SIGN_UP:
      state = signUpUser(action.payload, state);
      return state;
    case ACTION_TYPE.SIGN_OUT:
      break;
    case ACTION_TYPE.LOCAL_STORAGE_EXTRACTOIN:
      state = getUserFromLocal(state);
      return state;
    case ACTION_TYPE.SAVE_TO_LOCALE:
      localStorage.setItem("user", JSON.stringify(action.payload));
      state = getUserFromLocal(state);
      return state;
    case ACTION_TYPE.SAVE_TOKEN:
      return { ...state, token: action.payload };
    case ACTION_TYPE.SAVE_REFRESH:
      localStorage.setItem("refresh", JSON.stringify(action.payload));
      Cookies.set("refresh", action.payload);
      return state;
    case ACTION_TYPE.ERASE_LOCALE:
      localStorage.removeItem("user");
      return { ...state, user: {} };
    case ACTION_TYPE.UPDATE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function sideNavReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_SIDE_NAV:
      return { ...state, active: action.payload };
    default:
      return state;
  }
}

export const projectReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_PROJECT:
      state = saveproject(state, action.payload);
      return state;
    case ACTION_TYPE.ADD_PROJECT:
      state = addproject(state, action.payload);
      return state;
    default:
      return state;
  }
};
