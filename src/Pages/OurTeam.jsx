import "../Css/ourteam.css";

const OurTeam = () => {
  return (
    <section className="our-team">
      <h1 className="text-center">Meet Our Team</h1>
      <p className="text-center">
        Get to Know talented individuals behind our company
      </p>
      <div className="team-card-holder">
        <div className="card-3">
          <div>
            <img src={""} alt="team-member" />
          </div>
          <div>
            <h1>Choki Dorgi</h1>
            <h5>Founder and CEO</h5>
          </div>
          <div className="cont"></div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
