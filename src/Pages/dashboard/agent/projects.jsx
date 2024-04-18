import { useContext, useEffect, useState } from "react";
import "../../../Css/project/project.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../../utils/constants/path";
import { ProjectContext } from "../../../utils/context/project";
import { ACTION_TYPE } from "../../../reducer/action/action";
import axios from "axios";
import Cookies from "js-cookie";
import TimeAgo from "javascript-time-ago";
import CircularLoading from "../../../Components/commen/react_loading";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";

const PostedProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRows, setCurrentRows] = useState([]);
  const [alldata, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showReload, setShowReload] = useState(false);
  const { projectData, projectDispatch, currentProject, setCurrentProject } =
    useContext(ProjectContext);
  const [fetchProject, setFetchProject] = useState(false);
  const [priceFilter, setPriceFilter] = useState("");
  const [applicatFilter, setApplicantFilter] = useState("");
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
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
  const priceFilterList = ["500-1000", "1K-2K", "2k-5K", ">5k"];
  const applicatFilterList = ["0-5", "5-10", ">10"];
  useEffect(() => {
    //Geting client project
    setLoading(true);
    axios
      .get(base_url + "/api/user/get-client-project/", {
        signal: controller.signal,
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((res) => {
        //sorting data based on created time
        res.data.sort((a, b) => {
          if (Date(a.created_at) < Date(b.created_at)) return 1;
          return -1;
        });
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
        // console.log(e);
        if (e.response?.status == 401) {
          toast.error("please refresh page");
          setShowReload(true);
        } else {
          toast.error("No Internet connection");
        }
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [currentPage, fetchProject]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    const filteredData = projectData.data.filter(
      (item) =>
        item.title?.toLowerCase().includes(value.toLowerCase()) ||
        item.project_price
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
    );
    setCurrentRows(filteredData.slice(indexOfFirstRow, indexOfLastRow));
    // Reset to first page when searching
    setCurrentPage(1);
    setAllData(filteredData);
    if (e.target.value === "") setAllData(projectData.data);
  };
  const checkOutProject = (detail, index) => {
    //setCurrentProject
    setCurrentProject(detail);
    navigator(`check/${index}`);
  };

  return (
    <>
      {" "}
      {loading && (
        <>
          <CircularLoading />
        </>
      )}
      <div className="table-responsive-container position-relative">
        <ToastContainer />
        <div
          className="table-responsive text-black-variant-1"
          style={{
            maxWidth: "1200px",
            minWidth: "600px",
          }}
        >
          <div className="d-flex flex-column flex-sm-row gap-2 justify-between ">
            <div
              className="search-bar col "
              style={{ maxWidth: "300px", width: "100%" }}
            >
              <input
                type="text"
                className="custom-input card-border rounded"
                placeholder="Search by title"
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
                window.location.reload();
              }}
            >
              Reload
            </button>
          )}
          {/* Project cards */}
          <div className="mb-4"></div>
          <div className={`d-flex gap-4 `}>
            <div>
              {postedProjects.map((project, index) => (
                <div
                  className="project-card-wrapper bg-white-variant-4  px-3 py-3 mb-4 rounded border-card cursor-pointer"
                  style={{
                    maxWidth: "900px",
                    width: "100%",
                  }}
                  key={index}
                  onClick={() => checkOutProject(project, index)}
                >
                  <p className="m-0 font-size-xsm">posted date</p>
                  {/* title */}
                  <h4 className="project-title my-2 font-weight-400 text-capitalize">
                    {project.title}
                  </h4>
                  {/* Description */}
                  <p className="project-description my-3">
                    {project.description}
                  </p>
                  <div className="d-flex gap-3 flex-wrap my-3">
                    {project.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="border px-3 py-1"
                        style={{ borderRadius: "30px", width: "auto" }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className="card-bottom d-flex justify-content-between">
                    <p>Estimated Submission {project.submission}</p>
                    <p>
                      Budget <br />
                      {project.project_price}rs
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Filter projects */}
            <div
              className="project-filter"
              style={{ maxWidth: "200px", width: "100%" }}
            >
              <h6>Category</h6>
              <select
                className="p-2
                  rounded
                  border-green-variant-3
                  text-black-variant-1
                  bg-white-variant-2
                  w-100 mb-2"
              >
                <option>All</option>
              </select>
              <h6>Price</h6>
              {priceFilterList.map((price, index) => (
                <div
                  key={index}
                  className="cursor-pointer px-1 py-1"
                  onClick={() => setPriceFilter(price)}
                >
                  {priceFilter == price ? (
                    <MdOutlineCheckBox color="green" size={25} />
                  ) : (
                    <MdCheckBoxOutlineBlank size={25} />
                  )}

                  <input
                    type="radio"
                    value={price}
                    id={price}
                    name="price-filter"
                    hidden
                  />
                  <label htmlFor={price} className="cursor-pointer ps-2">
                    {price}
                  </label>
                </div>
              ))}
              <h6 className="mt-2">Applicants</h6>
              {applicatFilterList.map((applicat, index) => (
                <div
                  key={index}
                  className="cursor-pointer px-1 py-1"
                  onClick={() => setApplicantFilter(applicat)}
                >
                  {applicatFilter == applicat ? (
                    <MdOutlineCheckBox color="green" size={25} />
                  ) : (
                    <MdCheckBoxOutlineBlank size={25} />
                  )}

                  <input
                    type="radio"
                    value={applicat}
                    id={applicat}
                    name="price-filter"
                    hidden
                  />
                  <label htmlFor={applicat} className="cursor-pointer ps-2">
                    {applicat}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* <nav>
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
        </nav> */}
        </div>
      </div>
    </>
  );
};

export default PostedProjects;
