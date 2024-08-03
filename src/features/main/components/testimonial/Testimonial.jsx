import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import "./testimonial.css";
import { useState } from "react";

import "pure-react-carousel/dist/react-carousel.es.css";
import { FaQuoteLeft } from "react-icons/fa6";
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const milestone = [
    {
      number: "100+",
      title: "Total Users",
    },
    {
      title: "Total Fundraise",
      number: "20K",
    },
    {
      title: "Project Completed",
      number: "100+",
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: "Vince alce",
      text: "Highly recommend GokapInnoTech for their comprehensive services. I'm incredibly grateful for this platform and the opportunities it has provided me as a freelancer..",
      image: "/assets/json_img.jpeg",
      title: "Freelancer",
    },
    {
      id: 1,
      name: "Elisha Eboh",
      text: "GokapInnoTech's platform for connecting clients with freelancers is seamless and efficient. They helped us find the perfect talent for our project.",
      image: "/assets/elisha.jpeg",
      title: "Founder and CEO of MOI",
    },
    {
      id: 1,
      name: "Jay Son Lozada",
      text: "I'm impressed by GokapInnoTech's UI design expertise. They transformed our ideas into visually stunning and user-friendly interfaces",
      image: "/assets/vience.jpeg",
      title: "Software Developer",
    },
    // {
    //   id: 1,
    //   name: "Jimmy",
    //   text: "GokapInnoTech exceeded my expectations with their software development services. Their attention to detail and innovative solutions truly set them apart.",
    //   image:
    //     "https://t4.ftcdn.net/jpg/03/61/34/27/360_F_361342769_X26dTcofZpukhMGYWFcn1wJNABEFtNLH.jpg",
    //   title: "BB CEO",
    // },
    // Add more testimonials as needed
  ];

  const nextSlide = () => {
    const testimonialContainer = document.querySelector(
      ".testimonial-container"
    );
    const n = testimonialContainer.childElementCount;
    const width = testimonialContainer.scrollWidth / n;
    // testimonialContainer
    testimonialContainer.scrollLeft += width;
  };

  const prevSlide = () => {
    const testimonialContainer = document.querySelector(
      ".testimonial-container"
    );
    const n = testimonialContainer.childElementCount;
    const width = testimonialContainer.scrollWidth / n;
    // testimonialContainer
    testimonialContainer.scrollLeft -= width;
  };
  return (
    <>
      <section
        className="testimonial-section d-flex flex-column justify-content-center pb-4
       position-relative bg-white-variant-2
      "
        style={{ paddingTop: "50px" }}
      >
        <div
          className="p-2 pt-1 mb-4 mx-auto position-relative"
          style={{ maxWidth: "500px", zIndex: 10 }}
        >
          <h1
            className="text-center
        text-black-variant-1"
          >
            100+ <span style={{ color: "green" }}>Happy</span> customers
          </h1>
          <p
            className="
        text-black-variant-3
        mx-auto 
        "
            style={{ zIndex: 20 }}
          >
            Don't take our word see what customer says about us
          </p>
        </div>
        {/*  */}
        <div
          className="testimonial-container d-flex gap-4 position-relative"
          style={{ overflowX: "scroll" }}
        >
          {testimonials.map((item, index) => (
            <div
              className="review d-flex gap-4 justify-content-start justify-content-sm-around  justify-content-lg-between align-items-center"
              key={index}
            >
              <div className="card-2  text-black-variant-1 bg-service-card ">
                <FaQuoteLeft size={30} style={{ color: "green" }} />
                <p>{item.text}</p>
                {/* name and image */}
                <div className="d-flex gap-2 align-items-center justify-content-start mt-4">
                  <div className="rounded-circle card-2-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div>
                    <h5 className="mb-0" style={{ color: "green" }}>
                      {item.name}
                    </h5>
                    <p className="mb-0">{item.title}</p>
                  </div>
                </div>
              </div>
              {/* 
              <div className="rounded-circle img-circle">
                <img src={item.image} alt={item.name} />
              </div> */}
            </div>
          ))}
        </div>
        <div className="" style={{ width: "500px" }}></div>
        {/* Add more items as needed */}

        <div className="text-black-variant-2 d-flex justify-content-center gap-4 mt-4 mb-4">
          <ArrowLeft2 onClick={prevSlide} className="cursor-pointer" />
          <ArrowRight2 onClick={nextSlide} className="cursor-pointer" />
        </div>
        <div style={{ maxHeight: "500px", overflow: "hidden" }}></div>
        {/*  */}
      </section>
      {/* mile stone */}
      <div className="milestone-section pt-50 pb-50 bg-light-green ">
        <div className="milestone-wrapper max-width bg-light-green  text-black-variant-1 mx-auto w-100 ">
          <h1
            className="mb-4 mx-auto text-center"
            style={{ maxWidth: "900px" }}
          >
            Our journey, <span style={{ color: "green" }}>milestone</span>, and{" "}
            <span style={{ color: "green" }}>commitment</span> to excellence
          </h1>
          <p className="text-center">Trusted growth proven success</p>
          <div className="  px-3 milestone-list">
            {milestone.map((item, index) => (
              <div key={index} className="pt-4 pb-4">
                <h2>{item.number}</h2>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
