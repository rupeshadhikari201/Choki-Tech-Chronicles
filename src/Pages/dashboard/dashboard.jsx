import { useContext, useEffect, useState } from "react";
import "../../Css/dashboard/dashboard.css";
import SideBar from "./dashboard_sidebar";
import DashBoardTopbar from "./dashboard_topbar";
import { AuthContext } from "../../utils/context/auth";
import ReactLoading from "react-loading";
const DashBoard = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const { userState } = useContext(AuthContext);
  // useEffect(() => {
  //   return () => {
  //   };
  // }, [userState.loading]);

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
      {userState.loading ? (
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
      px-3
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
