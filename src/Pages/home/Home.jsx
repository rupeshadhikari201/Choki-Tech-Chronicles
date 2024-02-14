import "../../Css/home/home.css";
import "../../Css/commen/button.css";
import heroImg from "../../assets/hero_img.png";
import heroBackground from "../../assets/hero_background.png";
import Navbar from "../../Components/navbar/Navbar.jsx";
import { MdArrowForward } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Services from "../../Components/home/Services.jsx";
import Testimonial from "../../Components/home/Testimonial.jsx";
import FrequentAsked from "../../Components/home/FrequentAsked.jsx";
import OurTeam from "../../Components/home/OurTeam.jsx";
import Footer from "../../Components/home/Footer.jsx";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const change = () => {
    navigate("./signup");
  };
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="hero d-flex ">
          <div className="mx-4">
            <p
              className="hero-text
			 text-center 
			 text-black-variant-1
			"
            >
              Looking for a place where you can make Education easy
            </p>
            <div
              className="typer-text
            text-black-variant-2
            "
            >
              <TypeAnimation
                sequence={[
                  "Worried ",
                  1000,
                  "Worried About your",
                  1000,
                  "Worried About your Eduction",
                  1000,
                  "Your are",
                  1000,
                  "Your are at the",
                  1000,
                  "Your are at the right place",
                  1000,
                ]}
                wrapper="span"
                speed={1}
                style={{
                  fontSize: "2em",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </div>
            <div className="btn-custom-white " onClick={() => change()}>
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
        {/* <div>
          <div className="btn-custom ">
            <p>Let&apos;s Start</p>
            <MdArrowForward size={30} />
          </div>
        </div> */}
      </div>
      <Services />
      <Testimonial />
      <FrequentAsked />
      <OurTeam />
      <Footer />
    </>
  );
};

export default Home;
