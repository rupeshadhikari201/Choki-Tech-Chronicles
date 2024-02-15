import { useContext, useState } from "react";
import { AuthContext } from "../../utils/context/auth";
import { Notification, SearchNormal1 } from "iconsax-react";
import CircularAvatar from "../../Components/commen/circular_avatar";
import { Link } from "react-router-dom";
import { commonPath } from "../../utils/constants/path";
import { motion } from "framer-motion";
import { ThemeContext } from "../../App";
const DashBoardTopbar = ({ setShowNav, showNav }) => {
  const { userState } = useContext(AuthContext);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className=" p-2
            d-flex align-items-start position-fixed dash-board-top-nav
          gap-2  flex-column
          bg-white-variant-3
"
    >
      <div
        className={`d-flex align-items-center gap-4 justify-content-between w-100`}
      >
        {/* Wrapping menu hamberger and name */}
        <div
          className={`d-flex gap-1 justify-content-between align-items-center`}
        >
          <div
            className={`d-flex flex-column cursor-pointer 
                  dashboard-menu-bar p-2 
                  gap-1 d-lg-none `}
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
            {/* Greeting */}
            <h4 className="text-blue-variant-1 mb-0 text-capitalize font-weight-400">
              {userState.user?.firstName}'s
            </h4>

            <h6
              className="
  text-black-variant-2
  mb-0
  "
            >
              DashBoard
            </h6>
          </div>
        </div>
        {/* ICONS */}
        <div className={`d-flex gap-2 me-4 col`}>
          {/* Search */}
          <div
            className={`
              col
              d-flex
              justify-content-end
              align-items-center
              rounded
              gap-1

              `}
            style={{
              minWidth: "40px",
              overflow: "hidden",
            }}
          >
            {showSearchbar && (
              <motion.div
                initial={{
                  x: "100px",
                }}
                animate={{
                  x: "0px",
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                }}
                className={`dashboard-top-search col  d-none
            d-md-flex`}
              >
                <input
                  className={`bg-gray-secondary boarder rounded p-2
            text-black-variant-1
            w-100
            `}
                  type="text"
                  placeholder="search"
                />
              </motion.div>
            )}
            <SearchNormal1
              size={18}
              color={isDark ? "white" : "#333"}
              className={`
      cursor-pointer
      `}
              onClick={() => setShowSearchbar(!showSearchbar)}
            />
          </div>
          {/* Notification */}
          <div
            className={`
icon-wrapper-primary
bg-gray-secondary
d-flex
justify-content-center
align-items-center
rounded
position-relative
dash-board-top-notification
ms-auto
ms-md-0
`}
            style={{
              minWidth: "40px",
            }}
          >
            <Notification
              size={18}
              className={`cursor-pointer`}
              onClick={() => {}}
              color={isDark ? "white" : "#333"}
            />

            <div
              className={`position-absolute
       rounded
        notification-wrapper
      `}
              style={{
                top: "100%",
                width: "200px",
                right: "-30px",
              }}
            >
              <div
                className={`
         bg-white
         border
         mt-3
         p-2
         `}
              >
                <p>Notification</p>
                <hr />
                <div
                  className={`
        d-flex justify-content-center
        `}
                >
                  <p className={`text-gray-secondary`}>No nofication yet</p>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          {/* CIRCULAR AVATAR */}
          <div
            className={`position-relative
    dash-board-top-profile
    `}
          >
            <CircularAvatar
              size={40}
              text="he"
              bgcolor={"bg-gray-secondary"}
              className={"cursor-pointer"}
            />
            <div
              className={`position-absolute
         rounded
        profile-wrapper
      `}
              style={{
                top: "100%",
                width: "200px",
                right: "-30px",
              }}
            >
              <div
                className={`
         bg-white
         border
         mt-3
         p-2
         `}
              >
                <p>{userState?.user?.firstName}</p>
                <hr />
                <div
                  className={`
        d-flex 
        flex-column
        `}
                >
                  <Link
                    className={`text-gray-secondary p-1`}
                    to={`${commonPath}/profile`}
                  >
                    Profile
                  </Link>
                  <Link className={`text-gray-secondary p-1`}>Logout</Link>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/* Search */}
      <div
        className={`
w-100
d-flex
justify-content-end
align-items-center
rounded
gap-1
pe-2
d-flex
d-md-none
`}
        style={{
          minWidth: "40px",
          overflow: "hidden",
        }}
      >
        {showSearchbar && (
          <motion.div
            initial={{
              x: "100px",
            }}
            animate={{
              x: "0px",
              scale: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className={`dashboard-top-search col`}
          >
            <input
              className={`bg-gray-secondary boarder rounded p-2
            text-black-variant-1
            w-100
            `}
              type="text"
              placeholder="search"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DashBoardTopbar;
