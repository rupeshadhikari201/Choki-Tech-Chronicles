import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashBoardLeft from "../../Pages/dashboard/dashboard_left_side";
import DashBoardRight from "../../Pages/dashboard/dashboard_right_side";
import "../../Css/dashboard/dashboard.css";
const DashBoardRoute = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div
      className="
  min-height-100vh
  bg-light-green
  d-flex
  "
    >
      {/* LeftSide */}
      <DashBoardLeft setShowNav={setShowNav} showNav={showNav} />
      {/* RightSide */}
      <DashBoardRight showNav={showNav} setShowNav={setShowNav}>
        <Outlet />
      </DashBoardRight>
      {/*  */}
    </div>
  );
};

export default DashBoardRoute;
