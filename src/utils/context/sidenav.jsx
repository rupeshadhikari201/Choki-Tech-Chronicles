import { createContext, useReducer } from "react";
import { sideNavReducer } from "../../reducer/reducer";

export const SideNavContext = createContext();
const SideNavContextProvider = ({ children }) => {
  const [sideNavState, navDispatch] = useReducer(sideNavReducer, {
    active: "home",
  });
  return (
    <SideNavContext.Provider value={{ navDispatch, sideNavState }}>
      {children}
    </SideNavContext.Provider>
  );
};

export default SideNavContextProvider;
