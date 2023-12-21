import "../Css/frequentAsked.css";
const FrequentAsked = () => {
  return (
    <section className="section-frequently p-2 pb-4">
      <h1 className="text-center">Frequently Asked Quesiton</h1>
      <div className="quesiton-list">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
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
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item&apos;s accordion body.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentAsked;