import "../../Css/home/frequentAsked.css";
const FrequentAsked = () => {
  return (
    <section className="section-frequently p-2 pb-4 ">
      <h1
        className="text-center mb-4
      text-black-variant-1
      "
      >
        Frequently Asked Quesiton
      </h1>
      <div className="quesiton-list">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed text-black-variant-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What kind of service do you provide
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-black-variant-1">
                content for the question asked, answer provided by
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentAsked;
