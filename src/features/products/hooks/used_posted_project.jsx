import { useEffect, useState } from "react";
import { useAxios } from "../../../hooks/use_axios";
import TimeAgo from "javascript-time-ago";

const usePostedProject = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postedProject, setPostedProject] = useState([]);
  const [projectHolder, setProjectHolder] = useState([]);
  const timeAgo = new TimeAgo("en-US");
  // const controller = new AbortController();
  const { sendRequest, loading } = useAxios({
    url: "/api/user/get_unassigned_project",
    headers: false,
    method: "GET",
  });
  const getUnAssignedProject = () => {
    sendRequest(
      {},
      (res) => {
        setPostedProject(res.data.data);
        setProjectHolder(res.data.data);
        paginate(1);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  //paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPage]);
  useEffect(() => {
    getUnAssignedProject();
  }, []);

  const checkOutProject = (detail) => {
    window.open("https://freelance.gokapinnotech.com/signup", "_blank");
  };

  return {
    loading,
    getUnAssignedProject,
    postedProject,
    checkOutProject,
    timeAgo,
    projectHolder,
    currentPage,
  };
};

export default usePostedProject;
