import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const TeamCard = ({ name, position, description, img }) => {
  return (
    <div className="card-3">
      <div className="card-3-img mb-4">
        <img
          src={img}
          alt="team-member"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </div>
      <div className="card-3-body">
        <h5 className="text-black-variant-1">{name}</h5>
        <h6
          className="mb-3
        text-black-variant-1
        "
        >
          {position}
        </h6>
        <p className="text-black-variant-2">{description}</p>
      </div>
      <div className="card-3-icon-wrapper d-flex justify-content-around text-black-variant-1">
        <FaGithub className="icon" size={30} />
        <FaLinkedin className="icon" size={30} />
        <FaInstagram className="icon" size={30} />
      </div>
    </div>
  );
};

export default TeamCard;
