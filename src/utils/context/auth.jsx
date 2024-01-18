import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "../../reducer/reducer";
import { ACTION_TYPE } from "../../reducer/action/action";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [userState, userdispatch] = useReducer(authReducer, {});
  useEffect(() => {
    //cheking if there is a user in the local storage
    userdispatch({ type: ACTION_TYPE.LOCAL_STORAGE_EXTRACTOIN });
    console.log(" auth context effect called");
  }, []);
  return (
    <AuthContext.Provider value={{ userState, userdispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
