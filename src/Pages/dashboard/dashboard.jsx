import { useContext, useEffect, useState } from "react";
import "../../Css/dashboard/dashboard.css";
import SideBar from "./dashboard_sidebar";
import DashBoardTopbar from "./dashboard_topbar";
import { AuthContext } from "../../utils/context/auth";
import ReactLoading from "react-loading";
import { ACTION_TYPE } from "../../reducer/action/action";
import { base_url, commonPath } from "../../utils/constants/path";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const DashBoard = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [loading, setLoading] = useState(true);
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
        .then((res) => {
          console.log(res.data);
          userdispatch({
            type: ACTION_TYPE.SAVE_TO_LOCALE,
            payload: {
              firstName: res.data.data.firstname,
              lastName: res.data.data.lastname,
              email: res.data.data.email,
            },
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
    return () => {};
  }, [userState.loading]);

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
