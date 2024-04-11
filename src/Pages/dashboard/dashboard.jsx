import { useContext, useEffect, useState } from "react";
import "../../Css/dashboard/dashboard.css";
import SideBar from "./dashboard_sidebar";
import DashBoardTopbar from "./dashboard_topbar";
import { AuthContext } from "../../utils/context/auth";
import ReactLoading from "react-loading";
import { ACTION_TYPE } from "../../reducer/action/action";
import { base_url } from "../../utils/constants/path";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const DashBoard = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const { userState, userdispatch } = useContext(AuthContext);
  const navigator = useNavigate();
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
        .then(async (res) => {
          userdispatch({
            type: ACTION_TYPE.SAVE_TO_LOCALE,
            payload: {
              firstname: res.data.data.firstname,
              lastname: res.data.data.lastname,
              email: res.data.data.email,
            },
          });
          //UpdateUser
          userdispatch({
            type: ACTION_TYPE.UPDATE_USER,
            payload: { ...res.data?.data, id: res.data.id },
          });

          return res.data;
        })
        .catch(async (e) => {
          if (e.response.status == 401) {
            //if get new token if there is refresh token
            const refreshToken = Cookies.get("refresh");
            const refresh = await axios.post(
              base_url + "/api/user/token/refresh/",
              {
                refresh: refreshToken,
              }
            );
            if (refresh.data.access) {
              Cookies.set("token", refresh.data.access, { expires: 1 });
              setRefresh(true);
              return;
            }
            console.log("response is 401");
            userdispatch({
              type: ACTION_TYPE.ERASE_LOCALE,
            });
            navigator(`/signin`);
          }
          console.log(e.response.data);
        })
        .finally((res) => {
          setLoading(false);
        });
    };
    profile();
    return () => {};
  }, [userState.loading, refresh]);

  return (
    <div
      className="
  min-height-100vh
  bg-dark-blue
  position-relative
  "
      style={{
        overflow: "hidden",
      }}
    >
      {/* Right side */}
      {loading ? (
        <>
          <div className="text-black-variant-2 position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
            <ReactLoading type="spin" height={50} width={50} />
          </div>
        </>
      ) : (
        <>
          <div
            className={` 
      
      `}
            style={{ zIndex: 100 }}
          >
            <div
              className={`
      bg-white-variant-3
      dashboard-main-container
      px-md-3 px-0
      pb-3
      rounded
      `}
            >
              <div
                className={`position-relative w-100 mb-2`}
                style={{ height: "70px" }}
              >
                {/* TopBar */}
                <DashBoardTopbar showNav={showNav} setShowNav={setShowNav} />
              </div>
              {children}
            </div>
          </div>
          {/* Leftside */}
          <SideBar showNav={showNav} setShowNav={setShowNav} />
        </>
      )}
    </div>
  );
};

export default DashBoard;
