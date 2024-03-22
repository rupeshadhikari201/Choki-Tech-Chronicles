import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import "../../Css/home/testimonial.css";
import "../../Css/commen/carousel.css";
import { useState } from "react";

import "pure-react-carousel/dist/react-carousel.es.css";
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const milestone = [
    {
      number: "200",
      title: "Total Users",
    },
    {
      title: "Total Fundraise",
      number: "20K",
    },
    {
      title: "Project Completed",
      number: "300+",
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: "Steve Harrington",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg",
    },
    {
      id: 1,
      name: "Steve Harrington",
      text: " dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://images.pexels.com/photos/17120644/pexels-photo-17120644/free-photo-of-a-black-and-white-dog-sitting-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      name: "Yared",
      text: " dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://www.livemint.com/lm-img/img/2024/03/05/600x338/Richest-Billionaires-List-0_1707613033886_1709616207464.jpg",
    },
    {
      id: 1,
      name: "Jimmy",
      text: " dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://t4.ftcdn.net/jpg/03/61/34/27/360_F_361342769_X26dTcofZpukhMGYWFcn1wJNABEFtNLH.jpg",
    },
    // Add more testimonials as needed
  ];

  const nextSlide = () => {
    const testimonialContainer = document.querySelector(
      ".testimonial-container"
    );
    const n = testimonialContainer.childElementCount;
    const width = testimonialContainer.scrollWidth / n;
    console.log(width);
    // testimonialContainer
    testimonialContainer.scrollLeft += width;
  };

  const prevSlide = () => {
    const testimonialContainer = document.querySelector(
      ".testimonial-container"
    );
    const n = testimonialContainer.childElementCount;
    const width = testimonialContainer.scrollWidth / n;
    console.log(width);
    // testimonialContainer
    testimonialContainer.scrollLeft -= width;
  };
  return (
    <section
      className="testimonial-section d-flex flex-column justify-content-center pb-4"
      style={{ paddingTop: "50px" }}
    >
      <div
        className="p-2 pt-1 mb-4 mx-auto
      "
        style={{ maxWidth: "500px" }}
      >
        <h1
          className="text-center
        text-black-variant-1
      
        "
        >
          100+ Happy customers
        </h1>
        <p
          className="
        text-black-variant-3
        mx-auto
        "
        >
          Don't take our word see what customer says about us
        </p>
      </div>
      {/*  */}
      <div
        className="testimonial-container 
       d-flex gap-1
      "
        style={{ overflowX: "scroll" }}
      >
        {testimonials.map((item, index) => (
          <div
            className="d-flex col  gap-4 justify-content-start justify-content-sm-around  justify-content-lg-between align-items-center"
            key={index}
            style={{ minWidth: "100%" }}
          >
            <div className="card-2  text-black-variant-1">
              <div className="rounded-circle card-2-img">
                <img src={item.image} alt="" />
              </div>
              <p>{item.text}</p>
              <h5 className="mb-0">{item.name}</h5>
            </div>

            <div className="rounded-circle img-circle">
              <img src={item.image} alt={item.name} />
            </div>
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
      <div
        className="text-black-variant-2 mx-auto w-100 mt-4"
        style={{ maxWidth: "900px" }}
      >
        <h1 className="mb-4 mx-auto text-center" style={{ maxWidth: "900px" }}>
          Our journey, milestone, and commitment to excellence
        </h1>
        <p className="text-center">Trusted growth proven success</p>
        <div className="d-flex justify-content-between px-3">
          {milestone.map((item, index) => (
            <div key={index}>
              <h3>{item.number}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
