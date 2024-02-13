import { Link } from "react-router-dom";
import { commonPath } from "../../utils/constants/path";
import { MdLogout, MdSupportAgent } from "react-icons/md";
import { Box, Home, Money, User } from "iconsax-react";
import { useContext, useState } from "react";
import { SideNavContext } from "../../utils/context/sidenav";
import { ACTION_TYPE } from "../../reducer/action/action";

const SideBar = () => {
  const { sideNavState, navDispatch } = useContext(SideNavContext);
  const [activeLink, setActiveLink] = useState("home");
  const navList = [
    {
      title: "DashBoard",
      child: [
        {
          title: "home",
          to: `${commonPath}/dashboard/`,
          icon: (color) => <Home color={color} />,
        },
      ],
    },
    {
      title: "Projects",
      child: [
        {
          title: "All Projects",
          to: `${commonPath}/projects`,
          icon: (color) => <Box color={color} />,
        },
      ],
    },
    {
      title: "Account",
      child: [
        {
          title: "Profile",
          to: `${commonPath}/profile`,
          icon: (color) => <User color={color} />,
        },
        {
          title: "Invoice",
          to: `${commonPath}/dashboard/`,
          icon: (color) => <Money color={color} />,
        },
      ],
    },
    {
      title: "Help Line",
      child: [
        {
          title: "support",
          to: `${commonPath}/dashboard/`,
          icon: (color) => <MdSupportAgent color={color} size={22} />,
        },
      ],
    },
  ];
  return (
    <div
      className={`
position-relative

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
  //bg-linear-green-variant-1
  text-black-variant-1
  text-center
  h-100
  w-100
`}
        style={{
          maxWidth: "200px",
          transition: "all 0.3s ease-in",
          left: 0,
          overflowY: "scroll",
        }}
      >
        <h2
          className={`font-weight-400
    text-uppercase p-1
    pb-3
    border-bottom-primary
    `}
          style={{
            borderBottom: "1px solid rgb(77,92,108)",
            color: "#43AB7B",
          }}
        >
          GIT
        </h2>
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
              <li
                key={index}
                className="mb-3 pb-3"
                style={{
                  borderBottom: "1px solid rgb(77,92,108)",
                }}
              >
                <div className="px-2 ps-2">
                  <p
                    className="text-gray-secondary font-weight-300 text-start mb-0 pb-3"
                    style={{
                      color: "rgb(200,200,200)",
                    }}
                  >
                    {link.title}
                  </p>
                  {link.child.map((item, index) => (
                    <div
                      key={index}
                      className={`d-flex align-items-center ps-1`}
                      style={{
                        borderLeft:
                          activeLink === item.title
                            ? "5px solid #43AB7B"
                            : "none",
                      }}
                    >
                      {item.icon("#43AB7B")}
                      <Link
                        key={index}
                        className={`text-start text-white 
                font-weight-300
                `}
                        to={`/${item.to}`}
                        onClick={() => {
                          setActiveLink(item.title);
                          navDispatch({
                            type: ACTION_TYPE.CHANGE_SIDE_NAV,
                            payload: item.title,
                          });
                        }}
                      >
                        {item.title}
                      </Link>
                    </div>
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
  transparent
  text-black-variant-2
  "
            onClick={() => {}}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
