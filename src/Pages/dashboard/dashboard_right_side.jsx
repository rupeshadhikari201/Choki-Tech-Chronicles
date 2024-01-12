import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth";
import { FaBars } from "react-icons/fa6";
import CircularBar from "../../Components/commen/circular-bar";

const DashBoardRight = ({ showNav, setShowNav }) => {
  const { state } = useContext(AuthContext);
  return (
    <div
      className="
  dashboard-right
  col
  d-flex 
  flex-column
  "
      style={{
        transition: "flex 0.3s ease-in-out",
      }}
    >
      {/* Top Bar */}

      <div
        className="bg-light-lime-secondary p-2 mb-4 d-flex 
      align-items-center
      gap-4
      "
      >
        {!showNav && (
          <div onClick={() => setShowNav(!showNav)}>
            <FaBars
              className="
            text-black-variant-1
            cursor-pointer
            "
              size={20}
            />
          </div>
        )}
        <div>
          <h2 className="text-black-variant-1 mb-0">
            Hello {state.user?.firstName}!
          </h2>
          <h6
            className="mt-1
          text-black-variant-2
          mb-0
          "
          >
            Designer
          </h6>
        </div>
      </div>

      {/*  */}

      <div className="px-3">
        <div
          className="d-flex
          flex-md-row
          flex-column
         gap-4
        "
          style={{
            maxWidth: "1200px",
          }}
        >
          {/* circularBar */}
          <div
            className="
      circular-progress-wrapper
      p-2
      bg-light-lime-secondary
      col
      text-black-variant-1
      "
            style={{
              maxWidth: "300px",
              height: "300px",
            }}
          >
            <p>Project Progress</p>
            <CircularBar />
            <ul>
              <li>Completed 10%</li>
              <li>Remaining 10%</li>
            </ul>
          </div>
          {/* Activity */}
          <div
            className="
        text-black-variant-2
        dashboard-activity
        bg-light-lime-secondary
        col
        p-2
        "
            style={{
              minHeight: "300px",
            }}
          >
            <p>Activity</p>
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
};
function Activity() {
  return (
    <div>
      <div>
        <p className="font-weight-bold">Recent Activity</p>
        <div
          className="ps-2
        mb-2
        "
        >
          <p className="m-0">Project 4 finished</p>

          <p className="m-0">No recent activity</p>
        </div>
      </div>
      <div>
        <h5>Invitations</h5>
      </div>
    </div>
  );
}
export default DashBoardRight;
