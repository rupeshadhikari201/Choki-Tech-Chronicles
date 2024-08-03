import "./service.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Chart,
  CpuCharge,
  Flash,
  Graph,
  Hierarchy2,
  Monitor,
  OceanProtocol,
  Profile2User,
  Share,
  SmsTracking,
  Sun,
  Wallet,
} from "iconsax-react";
import img_office from "../../../../assets/images/office_3.jpg";
import img_office_2 from "../../../../assets/images/office_4.jpg";
import img_office_3 from "../../../../assets/images/office_5.jpg";
import CardLeftIcon from "../../../../components/card/card_2";
import ServiceCard from "../../../../components/card/card_3";
import { Feature1, Feature2 } from "./features";
const iconSize = 30;
const services = [
  {
    title: "Development",
    subtitle: `Crafting custom web solutions tailored to your needs, from websites to complex web applications, using the latest technologies for optimal performance and user experience.`,
    icon: <SmsTracking size={iconSize} />,
  },
  {
    title: "Monitoring",
    subtitle: `Providing real-time insights into your website's performance, uptime, and security to ensure it remains accessible, responsive, and secure, with proactive monitoring and timely issue resolution.`,
    icon: <Monitor size={iconSize} />,
  },
  {
    title: " Consulting on Tech Services",
    subtitle: `Offering expert guidance and advice on technology services, including web development, cloud computing, cybersecurity, and digital marketing, to help you make informed decisions and stay ahead of the competition.`,
    icon: <Graph size={iconSize} />,
  },
  // {
  //   title: "Easy Collaboration",
  //   subtitle: `Facilitating seamless collaboration between clients and freelancers, streamlining communication, project management, and feedback processes for efficient and productive workflows.`,
  //   icon: <People size={iconSize} />,
  // },
  // {
  //   title: "Detailed Analytics",
  //   subtitle: `Delivering comprehensive analytics and reporting on website traffic, user behavior, and performance metrics to gain actionable insights and optimize your online presence for maximum impact and results.`,
  //   icon: <Graph size={iconSize} />,
  // },
  // {
  //   title: "Automate Workflow",
  //   subtitle: ` our automated workflow system kicks into gear, facilitating seamless communication, task assignments, and milestone tracking. Clients can effortlessly monitor progress, provide feedback, and approve deliverables.`,
  //   icon: <Chart size={iconSize} />,
  // },
];
const overviews = [
  {
    title: "Global Communication",
    icon: <Share variant="Bold" size={iconSize} color="white" />,
    subtitle:
      "Enhance your business reach and collaboration with our seamless global communication solutions.",
  },
  {
    title: "Save Time & Money",
    icon: <Wallet variant="Bold" size={iconSize} color="white" />,
    subtitle:
      "Optimize your operations and reduce costs with our efficient, time-saving technologies.",
  },
  {
    title: "Scalable Solutions",
    icon: <Chart variant="Bold" size={iconSize} color="white" />,
    subtitle:
      "Grow your business with our scalable solutions that adapt to your evolving needs.",
  },
];

