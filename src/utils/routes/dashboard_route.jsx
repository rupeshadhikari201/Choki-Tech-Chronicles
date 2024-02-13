import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashBoardLeft from "../../Pages/dashboard/dashboard_sidebar";
import DashBoardRight from "../../Pages/dashboard/dashboard_topbar";
import "../../Css/dashboard/dashboard.css";
import DashBoard from "../../Pages/dashboard/dashboard";
const DashBoardRoute = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div
      className="
      bg-dark-blue
  d-flex
  "
    >
      {/* LeftSide 
      <DashBoardLeft setShowNav={setShowNav} showNav={showNav} />
      {/* RightSide 
      <DashBoardRight showNav={showNav} setShowNav={setShowNav}>
        <Outlet />
      </DashBoardRight>
      */}
      <DashBoard>
        <Outlet />
      </DashBoard>
    </div>
  );
};

export default DashBoardRoute;
