import { CreativeCommons } from "iconsax-react";

const DashboardCard = ({ title, number, icon }) => {
  return (
    <div
      className={`d-flex border-green-variant-3 flex-column justify-content-between p-2 pb-1 
      text-blue-variant-1
      rounded col dashboard-card`}
      style={{ minWidth: "200px", height: "120px" }}
    >
      {/* Title */}
      <h5 className={`font-weight-400 text-md `}>{title}</h5>
      {/* Number and Icon */}
      <div className={`d-flex justify-content-between align-items-center`}>
        <h2 className={`text-xxlg font-weight-400 text-blue-variant-1`}>
          {number}
        </h2>{" "}
        {icon}
      </div>
    </div>
  );
};

export default DashboardCard;
