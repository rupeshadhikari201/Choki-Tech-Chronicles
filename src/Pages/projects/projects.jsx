import { useContext, useEffect } from "react";
import CustomerProjectTable from "../dashboard/customer/projects";
import { ProjectContext } from "../../utils/context/project";

const Projects = () => {
  const { projectData, projectDispatch } = useContext(ProjectContext);
  useEffect(() => {
    console.log("Data from projects page");
    console.log(projectData);
  }, []);
  return (
    <div className={`text-black-variant-1 ps-2`}>
      <h5 className={`font-weight-400`}>All Projects</h5>
      <CustomerProjectTable
        data={projectData.data}
        projectDispatch={projectDispatch}
      />
    </div>
  );
};

export default Projects;
