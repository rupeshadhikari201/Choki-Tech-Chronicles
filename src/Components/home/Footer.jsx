import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import "../../Css/home/footer.css";
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
          <h2 className="">Logo GIT</h2>
          <div>
            <p className="mb-0">Address:</p>
            <p>Thempu, Bhutan</p>
          </div>
          <div>
            <p className="mb-0">Contact:</p>
            <p className="mb-0">phone (+9898978798)</p>
            <p>email gokap@gmail.com</p>
          </div>
        </div>
        <div className="footer-nav col font-weight-400">
          <h3 className=" font-weight-400">Navigation</h3>
          <ul>
            <li>
              <Link to={"#home"}>Home</Link>
            </li>
            <li>
              <Link to={"#About-us"}>About us</Link>
            </li>
            <li>
              <Link to={"#Services"}>Services</Link>
            </li>
            <li>
              <Link to={"#Our-Team"}>Our Team</Link>
            </li>
            <li>
              <Link to={"#Address"}>Address</Link>
            </li>
          </ul>
        </div>
        <div className="footer-get-in-touch col">
          <h3 className=" mb-4 font-weight-400">Getintouch</h3>
          <div
            className="d-flex gap-3 
          gap-4 icons"
          >
            <Link to={""} target="_blank">
              <FaLinkedin size={30} />
            </Link>
            <Link to={""} target="_blank">
              <FaInstagram size={30} />
            </Link>
            <Link to={""} target="_blank">
              <FaFacebook size={30} />
            </Link>
            <Link to={""} target="_blank">
              <FaYoutube size={30} />
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
