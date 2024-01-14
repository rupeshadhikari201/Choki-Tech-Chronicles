import CircularBar from "../../../Components/commen/circular-bar";

const AgentDashBoard = () => {
  return (
    <div className="">
      <div
        className="d-flex
          flex-md-row
          flex-column
         gap-4
         px-3
        "
        style={{
          maxWidth: "1200px",
        }}
      >
        {/* Project Progress circularBar */}
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
        <Activity />
      </div>
    </div>
  );
};

export default AgentDashBoard;
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
      style={{
        minHeight: "300px",
      }}
    >
      <p>Activity</p>
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
