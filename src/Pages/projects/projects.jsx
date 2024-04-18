import { useContext, useEffect } from "react";
import CustomerProjectTable from "../dashboard/customer/projects";
import { ProjectContext } from "../../utils/context/project";
import PostedProjects from "../dashboard/agent/projects";
import { AuthContext } from "../../utils/context/auth";

const Projects = () => {
  const { projectData, projectDispatch } = useContext(ProjectContext);
  const { userState } = useContext(AuthContext);
  useEffect(() => {}, []);
  if (userState.user.user_type == "client")
    return (
      <div className={`text-black-variant-1 ps-2`}>
        <h5 className={`font-weight-400`}>All Projects</h5>
        <CustomerProjectTable
          data={projectData.data}
          projectDispatch={projectDispatch}
        />
      </div>
    );
  else
    return (
      <div className={`text-black-variant-1 ps-2`}>
        <h5 className={`font-weight-400`}>All Projects</h5>
        <PostedProjects
          data={projectData.data}
          projectDispatch={projectDispatch}
        />
      </div>
    );
};

export default Projects;
