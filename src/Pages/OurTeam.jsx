import "../Css/ourteam.css";

const OurTeam = () => {
  return (
    <section className="our-team px-3 pb-3">
      <h1 className="text-center">Meet Our Team</h1>
      <p className="text-center">
        Get to Know talented individuals behind our company
      </p>
      <div className="team-card-holder d-flex justify-content-center">
        <div className="card-3">
          <div className="card-3-img mb-4">
            <img
              src={
                "https://images.pexels.com/photos/19554104/pexels-photo-19554104/free-photo-of-a-man-taking-a-photo-of-the-sunset-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="team-member"
            />
          </div>
          <div className="card-3-body">
            <h1>Choki Dorgi</h1>
            <h6 className="mb-3">Founder and CEO</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="cont"></div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
