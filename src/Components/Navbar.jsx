import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import "../App.css";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [popMenu, setPopMenu] = useState(false);

  const showMenu = () => {
    setPopMenu(!popMenu);
    console.log("clicked");
  };
  return (
    <Container className="nav-container ">
      <div className="logo" style={{ position: "relative" }}>
        <p className="fw-bolder logo ">
          <span
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            LOGO
          </span>
        </p>
      </div>
      <div className="center nav-list">
        <ul
          className={`list-unstyled d-flex align-items-center m-0 ${
            popMenu ? "active " : ""
          }`}
        >
          <li className=" text-decoration-none">
            <Link
              to="/"
              className="text-decoration-none"
              style={{}}
              onClick={() => showMenu()}
            >
              Home
            </Link>
          </li>
          <li className="c">
            <Link
              to="/services"
              className="text-decoration-none"
              style={{}}
              onClick={() => showMenu()}
            >
              Services
            </Link>
          </li>
          <li className="c">
            <Link
              to="/products"
              className="text-decoration-none"
              style={{}}
              onClick={() => showMenu()}
            >
              Products
            </Link>
          </li>
          <li className="c">
            <Link
              to="/team"
              className="text-decoration-none"
              style={{}}
              onClick={() => showMenu()}
            >
              Team
            </Link>
          </li>
          <li className="c">
            <Link
              to="/blogs"
              className="text-decoration-none"
              style={{}}
              onClick={() => showMenu()}
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu-bar " onClick={() => showMenu()}>
        {popMenu ? <MdClose size={30} /> : <MdMenu size={30} />}
      </div>
      <div className="cta d-lg-flex gap login-btn-wrapper d-none ">
        <button className="buttonlightgreen ">Login</button>
        <button className="buttongreen">Sign Up</button>
      </div>
    </Container>
  );
};

export default Navbar;
