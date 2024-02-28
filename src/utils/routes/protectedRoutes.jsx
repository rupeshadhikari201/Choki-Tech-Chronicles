import { Navigate, Outlet } from "react-router-dom";
import { base_url, commonPath } from "../constants/path";
import ReactLoading from "react-loading";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ACTION_TYPE } from "../../reducer/action/action";
import { AuthContext } from "../context/auth";

const ProtectedRoutes = () => {
  const [currentUser, setCurrentUser] = useState("hello there");
  const { userdispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const profile = async () => {
      axios
        .get(base_url + "/api/user/profile/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setCurrentUser({
            firstName: res.data.data.firstname,
            lastName: res.data.data.lastname,
            email: res.data.data.email,
          });
          return res.data;
        })
        .catch((e) => {
          if (e.response.status == 401) {
            console.log("response is 401");
            userdispatch({
              type: ACTION_TYPE.ERASE_LOCALE,
            });
            navigator(`${commonPath}/signin`);
          }
          console.log(e.response.data);
        })
        .finally((res) => {
          setLoading(false);
        });
    };
    profile();
    console.log("protected");
  }, []);

  return loading ? (
    <div className="text-black-variant-2 position-absolute w-100 h-100 d-flex justify-content-center align-items-center bg-dark-blue">
      <ReactLoading type="spin" height={50} width={50} />
    </div>
  ) : currentUser ? (
    <Outlet />
  ) : (
    <Navigate to={`/${commonPath}/signin`} />
  );
};

export default ProtectedRoutes;
