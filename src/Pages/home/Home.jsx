import "../../Css/home/home.css";
import "../../Css/commen/button.css";
// import heroImg from "../../assets/hero_img2.png";
import Navbar from "../../Components/navbar/Navbar.jsx";
import { MdArrowForward } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Services from "../../Components/home/Services.jsx";
import Testimonial from "../../Components/home/Testimonial.jsx";
import FrequentAsked from "../../Components/home/FrequentAsked.jsx";
import OurTeam from "../../Components/home/OurTeam.jsx";
import Footer from "../../Components/home/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const navigate = useNavigate();
  const change = () => {
    navigate("./signup");
  };

  const heroVariant = {
    hide: {
      x: -300,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <>
      <section className="home">
        <Navbar />
        <div className="color-box-1"></div>
        <div className="color-box-2"></div>
        <div className="hero d-flex ps-4">
          <motion.div className="mx-4" variants={heroVariant}>
            <motion.div
              variants={heroVariant}
              initial="hide"
              whileInView={"show"}
              className="hero-text
			 text-black-variant-1
       mb-3
			"
            >
              <motion.span variants={heroVariant}>Combine</motion.span>{" "}
              <motion.span variants={heroVariant} style={{ color: "green" }}>
                Skills Build{" "}
              </motion.span>
              <motion.span variants={heroVariant}>Tech.</motion.span>
            </motion.div>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.4 },
              }}
              className="typer-text
            text-black-variant-1
            ps-1
            "
              style={{ minHeight: "50px" }}
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
                  fontSize: "1.2rem",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </motion.div>
            {/* Buttons */}
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              }}
              className="btn-wrapper d-flex flex-column flex-sm-row flex-md-row gap-4  align-items-center"
            >
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
            </motion.div>
            {/*  */}
          </motion.div>
          <motion.div
            animate={{
              y: 40,
              x: 20,
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
            className="d-none d-lg-block hero-img "
          >
            {/* <div className="hero-background">
              <img src={heroBackground} />
            </div> */}
            <img
              src={"hero_img2.png"}
              alt="excited student"
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
        </div>
      </section>
      <Services />
      {/*  
      <FrequentAsked />
      */}
      <Testimonial />
      <OurTeam />
      <Footer />
    </>
  );
};

export default Home;
