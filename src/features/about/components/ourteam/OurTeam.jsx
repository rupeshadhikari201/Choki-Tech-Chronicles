import TeamCard from "./card/TeamCard";
import "./ourteam.css";
import yared from "../../../../assets/images/team_member/yared.jpg";
const OurTeam = () => {
  return (
    <section className="our-team px-3 pb-3 " id="team">
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
      {/* <div
        className="mx-auto  text-black-variant-1 mb-4 position-relative d-flex align-items-center"
        style={{ maxWidth: "1200px", minHeight: "80vh" }}
      >
        <div className="ms-auto">
          <div
            className=" ceo-img-wrapper "
            style={{ height: "400px", width: "400px", overflow: "hidden" }}
          >
            <img
              src={"assets/ceo_22.jpeg"}
              className="w-100 h-100"
              style={{
                objectFit: "cover",
                filter: "grayscale(0)",
                objectPosition: "top",
              }}
            />
          </div>
          <h4 className="text-uppercase font-weight-400 mt-2">
            {" "}
            Choki dorji, CEO
          </h4>
        </div>
        <div className="mx-auto position-absolute team-quote-wrapper ">
          <div className="team-quote">
            <QuoteUp size={40} />
            <h1 className="font-weight-400">
              Innovation thrives at the intersection of tech and collaboration.
            </h1>
            <QuoteDown size={40} />
          </div>
          <h4
            className="text-uppercase mt-3 font-weight-400"
            style={{ textShadow: "2px 1px rgb(46, 46, 46)" }}
          >
            {" "}
            Choki dorji, CEO
          </h4>
        </div>
      </div> */}

      <div className="team-card-holder d-flex justify-content-start gap-4 mt-3">
        <TeamCard
          name={"Yared"}
          position={"Designer and Developer"}
          description={`GokapInnoTech thrives on delivering cutting-edge software solutions, exceeding expectations every time.`}
          img={yared}
        />
        <TeamCard
          name={"Rupesh"}
          position={"Designer and Developer"}
          description={`Our platform for connecting clients with freelancers is a game-changer.`}
          img={
            "https://images.pexels.com/photos/18573858/pexels-photo-18573858/free-photo-of-bus-near-building-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <TeamCard
          name={"Sonam"}
          position={"Social Media Manager"}
          description={`GIT platform is designed to effortlessly link clients with freelancers, promoting effective collaboration and productivity.`}
          img={"/assets/sonam.jpeg"}
        />
      </div>
    </section>
  );
};

export default OurTeam;
