import { createContext, useReducer } from "react";
import { projectReducer } from "../../reducer/reducer";
import { projectDummyData } from "../constants/status";

export const ProjectContext = createContext();
const ProjectContextProvider = ({ children }) => {
  const [projectData, projectDispatch] = useReducer(projectReducer, {
    data: projectDummyData,
  });

  return (
    <ProjectContext.Provider value={{ projectData, projectDispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
