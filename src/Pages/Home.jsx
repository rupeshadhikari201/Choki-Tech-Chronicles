import "../Css/Home.css";
import heroImg from "../assets/hero_img.png";
import heroBackground from "../assets/hero_background.png";
import Navbar from "../Components/Navbar.jsx";
import { MdArrowForward } from "react-icons/md";
const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="hero d-flex ">
          <div>
            <p
              className="hero-text
			 text-center 
			
			"
            >
              Woriried About your Education Chors? Your are at the right place
            </p>
            <div className="btn-custom-white ">
              <p>Let&apos;s Start</p>
              <MdArrowForward size={30} />
            </div>
          </div>
          <div className="d-none d-lg-block hero-img ">
            <div className="hero-background">
              <img src={heroBackground} />
            </div>
            <img
              src={heroImg}
              alt="excited student"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div>
          <div className="btn-custom ">
            <p>Let&apos;s Start</p>
            <MdArrowForward size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
