import "../../Css/dashboard/dashboard.css";
import SideBar from "./dashboard_sidebar";
import DashBoardTopbar from "./dashboard_topbar";
const DashBoard = ({ children }) => {
  return (
    <div
      className="
  min-height-100vh
  bg-dark-blue
  d-flex
  "
    >
      {/* Leftside */}
      <SideBar />
      {/* Right side */}
      <div
        className={`
      position-fixed
      bg-blue
      border border-3
      p-2
      bg-white
      rounded
      `}
        style={{
          top: "20px",
          bottom: "20px",
          left: "200px",
          right: "20px",
          overflowY: "scroll",
        }}
      >
        <div
          className={`position-relative w-100 mb-2 mb-md-0`}
          style={{ height: "60px", backgroundColor: "#FAFAFA" }}
        >
          {/* TopBar */}
          <DashBoardTopbar />

          {/* end of top fixed */}
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashBoard;
