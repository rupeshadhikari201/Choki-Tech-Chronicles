import { useContext, useState } from "react";
import { AuthContext } from "../../utils/context/auth";
import DashBoardRight from "./dashboard_right_side";
import DashBoardLeft from "./dashboard_left_side";
import "../../Css/dashboard/dashboard.css";
const DashBoard = () => {
  const [showNav, setShowNav] = useState(true);
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
      <DashBoardRight showNav={showNav} setShowNav={setShowNav} />
      {/*  */}
    </div>
  );
};

export default DashBoard;
