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
      <section
        className="home"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <Navbar />
        <div className="hero d-flex ">
          <div className="mx-4">
            <p
              className="hero-text
			 text-black-variant-1
       mb-3
			"
            >
              Merge to Ignite Ideas and Transform Dreams into Reality
            </p>
            <div
              className="typer-text
            text-black-variant-2
            "
            >
              {/* Unlocking Potential: Where Clients and Freelancers Coalesce for Collective Success */}
              <TypeAnimation
                sequence={[
                  "Unlocking Potential ",
                  500,
                  "Unlocking Potential Where Clients",
                  500,
                  "Unlocking Potential Where Clients and Freelancers",
                  500,
                  "Unlocking Potential Where Clients and Freelancers Coalesce",
                  500,
                  "Unlocking Potential Where Clients and Freelancers Coalesce for Collective",
                  500,
                  "Unlocking Potential Where Clients and Freelancers Coalesce for Collective Success",
                  500,
                ]}
                wrapper="span"
                speed={2}
                style={{
                  fontSize: "1.5em",
                  display: "inline-block",
                }}
                repeat={0}
              />
            </div>
            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row flex-md-row gap-4 justify-content-center align-items-center">
              <div
                className="btn-custom-white text-white-variant-2 "
                onClick={() => change()}
              >
                <p>Get Started</p>
                <MdArrowForward size={30} />
              </div>
              <div
                className="btn-custom-white-variant-1 text-white-variant-2"
                onClick={() => change()}
              >
                <p>Learn More</p>
              </div>
            </div>
            {/*  */}
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
      </section>
      <Services />
      {/*  
      <FrequentAsked />
      */}
      <Testimonial />
      <OurTeam />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
