import { FaCheck } from "react-icons/fa6";
import { STATUS } from "../../utils/constants/status";

const CircularCheck = ({ status, bgColor, checkColor, label }) => {
  if (status === STATUS.CHECKED)
    return (
      <div
        className="d-flex flex-column
      align-items-center
      "
      >
        <div
          className={`circular-default 
                border-green-variant-1
                d-flex 
                align-items-center
                justify-content-center
                bg-green-primary
                `}
        >
          <FaCheck color={checkColor} size={20} className="icon-check" />
        </div>
        <label className="text-black-variant-2 text-xsm">{label}</label>
      </div>
    );
  return (
    <div className="d-flex flex-column align-items-center">
      <div
        className={`circular-default 
     ${status === STATUS.PENDING ? "bg-gray" : ""} 
     border-green-variant-1
     
     `}
      ></div>
      <label className="text-black-variant-2 text-xsm">{label}</label>
    </div>
  );
};

export default CircularCheck;
