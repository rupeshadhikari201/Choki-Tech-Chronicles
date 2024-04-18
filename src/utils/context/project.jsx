import { createContext, useEffect, useReducer, useState } from "react";
import { projectReducer } from "../../reducer/reducer";
import axios from "axios";
import { base_url } from "../constants/path";
import { ACTION_TYPE } from "../../reducer/action/action";
import Cookies from "js-cookie";
export const ProjectContext = createContext();
const ProjectContextProvider = ({ children }) => {
  const [projectData, projectDispatch] = useReducer(projectReducer, {
    data: [],
  });
  const [projectLoading, setProjectLoading] = useState(false);
  const [loadProject, setLoadProject] = useState(false);
  const [currentProject, setCurrentProject] = useState({});
  useEffect(() => {
    setProjectLoading(true);
    axios
      .get(base_url + "/api/user/get-client-project/", {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((res) => {
        projectDispatch({
          type: ACTION_TYPE.SET_PROJECT,
          payload: res.data,
        });
      })
      .catch((e) => console.log("Fetching project", e.message))
      .finally(() => setProjectLoading(false));
  }, [loadProject]);
  return (
    <ProjectContext.Provider
      value={{
        projectData,
        projectDispatch,
        projectLoading,
        setLoadProject,
        currentProject,
        setCurrentProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
