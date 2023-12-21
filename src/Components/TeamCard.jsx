import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const TeamCard = ({ name, position, description, img }) => {
  return (
    <div className="card-3">
      <div className="card-3-img mb-4">
        <img src={img} alt="team-member" />
      </div>
      <div className="card-3-body">
        <h1>{name}</h1>
        <h6 className="mb-3">{position}</h6>
        <p>{description}</p>
      </div>
      <div className="card-3-icon-wrapper d-flex justify-content-around">
        <FaGithub className="icon" size={30} />
        <FaLinkedin className="icon" size={30} />
        <FaInstagram className="icon" size={30} />
      </div>
    </div>
  );
};

export default TeamCard;
