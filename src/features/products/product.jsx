import product1 from "../../assets/images/product_1.png";
import ProductHero from "./components/product_hero";
import "./product.css";
import { Feature1, Feature2 } from "../main/components/services/features";
import { useRef } from "react";
import { useInView } from "framer-motion";
import product1Light from "../../assets/images/product_1_light.png";
import { useThemeContext } from "../../App";
import { ProjectPostedCard } from "./components/project_list";
import usePostedProject from "./hooks/used_posted_project";
const Products = () => {
  const themeContext = useThemeContext();
  const steps = [
    {
      title: "Create Account and Browse Projects",
      icon: "🔍",
      description:
        "Sign up for an account and explore available projects that match your skills and interests.",
    },
    {
      title: "Submit Proposal",
      icon: "📝",
      description:
        "Craft and send a compelling proposal to clients for projects you're interested in working on.",
    },
    {
      title: "Complete Project and Earn",
      icon: "💰",
      description:
        "Deliver high-quality work, complete the project successfully, and receive payment for your services.",
    },
  ];
  const projects = [
    {
      id: 1,
      project_category: "Development",
      title: "Website Redesign",
      description:
        "We are working on a comprehensive redesign of our client’s corporate website to enhance user experience and improve site performance.",
      project_price: "5000",
      project_deadline: "2024-09-15T17:00:00Z",
      skills_required: ["Web Development", "UI/UX Design", "SEO"],
      client: 101,
      created_at: "2024-07-10T10:30:00Z",
      updated_at: "2024-06-15T08:45:00Z",
      payment_status: "pending",
      project_status: "in progress",
      project_assigned_status: "assigned",
      applied_count: 8,
    },
    {
      id: 2,
      project_category: "Marketing",
      title: "Social Media Campaign",
      description:
        "Developing a social media campaign to boost brand awareness and engagement for a new product launch.",
      project_price: "3000",
      project_deadline: "2024-08-01T23:59:59Z",
      skills_required: [
        "Social Media Marketing",
        "Content Creation",
        "Analytics",
      ],
      client: 102,
      created_at: "2024-07-10T09:00:00Z",
      updated_at: "2024-07-10T12:00:00Z",
      payment_status: "completed",
      project_status: "pending",
      project_assigned_status: "unassigned",
      applied_count: 5,
    },
  ];
  const colabFeatureRef = useRef();
  const colabFeatureInView = useInView(colabFeatureRef, {
    once: true,
    margin: "-100px",
  });

  const variantFeature = {
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
    },
  };
  return (
    <div>
      <div className="">
        <ProductHero />
      </div>
      <div
        className="d-flex justify-content-center mx-auto border-card"
        style={{ maxWidth: "1200px", borderRadius: "10px", overflow: "hidden" }}
      >
        <img
          src={themeContext.isDark ? product1 : product1Light}
          alt="product 1"
        />
      </div>
      {/* Steps */}
      <div className="max-w-1200 mx-auto mt-100 mb-100 px-4 px-md-2 text-black-variant-1">
        <h4 className="mb-3">Easy Step</h4>
        <div className="d-flex  gap-4 flex-wrap justify-content-between flex-column flex-md-row justify-content-md-between">
          {steps.map((step, index) => (
            <div key={index} style={{ maxWidth: "360px" }}>
              {/* icon */}
              <div
                className="border p-2 rounded mb-3 bg-green-primary d-inline-block d-flex-inline align-item-center justify-conten-center"
                style={{ height: "min-content" }}
              >
                {step.icon}
              </div>
              {/* title */}
              <h5 className="mb-2 font-weight-400">{step.title}</h5>
              {/* description */}
              <p className="text-black-variant-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* posted Project */}
      <div className="text-black-variant-1 max-w-1200 mx-auto px-3 px-md-2">
        <h4>Recent Project</h4>
        <div className="d-flex flex-column gap-4 mt-4 mb-5">
          <ProjectPostedCard
            postedProject={usePostedProject()}
            project={projects[0]}
          />
          <ProjectPostedCard
            postedProject={usePostedProject()}
            project={projects[1]}
          />
        </div>
      </div>
      {/* Features */}
      <section
        className="service-section feature-section"
        style={{ position: "relative" }}
      >
        <section className="text-black-variant-1 mx-4 feature-section mx-auto">
          {/* Feature 1 */}
          <Feature1
            colabFeatureInView={colabFeatureInView}
            colabFeatureRef={colabFeatureRef}
            variantFeature={variantFeature}
          />
          {/* Feature 2 */}
          <Feature2 variantFeature={variantFeature} />
          {/* End of features */}
        </section>
      </section>
    </div>
  );
};

export default Products;
