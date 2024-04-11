import { useContext, useEffect, useState } from "react";
import "../../../Css/project/project.css";
import { ThemeContext } from "../../../App";
import { ToastContainer, toast } from "react-toastify";
import { CloseCircle } from "iconsax-react";
import { skillsList } from "../../../utils/constants/skillsList";
import { useNavigate } from "react-router-dom";
import { base_url, commonPath } from "../../../utils/constants/path";
import { ProjectContext } from "../../../utils/context/project";
import { ACTION_TYPE } from "../../../reducer/action/action";
import { AuthContext } from "../../../utils/context/auth";
import ReactLoading from "react-loading";
import axios from "axios";
import Cookies from "js-cookie";
import TimeAgo from "javascript-time-ago";
const CustomerProjectTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRows, setCurrentRows] = useState([]);
  const [alldata, setAllData] = useState([]);
  const [showPortal, setShowPortal] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const { userState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showReload, setShowReload] = useState(false);
  const { projectData, projectDispatch } = useContext(ProjectContext);
  const [fetchProject, setFetchProject] = useState(false);
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const timeAgo = new TimeAgo("en-US");
  const navigator = useNavigate();
  useEffect(() => {
    //Geting client project
    setLoading(true);
    axios
      .get(base_url + "/api/user/get-client-project/", {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((res) => {
        setAllData(res.data);
        projectDispatch({
          type: ACTION_TYPE.SET_PROJECT,
          payload: res.data,
        });
        setCurrentRows(res.data.slice(indexOfFirstRow, indexOfLastRow));
        setShowReload(false);
      })
      .catch((e) => {
        console.log("Fetching project", e.message);
        toast.error("Error while fetching project. please refresh page");
        setShowReload(true);
      })
      .finally(() => setLoading(false));
  }, [currentPage, showReload, fetchProject]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = projectData.data.filter(
    (item) =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.project_price?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
    setAllData(filteredData);
    if (e.target.value === "") setAllData(projectData.data);
    // Reset to first page when searching
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
            setAllData={setAllData}
            setFetchProject={setFetchProject}
          />
        )}
        <div className="d-flex flex-column flex-sm-row gap-2 justify-between ">
          {showReload ? (
            <div className="col"></div>
          ) : (
            <button
              className={`btn-custom-secondary ms-1 bg-dark-blue mt-1 `}
              onClick={() => setShowPortal(!showPortal)}
            >
              Create Project
            </button>
          )}

          <div
            className="search-bar col "
            style={{ maxWidth: "300px", width: "100%" }}
          >
            <input
              type="text"
              className="custom-input border rounded"
              placeholder="Search by title or budget"
              value={searchTerm}
              onChange={handleSearch}
              style={{ maxWidth: "400px", width: "100%" }}
            />
          </div>
        </div>
        {/* Show Reload */}
        {showReload && (
          <button
            className="btn-custom-secondary"
            onClick={() => {
              setShowReload(false);
              setLoading(true);
            }}
          >
            Reload
          </button>
        )}
        <div className="row table-header py-2">
          <div className="col">Title</div>
          <div className="col">Created</div>
          <div className="col">Payment</div>
          <div className="col">Progress</div>
          <div className="col">Submission</div>
          <div className="col">Budget</div>
          <div className="col">Action</div>
        </div>
        <div className="table-body">
          {currentRows.map((item, index) => (
            <div
              key={index}
              className="row table-row my-2 p-1 py-2 cursor-pointer"
              onClick={() => {
                navigator(`status/${index}`);
              }}
            >
              <div className="col">{item?.title}</div>
              <div className="col">
                {timeAgo.format(new Date(item?.created_at))}
              </div>
              <div className="col">
                <span style={{ color: item.payment === 2 ? "green" : "red" }}>
                  {item.payment_status == 1 ? "Pending" : "Paid"}
                </span>
              </div>
              <div className="col">
                {item?.project_status === 1 ? "unassigned" : "assigned"}
              </div>
              <div className="col">
                {new Date(item?.project_deadline).toLocaleDateString()}
              </div>
              <div className="col">{item?.project_price}</div>
              <div className="col">
                <div className="dropdown position-relative">
                  <button
                    className={`btn dropdown-toggle ${
                      isDark ? "text-white" : ""
                    }`}
                    type="button"
                    id={`dropdownMenuButton${index}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby={`dropdownMenuButton${index}`}
                  >
                    <li className="px-2 py-1">Edit</li>
                    <li className="px-2 py-1">Check</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav>
          <ul className="pagination">
            {Array.from(
              { length: Math.ceil(alldata.length / rowsPerPage) },
              (_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    i + 1 === currentPage ? "active" : ""
                  }`}
                >
                  <button className="page-link" onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CustomerProjectTable;

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
          {/* Project title */}
          <div className={`p-2 col-md-6 col`}>
            <h5 className={"font-weight-400"}>Title *</h5>
            <p>Project title that tells the project</p>
            <input
              type="text"
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
            <h5 className={"font-weight-400"}>Submition Date *</h5>
            <p>Last date for project submition</p>
            <input
              type="date"
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
                      {skill}
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
          onClick={() => handleCreate()}
        >
          Create
        </button>
      </div>
    </div>
  );
};
