import { useContext } from "react";
import { AuthContext } from "../../utils/context/auth";
import { FaBars } from "react-icons/fa6";

const DashBoardRight = ({ showNav, setShowNav }) => {
  const { state } = useContext(AuthContext);
  return (
    <div
      className="
  dashboard-right
  col
  d-flex 
  flex-column
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
        {!showNav && (
          <div onClick={() => setShowNav(!showNav)}>
            <FaBars
              className="
            text-black-variant-1
            cursor-pointer
            "
              size={20}
            />
          </div>
        )}
        <div>
          <h2 className="text-black-variant-1 mb-0">{state.user?.firstName}</h2>
          <h4
            className="mt-1
          text-black-variant-2
          "
          >
            Profession
          </h4>
        </div>
      </div>

      {/*  */}

      <div className="px-3">
        <div
          className="d-flex
          flex-md-row
          flex-column
         gap-4
        "
          style={{
            maxWidth: "1200px",
          }}
        >
          {/* circularBar */}
          <div
            className="
      circular-progress-wrapper
      bg-light-lime-secondary
      col
      text-black-variant-1
      "
            style={{
              maxWidth: "300px",
              height: "300px",
            }}
          >
            <p>Circular bar</p>
          </div>
          {/* Activity */}
          <div
            className="
        text-black-variant-2
        dashboard-activity
        bg-light-lime-secondary
        col
        
        "
            style={{
              minHeight: "300px",
            }}
          >
            <p>Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardRight;
