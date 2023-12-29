import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import "../../Css/home/footer.css";

const Footer = () => {
  return (
    <section
      className="footer-section
    d-flex justify-content-around
    flex-md-row
    flex-column
    align-items-center
    align-items-md-start
    gap-3
    position-relative
    "
    >
      <div></div>
      <div className="col">
        <h1 className="text-center" style={{ fontSize: "60px" }}>
          Logo
        </h1>
      </div>
      <div className="footer-nav col">
        <h1>Navigation</h1>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Our Team</li>
          <li>Address</li>
        </ul>
      </div>
      <div className="footer-get-in-touch col">
        <h1 className="text-center mb-4">Getintouch</h1>
        <div
          className="d-flex gap-3 border 
        justify-content-around icons"
        >
          <FaLinkedin size={30} />
          <FaInstagram size={30} />
          <FaFacebook size={30} />
          <FaYoutube size={30} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
