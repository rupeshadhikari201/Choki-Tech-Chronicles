import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth";
import { FaBars } from "react-icons/fa6";
import CustomerDashBoard from "./customer/customer";

const DashBoardRight = ({ showNav, setShowNav }) => {
  const { state } = useContext(AuthContext);
  return (
    <div
      className="
  dashboard-right
  d-flex
  col 
  flex-column
  text-black-variant-1
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
        <div
          className={`d-flex flex-column cursor-pointer dashboard-menu-bar  gap-1`}
          onClick={() => setShowNav(!showNav)}
        >
          <span
            style={{
              width: "20px",
              height: "2px",
              transform: showNav ? "rotate(45deg)" : "",
            }}
            className={`bg-black-variant-1 rounded`}
          />
          <span
            style={{
              width: "20px",
              height: "2px",
              visibility: showNav ? "hidden" : "visible",
            }}
            className={`bg-black-variant-1 rounded`}
          />
          <span
            style={{
              width: "20px",
              height: "2px",
              transform: showNav ? "rotate(-45deg)" : "",
            }}
            className={`bg-black-variant-1 rounded`}
          />
        </div>
        {/* {!showNav && (
          <div onClick={() => setShowNav(!showNav)}>
            <FaBars
              className="
            text-black-variant-1
            cursor-pointer
            "
              size={20}
            />
          </div>
        )} */}
        <div>
          <h2 className="text-black-variant-1 mb-0 text-capitalize font-weight-400">
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
      <div>
        <CustomerDashBoard />
      </div>
    </div>
  );
};

export default DashBoardRight;
