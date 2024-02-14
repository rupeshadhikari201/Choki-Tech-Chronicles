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
  d-flex
  "
      style={{
        overflow: "hidden",
      }}
    >
      {/* Leftside */}
      <SideBar showNav={showNav} setShowNav={setShowNav} />
      {/* Right side */}
      <div
        className={`
      bg-white-variant-3
      position-fixed
      dashboard-main-container
      px-2
      rounded
      `}
      >
        <div
          className={`position-relative w-100 mb-2 `}
          style={{ height: "70px" }}
        >
          {/* TopBar */}
          <DashBoardTopbar showNav={showNav} setShowNav={setShowNav} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashBoard;
