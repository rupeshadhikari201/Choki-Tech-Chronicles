import { TickCircle } from "iconsax-react";
import OurTeam from "./components/ourteam/OurTeam.jsx";
import "./about.css";
import { posted } from "../../repository/blogs.js";
import { BlogCard } from "../blog/blog.jsx";
import { motion } from "framer-motion";
import CustomHeading from "../../components/heading/heading.jsx";
const AboutUs = () => {
  const pointList = [
    "Integration Capabilities",
    "Performance Optimization",
    "User-friendly Interface",
    "Analytics and Reporting",
  ];
  return (
    <div className="section-about-wrapper text-black-variant-1">
      <CustomHeading
        page={"About"}
        title={" Transforming Businesses and Fostering growth"}
      />

      <div className="section-about  ">
        <div className="pt-50 pb-50 text-black-variant-1 px-2 max-w-1200  mx-auto">
          <h3 className="text-black-variant-1">
            Achieving excellence together
          </h3>
          <p className="text-black-variant-3" style={{ maxWidth: "600px" }}>
            Recognized for excellence and innovation, our achievements at GIT
            reflect our dedication to delivering exceptional services and
            exceeding customer expectations
          </p>
        </div>
        {/* image and texts  */}
        <div className="bg-light-green pt-50 pb-50">
          <div className="about-card bg-light-green px-2 max-w-1200  mx-auto">
            <div
              className="image-wrapper position-relative"
              style={{ height: "70vh" }}
            >
              {/* imag */}
              <motion.span
                className="position-absolute d-block"
                style={{
                  height: "100%",
                  background: "black",
                  top: 0,
                  left: 0,
                  width: "100%",
                }}
                initial={{
                  maxWidth: "100%",
                }}
                whileInView={{
                  maxWidth: "0",
                }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <img src="/about_1.png" alt="" />
            </div>
            <div className="content-wrapper text-black-variant-1">
              <h3>Our Value</h3>
              <p className="text-black-variant-3">
                At GIT, our values are the cornerstone of everything we do. We
                are committed to delivering excellence, innovation, and
                unparalleled results to our clients.
              </p>
              <p>
                <TickCircle /> Innovative Solution
              </p>
              <p>
                <TickCircle /> Transparent Communcation
              </p>
              <p>
                <TickCircle /> Collaborative Team
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Mission and vision */}
        <div className="max-w-1200 mx-auto pt-50 pb-50 d-flex justify-content-md-between flex-wrap gap-4 px-2   align-items-center justify-content-center">
          <div className="p-4 border card-m-v">
            {/* titile */}
            <h6>Our Mission</h6>
            <h4 className="my-2">Tech Excellence, Customers Happiness</h4>
            <p className="mt-3">
              GIT is dedicated to transforming lives through technology
              innovation, providing top-notch services, and fostering learning
              opportunities for individuals and businesses.
            </p>
          </div>
          <div className="p-4 border card-m-v">
            {/* titile */}
            <h6>Our Vision</h6>
            <h4 className="my-2">Transforming lives through Tech Innovation</h4>
            <p>
              To make a lasting impact on the technology sector by offering
              innovative services, facilitating education, and expanding our
              influence through the establishment of larger institutions.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="about-card pt-50 pb-50 px-2 max-w-1200  mx-auto">
          <div className="content-wrapper order-md-1 order-2">
            <h3>Optimize efficiency with innovative software solution</h3>
            <p className="text-black-variant-3">
              Transform your workflow and maximize productivity with Gokap's
              innovative software solutions. Designed to optimize efficiency
              across all aspects of your business, from streamlined processes to
              enhanced collaboration and data management. Drive growth, and
              achieve success in today's competitive landscape
            </p>
            {/* pointer */}
            <div className="d-flex flex-column gap-4">
              {pointList.map((point, index) => (
                <span key={index}>
                  <TickCircle /> {point}
                </span>
              ))}
            </div>
          </div>

          <div className="image-wrapper position-relative order-md-2 order-1">
            {/* imag */}
            <motion.span
              className="position-absolute d-block"
              style={{
                height: "100%",
                background: "black",
                top: 0,
                left: 0,
                width: "100%",
              }}
              initial={{
                maxWidth: "100%",
              }}
              whileInView={{
                maxWidth: "0",
                offset: "200px",
              }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <img src="/about_2.png" alt="" />
          </div>
        </div>
      </div>
      {/* Meat our Team */}
      <OurTeam />
      {/* Article and resourse */}
      <div className="max-width mx-auto pt-50 pb-50">
        <h1 className="text-center mb-4">Articles & Resource</h1>

        <div className="d-flex gap-4 flex-wrap px-md-4 px-2 justify-content-center justify-content-md-start">
          {posted &&
            posted.map((posts, index) => (
              <BlogCard
                key={index}
                title={posts.title}
                category={posts.category}
                writter={posts.writer}
                date={posts.date}
                subtitle={posts.subtitle}
                img={posts.img}
              />
            ))}
        </div>
      </div>
      {/* FAQ */}
    </div>
  );
};

export default AboutUs;
