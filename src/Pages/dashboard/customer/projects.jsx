import { useContext, useEffect, useState } from "react";
import "../../../Css/project/project.css";
import { ThemeContext } from "../../../App";
import { ToastContainer, toast } from "react-toastify";
import { CloseCircle } from "iconsax-react";
import { skillsList } from "../../../utils/constants/skillsList";
const CustomerProjectTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRows, setCurrentRows] = useState([]);
  const [alldata, setAllData] = useState(data);
  const [showPortal, setShowPortal] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  useEffect(() => {
    setCurrentRows(alldata.slice(indexOfFirstRow, indexOfLastRow));
  }, [currentPage, alldata]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.budget.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
    setAllData(filteredData);
    if (e.target.value === "") setAllData(data);
    // Reset to first page when searching
  };
  return (
    <div className="table-responsive-container">
      <ToastContainer />
      <div
        className="table-responsive text-black-variant-1"
        style={{
          maxWidth: "1200px",
          minWidth: "600px",
        }}
      >
        {showPortal && <ProjectPortal setShowPortal={setShowPortal} />}
        <div className="d-flex justify-between">
          <button
            className={`btn-custom-secondary ms-1 bg-dark-blue mt-1 `}
            onClick={() => setShowPortal(!showPortal)}
          >
            Create Project
          </button>
          <div
            className="search-bar col "
            style={{ maxWidth: "400px", width: "100%" }}
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
            <div key={index} className="row table-row my-2 p-1 py-2">
              <div className="col">{item.title}</div>
              <div className="col">{item.created}</div>
              <div className="col">
                <span
                  style={{ color: item.payment === "Paid" ? "green" : "red" }}
                >
                  {item.payment}
                </span>
              </div>
              <div className="col">{item.progress}</div>
              <div className="col">{item.submission}</div>
              <div className="col">{item.budget}</div>
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

const ProjectPortal = ({ setShowPortal }) => {
  const close = () => {
    const portal = document.getElementById("p_portal");
    window.onclick = function (event) {
      if (event.target == portal) {
        setShowPortal(false);
      }
    };
  };
  const [showError, setShowError] = useState(false);
  const [showSkillList, setShowSkillList] = useState(false);
  const [personalSkills, setPersonalSkills] = useState([]);
  const [skills, setSkills] = useState(skillsList);
  const [projectDetail, setProjectDetail] = useState({
    title: "",
    date: "",
    description: "",
    skill: [],
    budget: "",
    attachment: "",
  });
  useEffect(() => {
    setProjectDetail({ ...projectDetail, skill: personalSkills });
  }, [personalSkills]);
  const projectError = {
    title: "Project title is required",
    date: "Project date is required",
    descrition: "Project breif description is required",
    budget: "very much is required",
    skill: "skill is required",
  };
  const handleCreate = () => {
    setShowError(true);
    // Validate project detail
    if (validateProjectDatail(projectDetail)) {
      toast.success("Great your project is created!");
      setShowPortal(false);
      console.log(projectDetail);
    } else {
      toast.error("Please fill all details");
      console.log(projectDetail);
    }
  };

  const validateProjectDatail = (detail) => {
    if (detail.title == "") return false;
    if (detail.date == "") return false;
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
        <div className={"project-portal-header"}>
          <h5 className={`text-center`}>New Project</h5>
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
              name="date"
              onChange={(e) =>
                setProjectDetail({
                  ...projectDetail,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {!projectDetail.date && showError && (
              <span className="text-error text-xsm d-block ps-3">
                {projectError.date}
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
          className="btn-custom-secondary bg-dark-blue text-black-variant-1"
          onClick={() => handleCreate()}
        >
          Create
        </button>
      </div>
    </div>
  );
};
