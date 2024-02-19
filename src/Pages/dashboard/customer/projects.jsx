import { useContext, useEffect, useState } from "react";
import "../../../Css/project/project_table.css";
import { ThemeContext } from "../../../App";
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
      <div
        style={{
          background: "white",
          width: "80%",
          height: "90%",
          top: "20px",
          left: "0",
          bottom: "0",
          right: "0",
          zIndex: "300",
        }}
      ></div>
    </div>
  );
};
