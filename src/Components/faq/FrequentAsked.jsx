import "./frequentAsked.css";
const FrequentAsked = () => {
  const questions = [
    {
      title: "What kind of services do you provide?",
      detail:
        "At GokapTech, we offer a range of services including custom web development, real-time monitoring for system performance and security, expert tech consultancy, and innovative software solutions tailored to meet your business needs.",
    },
    {
      title: "How do you determine pricing for your services?",
      detail:
        "Our pricing is determined based on the scope of your project, complexity, required features, and level of customization. We provide transparent pricing with detailed quotes to ensure clarity and fairness.",
    },
    {
      title: "What expertise does your team bring to the table?",
      detail:
        "Our team comprises skilled professionals with expertise in various technologies, programming languages, and industry best practices. We stay updated with the latest trends to deliver cutting-edge solutions.",
    },
    {
      title: "Do you offer ongoing support after the project is completed?",
      detail:
        "Yes, we provide ongoing support and maintenance services to ensure your systems run smoothly post-launch. Our support includes troubleshooting, updates, and addressing any technical issues promptly.",
    },
    {
      title: "Can you handle projects of different scales?",
      detail:
        "Absolutely! We have experience working on projects of various scales, from small businesses to enterprise-level solutions. Our scalable approach ensures we can cater to your specific requirements effectively.",
    },
    {
      title:
        "Do you provide training for using the software solutions you develop?",
      detail:
        "Yes, we offer training sessions and documentation to help your team understand and utilize the software solutions effectively. We ensure a smooth transition and empower your team to leverage the full potential of our solutions.",
    },
  ];

  return (
    <div className="section-frequently-wrapper">
      <section className="section-frequently px-2 pb-100 ">
        <h1
          className="text-center mb-4
      text-black-variant-1 pt-50 pb-4
      "
        >
          Frequently Asked Quesiton
        </h1>
        <div className="quesiton-list text-black-variant-1">
          {questions.map((question, index) => (
            <div className="freq-question" key={index}>
              <h5
                className="cursor-pointer font-weight-400"
                id={`question-${index}`}
                onClick={(e) => {
                  const nextsibling = e.currentTarget.nextElementSibling;
                  let maxHeight = nextsibling.style.maxHeight;
                  if (maxHeight) {
                    nextsibling.style.maxHeight = null;
                  } else {
                    nextsibling.style.maxHeight =
                      nextsibling.scrollHeight + 10 + "px";
                  }
                }}
              >
                {question.title}
              </h5>
              <div className="question-ans">
                <p className="text-black-variant-3">{question.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FrequentAsked;
