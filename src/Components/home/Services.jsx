import Cards from "../card/Card.jsx";
import "../../Css/home/service.css";
import research from "../../assets/scientific-research.png";
const Sevices = () => {
  return (
    <div className="service-section pb-4 pb-md-5 pt-3">
      <div className="d-flex justify-content-center align-items-center">
        <h1 className="text-center p-3 text-black-variant-1">Our Services</h1>
        <div className="d-none d-md-block">
          <img alt="research" src={research} />
        </div>
      </div>
      <div
        className={`card-holder
	 d-flex gap-3
	 justify-content-start justify-content-md-center
	  `}
      >
        <Cards
          title={"Web Development"}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s`}
          imgPath={"./cardone.png"}
        />
        <Cards
          title={"Paper Writing"}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s`}
          imgPath={"./cardtwo.svg"}
        />
        <Cards
          title={"Making "}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s`}
          imgPath={"./cardthree.svg"}
        />
      </div>
    </div>
  );
};

export default Sevices;
