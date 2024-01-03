import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Outlet } from "react-router-dom";
import { commonPath } from "../constants/path";

const ProtectedRoutes = () => {
  const { state } = useContext(AuthContext);
  useEffect(() => {
    console.log("protected", state);
  }, []);

  return state?.user?.auth ? (
    <Outlet />
  ) : (
    <Navigate to={`/${commonPath}/signin`} />
  );
};

export default ProtectedRoutes;
