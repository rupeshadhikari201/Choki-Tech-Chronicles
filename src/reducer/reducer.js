import { ACTION_TYPE } from "./action/action";
import { signUpUser } from "./auth/reducer";
import { getUserFromLocal } from "./local/local";

export function authReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.SIGN_IN:
      break;
    case ACTION_TYPE.SIGN_UP:
      state = signUpUser(action.payload, state);
      console.log(state, "from payload");
      return state;
    case ACTION_TYPE.SIGN_OUT:
      break;
    case ACTION_TYPE.LOCAL_STORAGE_EXTRACTOIN:
      state = getUserFromLocal(state);
      return state;
    default:
      return state;
  }
}
