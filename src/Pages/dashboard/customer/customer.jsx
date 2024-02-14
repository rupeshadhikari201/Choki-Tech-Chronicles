import { useContext } from "react";
import { AuthContext } from "../../../utils/context/auth";
import DashboardCard from "../../../Components/card/dashboardCards";
import { Edit2, Money, TickCircle } from "iconsax-react";
import CircularAvatar from "../../../Components/commen/circular_avatar";
import BudgetChart from "../../../Components/chart/budget_chart";
import CreatedProjectTable from "../../../Components/tables/created_project_table";
import HalfCircleProgress from "../../../Components/half_circle/half_circle_progress";

const CustomerDashBoard = () => {
  const { userState } = useContext(AuthContext);

  return (
    <div className={`d-flex dashboard-content`}>
      <div
        className="d-flex
      flex-column
     gap-4
     px-3
     pb-3 pb-md-0
     col
     left-side
    "
      >
        <div
          className={`d-flex justify-content-center justify-content-sm-between flex-wrap gap-2 `}
          style={{}}
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
            background={"linear-gradient(to right,#09CA62,#24995A)"}
          />
          <DashboardCard
            title={"Investment"}
            number={300}
            icon={<Money size={25} color="green" />}
            background={"linear-gradient(to right,#793FF5,#56349D)"}
          />
          {/* Budget Chart */}
        </div>
        <div className={`d-flex gap-2 `}>
          <div
            className={`col-8 bg-white-variant-4 p-2 rounded`}
            style={{ height: "300px" }}
          >
            <BudgetChart />
          </div>
          <div
            className={`col-4 bg-white-variant-4 rounded d-flex align-items-start flex-column p-2 gap-4 text-black-variant-1`}
            style={{ height: "100%" }}
          >
            <HalfCircleProgress />
            <div className="d-flex align-items-center gap-3">
              {" "}
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#4caf50",
                  display: "inline-block",
                }}
              />{" "}
              Finished
            </div>
            <div className="d-flex align-items-center gap-3">
              {" "}
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#e0e0e0",
                  display: "inline-block",
                }}
              />{" "}
              Pending
            </div>
          </div>
        </div>
        {/* Table */}
        <CreatedProjectTable />
      </div>
      {/* customer simple porfile */}
      <div
        className="d-none d-lg-flex flex-column align-items-center gap-2 text-black-variant-1 "
        style={{
          flexGrow: "1",
        }}
      >
        <div
          className={`d-flex flex-column gap-2 align-items-center rounded bg-white-variant-4 pt-2`}
          style={{
            width: "100%",
            height: "200px",
          }}
        >
          <CircularAvatar
            size={130}
            text="YA"
            fontSize={2.5}
            bgcolor="bg-light-violet"
            className={""}
          />
          <span>{userState.user?.email}</span>
        </div>

        <div
          className={`width-100 d-flex flex-column bg-white-variant-4 p-3`}
          style={{
            width: "100%",
            height: "200px",
          }}
        >
          <div className="col d-flex flex-column justify-content-center">
            <span>Max Budget</span>
            <h2 className={`text-center font-weight-400`}>
              2000<span className="h5">Rs</span>
            </h2>
          </div>
          <div className="col col d-flex flex-column justify-content-center">
            <span>Min Budget</span>
            <h2 className={`text-center font-weight-400`}>500</h2>
          </div>
        </div>
        {/* Activity */}
        <Activity />
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
    w-100
    p-2
    bg-white-variant-4
    "
    >
      <h5 className={`font-weight-400`}>Activity</h5>
      <div></div>
    </div>
  );
}
