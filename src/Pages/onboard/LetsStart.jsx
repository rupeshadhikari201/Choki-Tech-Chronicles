import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/context/auth";
import "../../Css/onboarding/onboarding.css";
import ProgressIndicator from "./progressIndicator";
import { STATUS } from "../../utils/constants/status";
import selectstyle from "../../Css/comment/select.module.css";
import { useNavigate } from "react-router-dom";
import { commonPath } from "../../utils/constants/path";
const LetsStart = () => {
  const { state } = useContext(AuthContext);
  const [progressState, setProgressState] = useState([
    {
      status: STATUS.PENDING,
      label: "First",
    },
    {
      status: STATUS.DEFAULT,
      label: "About",
    },
    {
      status: STATUS.DEFAULT,
      label: "Finish",
    },
  ]);
  const pages = [
    {
      page: (onClick) => <UserPreference onClick={onClick} />,
    },
    {
      page: (onClick) => <UserExperiance onClick={onClick} />,
    },
    {
      page: (onClick) => <UserSomething onClick={onClick} />,
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    console.log(state);
    console.log(pages[currentPage]);
  }, []);
  const onClick = () => {
    setCurrentPage((c) => c + 1);
    let progress = progressState;
    progress[currentPage].status = STATUS.CHECKED;
    if (currentPage + 1 < pages.length)
      progress[currentPage + 1].status = STATUS.PENDING;
    setProgressState(progress);
  };
  const previousPage = () => {
    setCurrentPage((c) => c - 1);
    let progress = progressState;
    progress[currentPage - 1].status = STATUS.PENDING;
  };
  return (
    <div
      className="bg-light-green
  min-height-100vh 
  d-flex align-items-center 
  justify-content-center
  "
    >
      <div
        className="
        wrapper
        bg-white-variant-2
        p-4
        rounded
        
        "
      >
        <div
          className="
      d-flex flex-column
        align-items-center
      "
        >
          <h1 className="text-black-variant-1">
            Hello,
            <span className="text-green-secondary text-capitalize">
              {state.user?.firstName}
            </span>{" "}
          </h1>
          <h4
            className="text-md
        text-black-variant-2
        "
          >
            let&apos;s know more about you
          </h4>

          <ProgressIndicator
            numberOfProgress={progressState.length}
            progress={progressState}
          />

          {<div className="w-100">{pages[currentPage]?.page(onClick)}</div>}
        </div>
        {/* previous button */}
        {currentPage > 0 && (
          <button
            className="
          text-black-variant-1
          bg-transparent
          border-green-variant-3
          rounded
          p-1
          mt-4
          "
            style={{}}
            onClick={previousPage}
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

export default LetsStart;

const UserPreference = ({ onClick }) => {
  return (
    <>
      <button
        className="
        
         transparent
         text-black-variant-1
         border-primary-green
         mt-3
         mb-0
         text-md
         btn-custom
         "
        onClick={onClick}
      >
        I am here to hire
      </button>
      <button
        className="
         btn-custom
         transparent
         text-black-variant-1
         border-primary-green
         mt-3
         mb-4
         text-md
         "
        onClick={onClick}
      >
        Work as agent
      </button>
    </>
  );
};

const UserExperiance = ({ onClick }) => {
  return (
    <div className="text-black-variant-1">
      {/* What is your profession */}
      <div
        className="d-flex 
        mt-3
      flex-column 
      align-items-center"
      >
        <p className="text-center">What is your profession?</p>
        <select
          className={`${selectstyle.custom} ${selectstyle.max_width_500}
      p-2
      rounded
      border-green-primary
      border-green-variant-3
      text-black-variant-1
      bg-white-variant-2
      `}
        >
          <option className="">Select</option>
          <option className="Student">Student</option>
          <option className="teacher">teacher</option>
          <option className="other">other</option>
        </select>
      </div>
      {/* skills you have */}
      <div
        className="d-flex 
        mt-3
      flex-column 
      align-items-center"
      >
        <p className="text-center">Skills you have?</p>
        <select
          className={`${selectstyle.custom} ${selectstyle.max_width_500}
      p-2
      rounded
      border-green-primary
      border-green-variant-3
      text-black-variant-1
      bg-white-variant-2
      `}
        >
          <option className="">Select</option>
          <option className="Student">Design</option>
          <option className="teacher">Research</option>
          <option className="other">other</option>
        </select>
      </div>
      <button
        className="
          text-black-variant-1
          bg-transparent
          border-green-variant-3
          rounded
          d-block
          p-1
          mt-4
          ms-auto
          "
        style={{}}
        onClick={onClick}
      >
        Next
      </button>
    </div>
  );
};

const UserSomething = ({ onClick }) => {
  const naviagte = useNavigate();
  return (
    <div className="text-black-variant-1">
      <h2 className="text-center">Thank you for choosing us</h2>
      <button
        className="
          text-black-variant-1
          bg-transparent
          border-green-variant-3
          rounded
          d-block
          p-1
          mt-4
          mx-auto
          w-50
          "
        onClick={() => {
          onClick();
          naviagte(`/${commonPath}/dashboard`);
        }}
      >
        Finish
      </button>
    </div>
  );
};
