// import React from "react";
import { motion } from "framer-motion";
import { Star1 } from "iconsax-react";
import { MdArrowForward } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { heroImg } from "../../../utils/constants/image_constant.js";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  const iconSize = 18;
  const change = () => {
    navigate("./contact-us");
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
    <div className="hero d-flex ps-4 ps-md-0 flex-md-row flex-column">
      <motion.div className="mx-4" variants={heroVariant}>
        <div>
          <Star1 variant="Bold" color="gold" size={iconSize} />
          <Star1 variant="Bold" color="gold" size={iconSize} />
          <Star1 variant="Bold" color="gold" size={iconSize} />
          <Star1 variant="Bold" color="gold" size={iconSize} />
          <Star1 variant="Bold" color="gold" size={iconSize} />
        </div>
        <p className="text-black-variant-2">Trusted by clients</p>
        <motion.div
          variants={heroVariant}
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true }}
          className="hero-text
			 text-black-variant-1 mb-3"
        >
          Boost Your Business Growth with GIT
        </motion.div>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.4 },
          }}
          viewport={{ once: true }}
          className="typer-text
            text-black-variant-2 ps-1"
          style={{ minHeight: "50px" }}
        >
          Transform your business with GIT. Improve efficiency, deliver
          outstanding results, and{" "}
          <TypeAnimation
            sequence={[" unlock new", 500, "opportunities for growth", 500]}
            wrapper="span"
            speed={2}
            style={{
              fontSize: "1rem",
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
          viewport={{ once: true }}
          className="btn-wrapper d-flex flex-column flex-sm-row flex-md-row gap-4  align-items-center"
        >
          <div
            className="btn-green-v-1 text-white-variant-1 "
            onClick={() => change()}
          >
            <p>Get Started</p>
            <MdArrowForward size={30} />
          </div>
        </motion.div>
        {/*  */}
      </motion.div>
      <motion.div className="d-lg-block hero-img ">
        {/* <div className="hero-background">
              <img src={heroBackground} />
            </div> */}
        <img
          src={heroImg}
          alt="excited student"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
