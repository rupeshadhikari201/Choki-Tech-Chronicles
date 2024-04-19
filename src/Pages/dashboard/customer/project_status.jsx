import { ArrowLeft, CloseCircle, Edit, TickCircle } from "iconsax-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectContext } from "../../../utils/context/project";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../utils/context/auth";
import { skillsList } from "../../../utils/constants/skillsList";
import { base_url } from "../../../utils/constants/path";
import { ACTION_TYPE } from "../../../reducer/action/action";
import { ToastContainer, toast } from "react-toastify";
const ProjectStatus = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const { currentProject } = useContext(ProjectContext);
  const { projectData } = useContext(ProjectContext);
  const [projectDetail, setProjectDetail] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const [fetchProject, setFetchProject] = useState(false);
  useEffect(() => {
    // if (id >= projectData?.data.length) {
    //   setProjectDetail({});
    //   navigator("/client/dashboard/projects");
    // } else setProjectDetail(projectData?.data[id]);
    if (Object.keys(currentProject).length > 4) {
      setProjectDetail(currentProject);
    } else {
      setProjectDetail({});
      navigator("/client/dashboard/projects");
    }
  }, [fetchProject]);
  const [projectStatus, setProjectStatus] = useState([
    {
      name: "Project Assigned",
      state: false,
    },
    {
      name: "50% complete",
      state: false,
    },
    {
      name: "Half Payment",
      state: false,
    },
    {
      name: "Project Completed",
      state: false,
    },
    {
      name: "Full Payment",
      state: false,
    },
  ]);
  return (
    <div className={`text-black-variant-2 px-2`}>
      {/* Goback to previous  */}
      <button
        className=" transparent w-auto btn-custom-secondary ms-0 p-1 text-black-variant-1"
        onClick={() => {
          navigator(-1);
        }}
      >
        <ArrowLeft />
      </button>
      {/* Edit Modal */}
      {showEdit && (
        <EditProjectPortal
          setShowPortal={setShowEdit}
          details={projectData?.data[id]}
          setFetchProject={setFetchProject}
        />
      )}
      <div
        className={`bg-white-variant-4 p-2 mb-3 position-relative border-card`}
      >
        {/* show Edit */}
        <div
          className="position-absolute"
          style={{
            right: "20px",
          }}
        >
          <button className="btn" onClick={() => setShowEdit(true)}>
            <Edit className="text-black-variant-2" />
          </button>
        </div>
        <h4 className="font-weight-400 text-capitalize">
          {projectDetail?.title}
        </h4>
        <p className="text-capitalize">{projectDetail?.description}</p>
      </div>
      <div className={`d-flex flex-column flex-md-row gap-3 mb-3`}>
        <div
          className={` d-flex flex-column gap-3 col`}
          style={{ minHeight: 300 }}
        >
          <div className={`col d-flex gap-3`}>
            <div className={`bg-white-variant-4 col p-2 border-card`}>
              {" "}
              Budget
              <div className="h-100 w-100 mt-3">
                <h3 className="font-weight-400 text-center">
                  {projectDetail?.project_price}
                </h3>
              </div>
            </div>
            <div className={`bg-white-variant-4 col p-2 border-card`}>
              {" "}
              Posted Date
              <div className="h-100 w-100 mt-3">
                <p>
                  {new Date(projectDetail?.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className={`bg-white-variant-4 col p-2 border-card`}>
            skill required
            <div className="d-flex gap-4 mt-3 flex-wrap">
              {projectDetail?.skills_required
                ? projectDetail?.skills_required.map((sk, index) => (
                    <div
                      key={index}
                      className="border px-3 py-1"
                      style={{ borderRadius: "30px" }}
                    >
                      {sk}
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>

        <div
          className={`bg-white-variant-4 col p-2 border-card`}
          style={{ height: 300 }}
        >
          Status
          <div className="d-flex flex-column mt-2 ms-1 ms-md-4">
            {projectStatus.map((states, index) => (
              <div className="d-flex gap-3" key={index}>
                <div
                  className={`rounded ${
                    states.state ? "bg-green-primary" : ""
                  } rounded-circle d-flex align-items-center justify-content-center`}
                  style={{ width: "30px", height: "30px" }}
                >
                  {" "}
                  <TickCircle />
                </div>
                <p>{states.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`bg-white-variant-4 p-2 mb-3 border-card`}>
        <h5>Project Progress</h5>
        <p>Screen shot</p>
      </div>
    </div>
  );
};

export default ProjectStatus;

const EditProjectPortal = ({ setShowPortal, setFetchProject, details }) => {
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
  const [personalSkills, setPersonalSkills] = useState(details.skills_required);
  const [skills, setSkills] = useState(skillsList);
  const [projectDetail, setProjectDetail] = useState({
    title: details.title,
    submission: details.project_deadline,
    description: details.description,
    skill: details.skills_required,
    budget: details.project_price,
    attachment: "",
    progress: "Not assigned",
    payment: details.payment_status,
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
  const saveProject = async () => {
    setShowError(true);
    // Validate project detail
    if (validateProjectDatail(projectDetail)) {
      //let's save client project in database
      // try {
      //   const details = {
      //     project_category: "D",
      //     title: projectDetail.title,
      //     description: projectDetail.description,
      //     skills_required: projectDetail.skill,
      //     project_price: projectDetail.budget,
      //     project_deadline: projectDetail.submission,
      //     client: userState.user.id,
      //   };
      //   const res = await axios.post(
      //     base_url + "/api/user/create_project/",
      //     details
      //   );
      //   toast.success("Project created Successfuly!");
      //   setShowPortal(false);
      //   setFetchProject((prev) => !prev);
      //   projectDispatch({
      //     type: ACTION_TYPE.ADD_PROJECT,
      //     payload: [projectDetail],
      //   });
      // } catch (e) {
      //   console.log(e);
      //   toast.error(Object.values(e.response.data.errors.errors).toString());
      // }
    } else {
      toast.error("Please fill all details");
      console.log(projectDetail);
    }
  };

  const validateProjectDatail = (detail) => {
    if (detail.title == "") return false;
    if (detail.submission == "") return false;
    if (detail.description == "") return false;
    if (detail.budget == "") return false;
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
      <div className="rounded custom-modal border-card">
        {/* heading for posting project */}
        <div className={"project-portal-header d-flex justify-content-center"}>
          <h5 className={`text-center text-white `}>Edit Project</h5>
          <CloseCircle
            className="ms-auto p-1 cursor-pointer"
            size={35}
            onClick={() => setShowPortal(false)}
          />
        </div>

        <div
          className={`d-flex flex-column flex-md-row flex-wrap justify-content-start px-4`}
        >
          {/* Project title */}
          <div className={`p-2 col-md-6 col`}>
            <h5 className={"font-weight-400"}>Title </h5>
            <p>Project title that tells the project</p>
            <input
              type="text"
              defaultValue={details.title}
              className={`custom-input border-green-variant-1 rounded`}
              style={{ maxWidth: "400px" }}
              name="title"
              onChange={(e) =>
                setProjectDetail({
                  ...projectDetail,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {!projectDetail.title && showError && (
              <span className="text-error text-xsm d-block ps-3">
                {projectError.title}
              </span>
            )}
          </div>
          {/* Project submition data line */}
          <div className={`p-2 col-md-6 col`} style={{ maxWidth: "400px" }}>
            <h5 className={"font-weight-400"}>Submition Date</h5>
            <p>Last date for project submition</p>
            <input
              type="date"
              defaultValue={details.submission}
              className={`custom-input border-green-variant-1 rounded`}
              style={{ maxWidth: "400px" }}
              name="submission"
              onChange={(e) =>
                setProjectDetail({
                  ...projectDetail,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {!projectDetail.submission && showError && (
              <span className="text-error text-xsm d-block ps-3">
                {projectError.submission}
              </span>
            )}
          </div>
          {/* Description */}
          <div className={`p-2 col-md-6 col`} style={{ minHeight: "100px" }}>
            <div style={{ maxWidth: "400px" }}>
              <h5 className={"font-weight-400"}>Description</h5>
              <p>
                Detail explanation of project that explain what is the project
                about
              </p>
            </div>
            <textarea
              type="text"
              defaultValue={details.description}
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
          {/* Skill section  */}
          <div
            className={`p-2 col-md-6 col`}
            style={{ minHeight: "100px", maxWidth: "400px" }}
          >
            <div style={{ maxWidth: "400px" }}>
              <h5 className={"font-weight-400"}>Skill</h5>
              <p>Skill required for the project</p>
            </div>
            <div
              className={`
        mt-3
        border-green-variant-1
        rounded
        w-100
        p-2
        d-flex flex-column
        gap-2
        `}
              style={{
                maxWidth: "400px",
                Height: "200px",
              }}
            >
              {/*Skills list view  */}
              <div
                className={"d-flex skill-wrapper gap-2 pb-2"}
                style={{
                  maxWidth: "400px",
                  overflowX: "scroll",
                }}
                id="skill-wrapper"
              >
                {personalSkills &&
                  personalSkills.map((skill, index) => (
                    <div
                      key={index}
                      className={`
                border-green-variant-1
                p-1
                bg-green-variant-4
                d-flex
                justify-content-between
                align-items-center
                gap-2
                text-sm
                
                `}
                      style={{
                        whiteSpace: "nowrap",
                        borderRadius: "20px",
                      }}
                    >
                      <span className="text-black-variant-1 text-white">
                        {skill}
                      </span>
                      <CloseCircle
                        color="white"
                        onClick={() => {
                          let filtered = personalSkills.filter(
                            (sk) => sk != skill
                          );
                          let pos = skillsList.findIndex(
                            (sk) => sk.name === skill
                          );
                          skillsList[pos].isSelected = false;
                          setPersonalSkills(filtered);
                        }}
                        className={`cursor-pointer`}
                      />
                    </div>
                  ))}
              </div>
              {/* Input for skill */}
              <div
                className={`
          position-relative
          border-green-variant-1
            rounded
              p-1
          `}
                style={{
                  maxWidth: "200px",
                  zIndex: "100",
                }}
              >
                <div className={`d-flex`}>
                  <input
                    type="text"
                    placeholder="your skills"
                    name="skills"
                    className={`
            transparent
            w-100
            `}
                    onFocus={() => setShowSkillList(true)}
                    onChange={(e) => {
                      const { value } = e.target;
                      let filtered;
                      if (value) {
                        filtered = skillsList.filter(
                          (skill) =>
                            !skill.isSelected &&
                            skill.name
                              .toLowerCase()
                              .includes(value.toLowerCase())
                        );
                        setSkills(filtered);
                      } else setSkills(skillsList);
                    }}
                  />
                  {showSkillList && (
                    <span
                      className={`
            cursor-pointer
            `}
                      onClick={() => setShowSkillList(false)}
                    >
                      <CloseCircle />
                    </span>
                  )}
                </div>
                <ul
                  className={`
          skills-list
          ${showSkillList ? "active" : ""}
          `}
                >
                  {skills.map(
                    (skill, index) =>
                      !skill.isSelected && (
                        <li
                          key={index}
                          onClick={() => {
                            setPersonalSkills([...personalSkills, skill.name]);
                            skills[index].isSelected = true;
                            setSkills(skillsList);
                            const skillWrapper =
                              document.getElementById("skill-wrapper");
                            skillWrapper.scrollLeft = skillWrapper.scrollWidth;
                          }}
                        >
                          {skill.name}
                        </li>
                      )
                  )}
                </ul>
              </div>
              {/*  */}

              {/*  */}
            </div>
            {projectDetail.skill.length < 1 && showError && (
              <span className="text-error text-xsm d-block ps-3">
                {projectError.skill}
              </span>
            )}
          </div>
          {/* Budget */}
          <div className={`p-2 col-md-6 col`}>
            <div style={{ maxWidth: "400px" }}>
              <h5 className={"font-weight-400"}>Budget</h5>
              <p>Budget required for the project</p>
            </div>
            <input
              type="text"
              defaultValue={details.project_price}
              className={`custom-input border-green-variant-1 rounded`}
              style={{ maxWidth: "400px" }}
              name="budget"
              onChange={(e) =>
                setProjectDetail({
                  ...projectDetail,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {!projectDetail.budget && showError && (
              <span className="text-error text-xsm d-block ps-3">
                {projectError.budget}
              </span>
            )}
          </div>
          {/* Attachment */}
          <div className={`p-2 col-md-6 col`}>
            <div style={{ maxWidth: "400px" }}>
              <h5 className={"font-weight-400"}>Attachment</h5>
              <p>Attachment if any</p>
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
          onClick={() => saveProject()}
        >
          Save
        </button>
      </div>
    </div>
  );
};
