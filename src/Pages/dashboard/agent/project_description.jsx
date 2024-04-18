import { useContext, useEffect, useState } from "react";
import "../../../Css/project/project.css";
import { ThemeContext } from "../../../App";
import { ToastContainer, toast } from "react-toastify";
import { ArrowLeft, CloseCircle, Level, Timer } from "iconsax-react";
import { skillsList } from "../../../utils/constants/skillsList";
import { useNavigate, useParams } from "react-router-dom";
import { base_url } from "../../../utils/constants/path";
import { ProjectContext } from "../../../utils/context/project";
import { ACTION_TYPE } from "../../../reducer/action/action";
import { AuthContext } from "../../../utils/context/auth";
import ReactLoading from "react-loading";
import axios from "axios";
import TimeAgo from "javascript-time-ago";

const CheckProject = () => {
  const [project, setProject] = useState(1);
  const { id } = useParams();
  const [showPortal, setShowPortal] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const { projectData, projectDispatch, currentProject, setCurrentProject } =
    useContext(ProjectContext);
  const [fetchProject, setFetchProject] = useState(false);

  const timeAgo = new TimeAgo("en-US");
  const navigator = useNavigate();
  const controller = new AbortController();
  const postedProjects = [
    {
      title: "project 1",
      description:
        "We are in need of a seasoned Android Developer with 5+ years of experience in JAVA. Freelancer should be expert in integrating retrofit API. He/She should be familier with the use of Postman. He/She should be able to communicate in English.",
      skills: ["Communication", "Leadership", "skill 3"],
      submission: "11/10/2024",
      applicats: 2,
      project_price: 600,
    },
    {
      title: `project 2`,
      description: `We are US-based company and we require Fullstack - React, Nodejs expert who knows Mongodb/postgre for our upcoming project.
      We also need Flutter mobile app developer to support the mobile app.
      We welcome agencies and Freelancers to bid on proposals.
      Please add "Great" in your reply to know you have read it all.`,
      skills: ["Java", "Database", "Mangment", "React"],
      submission: "11/10/2024",
      applicats: 20,
      project_price: 5000,
    },
    {
      title: "Working on Research",
      description: `We are looking for skilled person to join our research lab. we develop solution in different area including 
      human development, enviromental protection
      `,
      skills: ["Problem solving", "Critical Thinking", "Programing"],
      submission: "11/10/2024",
      applicats: 1,
      project_price: 200,
    },
  ];
  useEffect(() => {
    setProject(postedProjects[id]);
    return () => {};
  }, [fetchProject]);

  const applyProject = (detail, index) => {
    //setCurrentProject
    // setCurrentProject(detail);
    // navigator(`status/${index}`);
    setShowPortal(true);
  };

  return (
    <div className="table-responsive-container position-relative">
      <ToastContainer />
      <div
        className="table-responsive text-black-variant-1"
        style={{
          maxWidth: "1200px",
          minWidth: "600px",
        }}
      >
        {/* Goback to previous  */}
        <button
          className=" transparent w-auto btn-custom-secondary ms-0 p-1 text-black-variant-1"
          onClick={() => {
            navigator(-1);
          }}
        >
          <ArrowLeft />
        </button>
        {loading && (
          <>
            <div className="text-black-variant-2 position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
              <ReactLoading
                type="spin"
                className="text-black-variant-1"
                height={50}
                width={50}
              />
            </div>
          </>
        )}
        {showPortal && (
          <ProjectPortal
            setShowPortal={setShowPortal}
            setFetchProject={setFetchProject}
          />
        )}
        {/* Project cards */}
        <div className="mb-4"></div>
        <div className="d-flex gap-4">
          <div className="ms-4" style={{ maxWidth: "700px", width: "100%" }}>
            {/* title */}
            <h5 className="project-title my-3 font-weight-400 text-capitalize">
              {project.title}
            </h5>
            {/* Description */}
            <p
              className="project-description my-3 text-black-variant-2 font-weight-400"
              style={{
                lineHeight: 1.45,
                letterSpacing: 0.2,
              }}
            >
              {project.description}
            </p>
            {/* Budget */}
            <h5 className="project-title my-3 font-weight-400 text-capitalize">
              Budget
            </h5>
            <h6>{project?.project_price}</h6>
            {/* Requirement */}
            <h5 className="project-title my-3 font-weight-400 text-capitalize">
              Requirment
            </h5>
            <div>
              <div className="d-flex gap-3">
                <Timer />
                <div>
                  <p>More than 5hr</p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <Level />
                <div>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
            {/* skills */}
            <h5 className="project-title my-3 font-weight-400 text-capitalize">
              Skill and Experties
            </h5>
            <div className="d-flex gap-3 flex-wrap my-3">
              {project?.skills?.map((skill, index) => (
                <div
                  key={index}
                  className="border px-3 py-1"
                  style={{ borderRadius: "30px", width: "auto" }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* apply button */}
          <button
            className="btn-custom-white-variant-1"
            style={{
              minHeight: "50px",
              borderRadius: "10px",
              height: "55px",
              padding: "5px 15px",
              fontSize: "1.3rem",
              fontWeight: "400",
            }}
            onClick={() => applyProject()}
          >
            apply
          </button>
        </div>
        {/* <div
          className="project-card-wrapper bg-white-variant-4 px-3 py-3 mb-4 rounded"
          style={{
            maxWidth: "900px",
            width: "100%",
            border: "1px solid white",
          }}
        >
         
          <div
            className="card-bottom d-flex justify-content-between
            "
          >
            <p>time to complement project {project.submission}</p>
            <p>likes</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CheckProject;

const ProjectPortal = ({ setShowPortal, setAllData, setFetchProject }) => {
  const close = () => {
    const portal = document.getElementById("p_portal");
    window.onclick = function (event) {
      if (event.target == portal) {
        setShowPortal(false);
      }
    };
  };
  const { projectDispatch } = useContext(ProjectContext);
  const [showError, setShowError] = useState(false);
  const [showSkillList, setShowSkillList] = useState(false);
  const [personalSkills, setPersonalSkills] = useState([]);
  const [skills, setSkills] = useState(skillsList);
  const { userState } = useContext(AuthContext);
  const [projectDetail, setProjectDetail] = useState({
    title: "",
    submission: "",
    description: "",
    skill: [],
    budget: "",
    attachment: "",
    created: new Date().toLocaleDateString(),
    progress: "Not assigned",
    payment: "pending",
  });
  useEffect(() => {
    setProjectDetail({ ...projectDetail, skill: personalSkills });
  }, [personalSkills]);
  const projectError = {
    title: "Project title is required",
    submission: "Project date is required",
    descrition: "Project breif description is required",
    budget: "very much is required",
    skill: "skill is required",
  };
  const handleCreate = async () => {
    setShowError(true);
    // Validate project detail
    if (validateProjectDatail(projectDetail)) {
      //let's save client project in database
      try {
        const details = {
          project_category: "D",
          title: projectDetail.title,
          description: projectDetail.description,
          skills_required: projectDetail.skill,
          project_price: projectDetail.budget,
          project_deadline: projectDetail.submission,
          client: userState.user.id,
        };
        const res = await axios.post(
          base_url + "/api/user/create_project/",
          details
        );
        toast.success("Project created Successfuly!");
        setShowPortal(false);
        setFetchProject((prev) => !prev);
        setAllData((prev) => [...prev, details]);
        projectDispatch({
          type: ACTION_TYPE.ADD_PROJECT,
          payload: [projectDetail],
        });
      } catch (e) {
        console.log(e);
        toast.error(Object.values(e.response.data.errors.errors).toString());
      }
    } else {
      toast.error("Please fill all details");
      console.log(projectDetail);
    }
  };

  const validateProjectDatail = (detail) => {
    if (detail.description == "") return false;
    return true;
  };
  return (
    <div
      className={`position-fixed rounded d-flex align-items-center justify-content-center`}
      style={{
        top: "0",
        left: "0",
        zIndex: "300",
        width: "100%",
        height: "100%",
      }}
      id="p_portal"
      onClick={close}
    >
      <ToastContainer />
      <div className="rounded custom-modal " style={{ overflowY: "scroll" }}>
        {/* heading for posting project */}
        <div className={"project-portal-header d-flex justify-content-center"}>
          <h5 className={`text-center  `}>New Project</h5>
          <CloseCircle
            className="ms-auto p-1 cursor-pointer"
            size={35}
            onClick={() => setShowPortal(false)}
          />
        </div>

        <div
          className={`d-flex flex-column flex-md-row flex-wrap justify-content-start px-4`}
        >
          {/* Project submition data line */}

          {/* Description */}
          <div className={`p-2 col-md-6 col`} style={{ minHeight: "100px" }}>
            <div style={{ maxWidth: "400px" }}>
              <h5 className={"font-weight-400"}>Proposal</h5>
              <p>Detail explanation of how you are going work on the project</p>
            </div>
            <textarea
              type="text"
              className={`custom-input border-green-variant-1 rounded w-100`}
              style={{ maxWidth: "400px", height: "100px" }}
              rows={30}
              name="description"
              onChange={(e) =>
                setProjectDetail({
                  ...projectDetail,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {!projectDetail.description && showError && (
              <span className="text-error text-xsm d-block ps-3">
                {projectError.descrition}
              </span>
            )}
          </div>

          {/* Attachment */}
          <div className={`p-2 col-md-6 col`}>
            <div style={{ maxWidth: "400px" }}>
              <h5 className={"font-weight-400"}>Attachment</h5>
              <p>work samples you have done (if any)</p>
            </div>
            <input
              type="file"
              className={`custom-input border-green-variant-1 rounded`}
              style={{ maxWidth: "400px" }}
              name="attachment"
              onChange={(e) =>
                setProjectDetail({
                  ...projectDetail,
                  [e.target.name]: e.target.files[0],
                })
              }
            />
          </div>
        </div>
        <button
          className="btn-custom-secondary bg-green-variant-4 text-black-variant-1"
          onClick={() => handleCreate()}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
