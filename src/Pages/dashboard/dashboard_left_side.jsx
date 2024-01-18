import { Link } from "react-router-dom";
import { commonPath } from "../../utils/constants/path";
import { MdLogout } from "react-icons/md";

const DashBoardLeft = ({ setShowNav, showNav }) => {
  const closeWindow = () => {
    setShowNav(!showNav);
  };
  const navList = [
    {
      title: "DashBoard",
      to: `${commonPath}/dashboard/`,
      child: [
        {
          title: "home",
          to: `${commonPath}/dashboard/`,
        },
      ],
    },
    {
      title: "Projects",
      to: `${commonPath}/dashboard/`,
      child: [
        {
          title: "All Projects",
          to: `${commonPath}/projects`,
        },
      ],
    },
    {
      title: "Account",
      to: `${commonPath}/dashboard/`,
      child: [
        {
          title: "Profile",
          to: `${commonPath}/profile`,
        },
        {
          title: "Invoice",
          to: `${commonPath}/dashboard/`,
        },
      ],
    },
    {
      title: "Help Line",
      to: `${commonPath}/dashboard/`,
      child: [
        {
          title: "support",
          to: `${commonPath}/dashboard/`,
        },
      ],
    },
  ];
  return (
    <div
      className={`${showNav ? "margin-right-?" : ""}
    position-relative
    margin-right-300
    `}
      style={{
        transition: "all 0.3s linear",
        left: 0,
        zIndex: "100",
      }}
    >
      <div
        className={`
      dashboard-left
      position-fixed
      bg-linear-green-variant-1
      text-black-variant-1
      text-center
      h-100
      w-100
      
  ${showNav ? "translate-x" : ""}
 
  `}
        style={{
          transition: "all 0.3s ease-in",
          left: 0,
          overflowY: "scroll",
        }}
      >
        <h3
          className={`font-weight-400
        text-uppercase p-1
        pb-3
        border-bottom-primary
        `}
        >
          choki Ino Tech
        </h3>
        <div
          className={`
        d-flex
      flex-column
      align-items-start
      h-100
      
      `}
        >
          <ul className="nav-list">
            {navList.map((link, index) => (
              <li key={index} className="border-bottom-primary mb-3 pb-3">
                <div className="px-2 ps-4">
                  <p className="text-gray-secondary font-weight-var-300 text-start mb-0">
                    {link.title}
                  </p>
                  {link.child.map((item, index) => (
                    <Link
                      key={index}
                      className={`text-start 
                    font-weight-var-normal
                    `}
                      to={item.to}
                      onClick={() => {
                        setShowNav(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div
            className={`
          hover-nav
          mt-3
          pb-3
          text-start
          text-gray-secondary
          border-bottom-primary
          w-100
          cursor-pointer
          `}
          >
            <span className={`px-3`}>
              <MdLogout /> Log out{" "}
            </span>
          </div>
          <button
            className="
      btn-custom-variant-3
      p-1
      text-md
      border-green-variant-3
      transparent
      text-black-variant-2
      "
            onClick={closeWindow}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLeft;
