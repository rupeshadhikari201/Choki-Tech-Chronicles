import { useState } from "react";
import "../../Css/dashboard/dashboard.css";
import SideBar from "./dashboard_sidebar";
import DashBoardTopbar from "./dashboard_topbar";
const DashBoard = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
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
    </div>
  );
};

export default DashBoard;