const Sevices = () => {
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
    <>
      {/* Card wrapper */}
      <div className="max-w-1200 mx-auto  gap-3 pt-100 pb-50 over-view-container">
        {overviews.map((overview, index) => (
          <CardLeftIcon
            key={index}
            icon={overview.icon}
            title={overview.title}
            subtitle={overview.subtitle}
            minWidth={300}
          />
        ))}
      </div>

      {/* new form */}
      <ServiceCard
        img={img_office}
        title={"Deliver value, not just products"}
        text={`build digital experiences people love to use. Learn how we use battle-tested processes to systematically design and develop software that solves problems, delights users, and optimizes businesses.
        `}
        direction="row"
        imgPosition="left"
        points={[
          {
            title: "User-Centric Digital Experiences",
            text: `
            Lovable digital experiences through user-centric design.`,
            icon: <Profile2User variant="Bold" size={iconSize} color="white" />,
          },
          {
            title: "Value-Driven Solutions",
            text: `
            Valuable solutions that solve problems and boost business.`,
            icon: <Flash variant="Bold" size={iconSize} color="white" />,
          },
        ]}
      />
      <ServiceCard
        img={img_office_2}
        title={"Go from idea to reality"}
        text={`Realize your vision with our comprehensive and professional approach with GIT team. Our passion for what we do drives us to excel. We are not just pixel-pushers but thinkers and innovators.`}
        direction="column"
        imgPosition="right"
        bgcolor={"bg-light-green"}
        points={[
          {
            title: "Idea Realization",
            text: "Our unique process takes your vision from concept to reality.",
            icon: <Sun variant="Bold" size={iconSize} color="white" />,
          },
          {
            title: "Passionate Innovator",
            text: "Not just designers, but thinkers and innovators driven by passion.",
            icon: (
              <OceanProtocol variant="Bold" size={iconSize} color="white" />
            ),
          },
        ]}
      />
      {/* GITServices */}
      <GITServices
        isInView={isInView}
        variant={variant}
        serviceRef={serviceRef}
      />
      <ServiceCard
        img={img_office_3}
        title={"Scale your business using our technology"}
        text={`Scale your business with our technology. Enhance efficiency, unlock growth potential, and reach new heights with our tailored solutions`}
        direction="column"
        imgPosition="left"
        bgcolor={"bg-light-green"}
        points={[
          {
            title: "Tech-Powered Growth",
            text: "Supercharge your expansion with our ingenious technology solutions.",
            icon: <CpuCharge variant="Bold" size={iconSize} color="white" />,
          },
          {
            title: "Efficiency Unleashed",
            text: "Streamline operations and unlock untapped potential through our intelligent tech.",
            icon: <Hierarchy2 variant="Bold" size={iconSize} color="white" />,
          },
        ]}
      />
      {/* Features */}
      <section
        className="service-section feature-section"
        style={{ position: "relative" }}
      >
        <section className="text-black-variant-1 mx-4 feature-section mx-auto">
          {/* Feature 1 */}
          <Feature1
            colabFeatureInView={colabFeatureInView}
            colabFeatureRef={colabFeatureRef}
            variantFeature={variantFeature}
          />
          {/* Feature 2 */}
          <Feature2 variantFeature={variantFeature} />
          {/* End of features */}
        </section>
      </section>
    </>
  );
};

export default Sevices;

const GITServices = ({ serviceRef, variant, isInView }) => {
  return (
    <div className="service-card-outer bg-green-v-1 pt-100 pb-100">
      <h1
        className="mx-auto max-width mb-4 text-white text-center"
        style={{ maxWidth: "500px" }}
      >
        Unlocking Growth with GIT Commitment
      </h1>
      <motion.section
        ref={serviceRef}
        variants={variant}
        initial={"hidden"}
        animate={isInView ? "show" : ""}
        className="mx-auto px-4 px-sm-2 service-card-wrapper  
  
  "
      >
        {services &&
          services.map((service, index) => (
            <motion.div
              variants={variant}
              key={index}
              whileHover={{
                scale: 1,
                transition: { duration: 0.3 },
              }}
              className="service-card  p-4 d-flex flex-column text-black-variant-1 bg-service-card position-relative"
            >
              <span className="service-card-cover" style={{}} />
              <div className=" mb-3 icon-wrapper text" style={{ zIndex: "10" }}>
                {service.icon}
              </div>
              <h4 className="font-weight-500 service-card-title mb-4 text">
                {service.title}
              </h4>
              <p
                className="text-black-variant-2 mb-0 text"
                style={{ letterSpacing: "0.4px", lineHeight: "24px" }}
              >
                {service.subtitle}
              </p>
            </motion.div>
          ))}
      </motion.section>
    </div>
  );
};
