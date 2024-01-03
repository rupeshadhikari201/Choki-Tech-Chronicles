import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "../../reducer/reducer";
import { ACTION_TYPE } from "../../reducer/action/action";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {});
  useEffect(() => {
    //cheking if there is a user in the local storage
    dispatch({ type: ACTION_TYPE.LOCAL_STORAGE_EXTRACTOIN });
  }, []);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
