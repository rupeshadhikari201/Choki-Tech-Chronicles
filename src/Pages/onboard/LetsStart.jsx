import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/context/auth";
import "../../Css/onboarding/onboarding.css";
import ProgressIndicator from "./progressIndicator";
import { STATUS } from "../../utils/constants/status";
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
        d-flex flex-column
        align-items-center
        "
      >
        <h1 className="text-black-variant-1">Hello, {state.user?.firstName}</h1>
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
    </div>
  );
};

export default LetsStart;

const UserPreference = ({ onClick }) => {
  return (
    <>
      <button
        className="
         btn-custom
         transparent
         text-black-variant-1
         border-primary-green
         mt-3
         mb-0
         text-md
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
      >
        Work as agent
      </button>
    </>
  );
};

const UserExperiance = ({ onClick }) => {
  return <div className="text-black-variant-1">User Experiance</div>;
};

const UserSomething = ({ onClick }) => {
  return <div>User Something</div>;
};
