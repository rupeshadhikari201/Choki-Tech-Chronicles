import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-section px-3">
      <div
        className="footer-wrapper
        d-flex justify-content-around
    flex-md-row
    flex-row
    flex-wrap
    align-items-center
    align-items-md-start
    gap-3
    "
      >
        <div className="col">
          <h2 className="">
            <span
              style={{
                display: "inline-block",
                height: "60px",
                width: "60px",
                color: "white",
              }}
            >
              <img
                src="/assets/logo_1.jpeg"
                alt="logo"
                width={"100%"}
                height={"100%"}
                className="rounded-circle"
              />
            </span>{" "}
          </h2>

          <div>
            <p className="mb-0">Address:</p>
            <p>Thimphu, Bhutan</p>
          </div>
          <div>
            <p className="mb-0">Contact:</p>
            <p className="mb-0">phone: +97517570958</p>
            <p>email: GIT@gokapinnotech.com</p>
          </div>
        </div>
        <div className="footer-nav col font-weight-400">
          <h4 className=" font-weight-400">Navigation</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about-us"}>About</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-get-in-touch col">
          <h4 className=" font-weight-400">Get in touch</h4>
          <form action="" className="mb-4">
            <div className="d-flex subscribe py-1 px-2 justify-content-between">
              <input
                className="custom-input"
                type="text"
                placeholder="Email address"
                required
              />
              <button className="btn-custom " style={{ borderRadius: "30px" }}>
                Subscribe
              </button>
            </div>
          </form>
          <div
            className="d-flex gap-3 
          gap-4 icons"
          >
            <Link
              to={"https://www.linkedin.com/company/gokapinnotech"}
              target="_blank"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link to={""} target="_blank">
              <FaInstagram size={30} />
            </Link>
            <Link
              to={
                "https://www.facebook.com/profile.php?id=61559970702748&mibextid=ZbWKwL"
              }
              target="_blank"
            >
              <FaFacebook size={30} />
            </Link>
            <Link to={""} target="_blank">
              <FaYoutube size={30} />
            </Link>
            <Link to={"https://wa.me/+917908047540/"} target="_blank">
              <FaWhatsapp size={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-wrapper">
        <hr />
        <div className="pb-4 d-flex justify-content-between flex-column flex-sm-row gap-2">
          <p className="mb-0">2024 all right reserved</p>
          <p className="mb-0">Designed by GIT </p>
          <div className="d-flex gap-3">
            <p className="mb-0">privacy policy</p>
            <p className="mb-0">term and conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
