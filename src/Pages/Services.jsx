import Cards from "../Components/Card.jsx";
import "../Css/service.css";
import research from "../assets/scientific-research.png";
const Sevices = () => {
  return (
    <div className="service-section pb-5">
      <div className="d-flex justify-content-center align-items-center">
        <h1
          className="text-center p-3 
		 
		"
        >
          Our Services
        </h1>
        <div className="">
          <img alt="research" src={research} />
        </div>
      </div>
      <div
        className={`card-holder
	 d-flex gap-3
	 justify-content-center
	 flex-wrap
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
          title={"Web Development"}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s`}
          imgPath={"./cardtwo.svg"}
        />
        <Cards
          title={"Web Development"}
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
