import { Navigate, Outlet } from "react-router-dom";
import { commonPath } from "../constants/path";
import { getUserFromLocal } from "../../reducer/local/local";
import { useEffect } from "react";

const ProtectedRoutes = () => {
  const { user } = getUserFromLocal({});
  useEffect(() => {
    console.log("protected");
  }, []);

  return user?.auth ? <Outlet /> : <Navigate to={`/${commonPath}/signin`} />;
};

export default ProtectedRoutes;
