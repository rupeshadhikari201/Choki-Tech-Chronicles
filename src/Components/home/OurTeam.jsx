import TeamCard from "../card/TeamCard";
import "../../Css/home/ourteam.css";

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
      <div className="team-card-holder d-flex justify-content-start gap-4">
        <TeamCard
          name={"Choki Dorji"}
          position={"Founder and CEO of"}
          description={` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.`}
          img={
            "https://images.pexels.com/photos/19554104/pexels-photo-19554104/free-photo-of-a-man-taking-a-photo-of-the-sunset-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
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
