import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { MdMenu, MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import GITLogo from "../../components/logo";
const Navbar = () => {
  const [popMenu, setPopMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink(1);
    else if (path === "/products") setActiveLink(2);
    else if (path === "/about-us") setActiveLink(3);
    else if (path === "/blogs") setActiveLink(4);
    else if (path === "/contact-us") setActiveLink(5);
  }, [location.pathname]);
  const showMenu = () => {
    setPopMenu(!popMenu);
  };
  return (
    <div className="nav-container border-light-bottom ">
      <div className="max-width mx-auto px-1 px-md-4 d-flex  align-items-center h-100">
        <GITLogo />
        <div className="center ms-auto">
          <ul
            className={`list-unstyled d-flex align-items-center m-0 font-weight-400 ${
              popMenu ? "active" : ""
            } text-black-variant-1`}
          >
            <li className={`nav-link-c ${activeLink === 1 ? "active" : ""}`}>
              <Link
                to="/"
                className=""
                style={{}}
                onClick={() => {
                  showMenu();
                  setActiveLink(1);
                }}
              >
                Home
              </Link>
            </li>
            <li className={`nav-link-c ${activeLink === 2 ? "active" : ""}`}>
              <Link
                to="/products"
                className=""
                style={{}}
                onClick={() => {
                  showMenu();
                  setActiveLink(2);
                }}
              >
                Products
              </Link>
            </li>

            <li className={`nav-link-c ${activeLink === 3 ? " active" : ""}`}>
              <Link
                to={"/about-us"}
                className=""
                style={{}}
                onClick={() => {
                  showMenu();
                  setActiveLink(3);
                }}
              >
                About
              </Link>
            </li>
            <li
              className={`nav-link-c ${
                activeLink === 4 ? " active" : ""
              } blogs`}
            >
              <Link
                to="/blogs"
                className=""
                style={{}}
                onClick={() => {
                  showMenu();
                  setActiveLink(4);
                }}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="menu-bar text-black-variant-1"
          onClick={() => showMenu()}
        >
          {popMenu ? <MdClose size={30} /> : <MdMenu size={30} />}
        </div>
        <div
          className={`d-lg-flex gap align-items-center d-none ms-2 nav-link-c ${
            activeLink === 5 ? "active" : ""
          }`}
        >
          <Link
            to={"/contact-us"}
            className="btn-green-outline-1 link
        text-black-variant-1
        "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
