import "../../Css/home/service.css";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useInsertionEffect, useRef } from "react";
import {
  Graph,
  Message,
  Monitor,
  People,
  SmsTracking,
  TickCircle,
  UserTag,
} from "iconsax-react";
const Sevices = () => {
  const item = [
    {
      title: "Development",
      subtitle: `Crafting custom web solutions tailored to your needs, from websites to complex web applications, using the latest technologies for optimal performance and user experience.`,
      icon: <SmsTracking />,
    },
    {
      title: "Monitoring",
      subtitle: `Providing real-time insights into your website's performance, uptime, and security to ensure it remains accessible, responsive, and secure, with proactive monitoring and timely issue resolution.`,
      icon: <Monitor />,
    },
    {
      title: " Consulting on Tech Services",
      subtitle: `Offering expert guidance and advice on technology services, including web development, cloud computing, cybersecurity, and digital marketing, to help you make informed decisions and stay ahead of the competition.`,
      icon: <Graph />,
    },
    {
      title: "Easy Collaboration",
      subtitle: `Facilitating seamless collaboration between clients and freelancers, streamlining communication, project management, and feedback processes for efficient and productive workflows.`,
      icon: <People />,
    },
    {
      title: "Detailed Analytics",
      subtitle: `Delivering comprehensive analytics and reporting on website traffic, user behavior, and performance metrics to gain actionable insights and optimize your online presence for maximum impact and results.`,
      icon: <Graph />,
    },
  ];
  const serviceRef = useRef();
  const colabFeatureRef = useRef();
  const isInView = useInView(serviceRef, { once: true });
  const colabFeatureInView = useInView(colabFeatureRef, {
    once: true,
    margin: "-100px",
  });
  const variant = {
    show: {
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
    hidden: {
      y: 50,
    },
  };
  const variantFeature = {
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
    },
  };
  return (
    <div
      className="service-section pb-4 pb-md-5 pt-3"
      style={{ position: "relative" }}
    >
      <div className="px-4">
        <h1 className="text-center p-3 text-black-variant-1">Our Services</h1>
      </div>

      <motion.section
        ref={serviceRef}
        variants={variant}
        initial={"hidden"}
        animate={isInView ? "show" : ""}
        className="d-flex mx-auto px-4 px-sm-2 mt-4 gap-4 service-card-wrapper flex-column flex-md-row"
      >
        {item &&
          item.map((section, index) => (
            <motion.div
              variants={variant}
              key={index}
              className="rounded service-card  p-2 px-4 d-flex flex-column text-black-variant-1"
            >
              <div className="mt-3 mb-3 icon-wrapper">{section.icon}</div>
              <h5 className="font-weight-500">{section.title}</h5>
              <div className="text-black-variant-3">{section.subtitle}</div>
            </motion.div>
          ))}
      </motion.section>
      {/*  */}
      {/* Features */}
      <section
        className=" text-black-variant-1 mx-4 feature-section mx-auto "
        style={{ marginTop: "100px" }}
      >
        <h5 className="ps-4">Features</h5>

        {/* Feature1 ^ */}
        <div>
          <motion.div
            ref={colabFeatureRef}
            variants={variantFeature}
            initial="hidden"
            animate={colabFeatureInView ? "show" : ""}
            className="d-flex align-items-center gap-4 flex-column flex-md-row px-4 px-md-2"
          >
            <motion.div variants={variantFeature} className="col-12 col-md-6">
              <motion.div
                variants={variantFeature}
                style={{ maxWidth: "500px" }}
              >
                <h1 className="font-weight-500" style={{}}>
                  Collaboration for large Team
                </h1>
                <p className="text-black-variant-3">
                  Our collaboration platform provides secure access control,
                  real-time communication, and efficient task management,
                  enhancing productivity and teamwork for large teams.
                </p>
              </motion.div>
              <motion.div variants={variantFeature}>
                <motion.div
                  variants={variantFeature}
                  className="mb-3 d-flex gap-2 p-4 align-items-center rounded feature-list-wrapper"
                >
                  <People />{" "}
                  <p className="mb-0">
                    Perfect for individual and larget Teams
                  </p>
                </motion.div>
                <motion.div
                  variants={variantFeature}
                  className="mb-3 d-flex gap-2 p-4 align-items-center rounded feature-list-wrapper"
                >
                  <Message /> <p className="mb-0">Easy to Use Communication</p>
                </motion.div>
                <motion.div
                  variants={variantFeature}
                  className="mb-3 d-flex gap-2 p-4  align-items-center rounded feature-list-wrapper"
                >
                  <UserTag /> <p className="mb-0">Rapid Support</p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={variantFeature}
              className="col"
              style={{ height: "400px", overflow: "hidden" }}
            >
              <img
                src="assets/dash-board.png"
                className="w-100"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </motion.div>
          {/* Feature 2 */}
          <div className="" style={{ marginTop: "100px" }}>
            <div className="d-flex align-items-center gap-4 flex-column flex-md-row px-4 px-md-2">
              <div
                className="col order-2 order-md-0"
                style={{ height: "300px", overflow: "hidden" }}
              >
                <img
                  src="assets/dash-board.png"
                  className="w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <motion.div variants={variantFeature} className="col">
                <motion.div
                  variants={variantFeature}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h1 className="font-weight-500" style={{}}>
                    Detail analytics
                  </h1>
                  <p className="text-black-variant-3">
                    Our analytics dashboard delivers customizable visual
                    insights, real-time data tracking, and actionable metrics,
                    empowering informed decision-making and continuous
                    improvement.
                  </p>
                </motion.div>
                <motion.div
                  variants={variantFeature}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="mb-1 d-flex gap-2 p-4 py-3 align-items-center border-0 rounded feature-list-wrapper">
                    <TickCircle />{" "}
                    <p className="mb-0">
                      Customizable visual insights for informed decision-making.
                    </p>
                  </div>
                  <div className="mb-1 d-flex gap-2 p-4 py-3 align-items-center border-0 rounded feature-list-wrapper">
                    <TickCircle />{" "}
                    <p className="mb-0">
                      Real-time data tracking for timely responses.
                    </p>
                  </div>
                  <div className="mb-3 d-flex gap-2 p-4 py-3 align-items-center border-0 rounded feature-list-wrapper">
                    <TickCircle />{" "}
                    <p className="mb-0">
                      Actionable metrics drive continuous improvement.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* End of features */}
      </section>
    </div>
  );
};

export default Sevices;
