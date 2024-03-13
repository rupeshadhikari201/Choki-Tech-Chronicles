import TeamCard from "../card/TeamCard";
import "../../Css/home/ourteam.css";
import { QuoteDown, QuoteUp } from "iconsax-react";

const OurTeam = () => {
  return (
    <section className="our-team px-3 pb-3">
      <h1
        className="text-center
      text-black-variant-1
      "
      >
        Meet Our Team
      </h1>
      <p
        className="text-center
      text-black-variant-2
      "
      >
        Get to Know talented individuals behind our company
      </p>
      <div
        className="mx-auto  text-black-variant-1 mb-4 position-relative d-flex align-items-center"
        style={{ maxWidth: "1200px", minHeight: "80vh" }}
      >
        <div
          className="ms-auto rounded-circle"
          style={{ height: "400px", width: "400px", overflow: "hidden" }}
        >
          <img
            src={"assets/ceo.jpeg"}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              filter: "grayscale(0)",
              objectPosition: "right",
            }}
          />
        </div>
        <div
          className="mx-auto position-absolute "
          style={{
            maxWidth: "1000px",
            alignSelf: "center",
            top: "20%",
            left: "5%",
          }}
        >
          <div className="">
            <QuoteUp size={40} />
            <h1 className="font-weight-400" style={{ fontSize: "4rem" }}>
              Innovation thrives at the intersection of tech and collaboration.
            </h1>
            <QuoteDown size={40} />
          </div>
          <h4 className="text-uppercase"> Choki dorji, CEO</h4>
        </div>
      </div>

      <div className="team-card-holder d-flex justify-content-start gap-4 mt-3">
        <TeamCard
          name={"Rupesh"}
          position={"Designer and Developer"}
          description={` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.`}
          img={
            "https://images.pexels.com/photos/7957285/pexels-photo-7957285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <TeamCard
          name={"Sonam"}
          position={"Social Media Manager"}
          description={` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `}
          img={
            "https://images.pexels.com/photos/18573858/pexels-photo-18573858/free-photo-of-bus-near-building-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <TeamCard
          name={"Yared"}
          position={"Designer and Developer"}
          description={` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `}
          img={""}
        />
      </div>
    </section>
  );
};

export default OurTeam;
