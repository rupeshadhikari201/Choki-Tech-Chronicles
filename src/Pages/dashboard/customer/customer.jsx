const CustomerDashBoard = () => {
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
        {/* Greeting */}
        <div>Hello there</div>
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
