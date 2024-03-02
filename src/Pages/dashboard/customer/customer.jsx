import { useContext, useState } from "react";
import { AuthContext } from "../../../utils/context/auth";
import DashboardCard from "../../../Components/card/dashboardCards";
import { Box2, Edit2, Money, Money2, TickCircle } from "iconsax-react";
import CircularAvatar from "../../../Components/commen/circular_avatar";
import BudgetChart from "../../../Components/chart/budget_chart";
import CreatedProjectTable from "../../../Components/tables/created_project_table";
import HalfCircleProgress from "../../../Components/half_circle/half_circle_progress";
import ListTile from "../../../Components/commen/list_tile";

const CustomerDashBoard = () => {
  const { userState } = useContext(AuthContext);
  const [budgetChar, setBudgetChart] = useState([
    { title: "Jan", value: 0, label: "Spending" },
    { title: "Feb", value: 0, label: "Spending" },
    { title: "Mar", value: 0 },
    { title: "Apr", value: 0 },
    { title: "May", value: 100 },
    // ...
  ]);
  const [cardState, setCardState] = useState({
    projectCreated: 0,
    projectCompeleted: 0,
    investment: 0,
  });
  const [budget, setBudget] = useState({
    maxBudget: 0,
    minBudget: 0,
  });
  return (
    <div className={`d-flex dashboard-content`} style={{}}>
      <div
        className="d-flex
      flex-column
     gap-4
     px-md-3 
     px-1
     pb-3 pb-md-0
     left-side
    "
      >
        <div
          className={`d-flex 
          justify-content-center align-items-center 
          justify-content-sm-between flex-wrap gap-2 flex-sm-row flex-column `}
          style={{}}
        >
          <DashboardCard
            title={"Posted Project"}
            number={cardState.projectCreated}
            icon={<Edit2 size={25} color="blue" />}
          />
          <DashboardCard
            title={"Compeleted Project"}
            number={cardState.projectCompeleted}
            icon={<TickCircle size={25} />}
            background={"linear-gradient(to right,#09CA62,#24995A)"}
          />
          <DashboardCard
            title={"Investment"}
            number={cardState.investment}
            icon={<Money size={25} color="green" />}
            background={"linear-gradient(to right,#793FF5,#56349D)"}
          />
          {/* Budget Chart */}
        </div>
        <div className={`d-flex gap-2  flex-sm-row flex-column  `}>
          <div
            className={`col-sm-8 col bg-white-variant-4 p-2 rounded`}
            style={{ height: "300px" }}
          >
            <BudgetChart data={budgetChar} />
          </div>
          <div
            className={`col-sm-4 col bg-white-variant-4 rounded d-flex align-items-start flex-column p-2 gap-4 text-black-variant-1`}
            style={{ height: "100%" }}
          >
            <HalfCircleProgress
              percentage={
                cardState.projectCompeleted / cardState.projectCreated
              }
            />
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

        <CreatedProjectTable data={[]} />
      </div>

      {/* customer simple porfile */}
      <div
        className="d-none d-lg-flex flex-column align-items-center gap-2 text-black-variant-1 "
        style={{
          flexShrink: "50%",
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
            text={userState?.user?.firstName.slice(0, 2)}
            fontSize={2.5}
            bgcolor="#802cff"
            className={""}
            fontcolor={"text-white"}
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
              {budget.maxBudget}
              <span className="h5">rs</span>
            </h2>
          </div>
          <div className="col col d-flex flex-column justify-content-center">
            <span>Min Budget</span>
            <h2 className={`text-center font-weight-400`}>
              {budget.minBudget}
              <span className="h5">rs</span>
            </h2>
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
      <div>
        <ListTile
          title={"Project Created "}
          subtitle={"You have created new porject"}
          time={"20-20-12"}
          icon={<Box2 color="white" />}
        />
        <hr className="m-0" />
        <ListTile
          title={"Payment"}
          subtitle={"Payment done for project completion"}
          time={"30-20-12"}
          icon={<Money2 color="white" />}
        />
      </div>
    </div>
  );
}
