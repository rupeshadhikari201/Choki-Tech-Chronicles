// import React from "react";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { ButtonFlex } from "../../../components/button/button";
const ProductHero = () => {
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
    <div className="product-hero d-flex ps-4 ps-md-0 flex-md-row flex-column">
      <motion.div className="px-2 max-w-1200 mx-auto" variants={heroVariant}>
        <motion.div
          className="product-hero-text
			 text-black-variant-1 mb-3 text-center mt-4"
        >
          GIT Freelancing Platform Link & Earn
        </motion.div>
        <motion.div
          className="product-hero-subtitle mx-auto
            text-black-variant-2 ps-1 text-center"
          style={{ minHeight: "50px" }}
        >
          Seamlessly connect, collaborate, and create. Your gateway to freelance
          success awaits
        </motion.div>
        {/* Buttons */}
        <motion.div className="d-flex flex-column flex-sm-row flex-md-row gap-4  justify-content-center pb-3">
          <ButtonFlex
            onClick={() => {
              window.open(
                "https://freelance.gokapinnotech.com/signup",
                "_blank"
              );
            }}
            radius={10}
            type={"button"}
            maxWidth={"150px"}
            className={"py-3"}
            outline={false}
          >
            <p className="mb-0">Get Started</p>
          </ButtonFlex>
        </motion.div>
        {/*  */}
      </motion.div>
    </div>
  );
};

export default ProductHero;
