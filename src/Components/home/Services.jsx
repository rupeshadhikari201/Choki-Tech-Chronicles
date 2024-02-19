import Cards from "../card/Card.jsx";
import "../../Css/home/service.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const Sevices = () => {
  const item = [
    {
      title: "service1",
    },
    {
      title: "service2",
    },
  ];
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });
  return (
    <div
      className="service-section pb-4 pb-md-5 pt-3"
      style={{ position: "relative" }}
      ref={ref}
    >
      {/* <div className="d-flex justify-content-center align-items-center">
        <h1 className="text-center p-3 text-black-variant-1">Our Services</h1>
         <div className="d-none d-md-block">
          <img alt="research" src={research} />
        </div> 
      </div> */}
      <div className="px-4" style={{ position: "sticky", top: 0, left: "0" }}>
        <h1 className="text-center p-3 text-black-variant-1">Our Services</h1>
        <motion.div
          style={{ scaleX: scaleX, height: "10px", backgroundColor: "white" }}
          className=""
        ></motion.div>
      </div>
      <SingleService />
      <SingleService />
    </div>
  );
};

export default Sevices;

const SingleService = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section
      className={`text-black-variant-1 d-flex justify-content-center align-items-center gap-4`}
      style={{
        scrollSnapAlign: "start",
        height: "100vh",
      }}
    >
      <motion.div
        style={{
          maxWidth: "500px",
          height: "50%",
        }}
        ref={ref}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
          src={`https://thumbs.dreamstime.com/b/digital-transformation-technology-strategy-ideas-adoption-business-age-enhancing-global-capabilities-215266548.jpg`}
          alt="img"
        />
      </motion.div>
      <motion.div
        style={{
          maxWidth: "500px",
          y: y,
        }}
        className={`d-flex flex-column gap-3`}
      >
        <h4 style={{ fontSize: "3rem" }}>Development</h4>
        Developing website for search and find what you are looking for solution
        for cutting edge tech
      </motion.div>
    </section>
  );
};
