import { useContext } from "react";
import { AuthContext } from "../../../utils/context/auth";
import { Link } from "react-router-dom";
import DashboardCard from "../../../Components/card/dashboardCards";
import { Edit2, Money, TickCircle } from "iconsax-react";

const CustomerDashBoard = () => {
  const { userState } = useContext(AuthContext);

  return (
    <div className="">
      <div
        className="d-flex
      flex-column
     gap-4
     px-3
    "
        style={{
          maxWidth: "1200px",
        }}
      >
        {/* Greeting */}
        <h2 className="text-blue-variant-1 mb-0 text-capitalize font-weight-400">
          Hello {userState.user?.firstName}!
        </h2>
        <Link
          className={` bg-light-lime-secondary
          text-black-variant-2
          btn-custom-variant-3
        my-0
        ms-0
        w-auto
        text-xsm
        rounded
        `}
          style={{
            padding: "4px 10px",
          }}
        >
          New project
        </Link>

        {/*  */}
        <div
          className={`d-flex justify-content-center justify-content-sm-between flex-wrap gap-2 `}
          style={{ maxWidth: "900px" }}
        >
          <DashboardCard
            title={"Posted Project"}
            number={4}
            icon={<Edit2 size={25} color="blue" />}
          />
          <DashboardCard
            title={"Compeleted Project"}
            number={2}
            icon={<TickCircle size={25} />}
          />
          <DashboardCard
            title={"Investment"}
            number={300}
            icon={<Money size={25} color="green" />}
          />
        </div>
        {/* Activity */}
        <Activity />
        {/* Invitation */}
        <Invitation />
      </div>
    </div>
  );
};

export default CustomerDashBoard;
function Activity() {
  return (
    <div
      className="
    text-black-variant-2
    dashboard-activity
    bg-light-lime-secondary
    col
    p-2
    "
    >
      <h5 className={`font-weight-400`}>Activity</h5>
      <div>
        <p className="font-weight-bold m-0">Recent Activity</p>
        <div
          className="ps-2
          mb-2
          "
        >
          <p className="m-0">Project 4 finished</p>

          <p className="m-0">No recent activity</p>
        </div>
      </div>
    </div>
  );
}
function Invitation() {
  return (
    <div
      className="
text-black-variant-2
dashboard-activity
bg-light-lime-secondary
col
p-2
"
      style={{ maxWidth: "400px" }}
    >
      <div>
        <h5 className={`font-weight-400`}>Invitations</h5>
      </div>
      <p className={`text-center`}>No Invitation So far</p>
    </div>
  );
}
