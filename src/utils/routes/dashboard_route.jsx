import { Outlet } from "react-router-dom";
import "../../Css/dashboard/dashboard.css";
import DashBoard from "../../Pages/dashboard/dashboard";
const DashBoardRoute = () => {
  return (
    <div
      className="
      bg-dark-blue
  "
    >
      <DashBoard>
        <Outlet />
      </DashBoard>
    </div>
  );
};

export default DashBoardRoute;
