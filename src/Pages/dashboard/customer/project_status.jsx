import { TickCircle } from "iconsax-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectDummyData } from "../../../utils/constants/status";
import { ProjectContext } from "../../../utils/context/project";

const ProjectStatus = () => {
  const { id } = useParams();
  const { projectData } = useContext(ProjectContext);
  const [projectDetail, setProjectDetail] = useState({});
  useEffect(() => {
    if (id > projectData?.data.length) {
      setProjectDetail({});
    } else setProjectDetail(projectData?.data[id]);
  }, []);
  const [projectStatus, setProjectStatus] = useState([
    {
      name: "Project Assigned",
      state: true,
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
      <div className={`bg-white-variant-4 p-2 mb-3`}>
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
            <div className={`bg-white-variant-4 col p-2`}>
              {" "}
              Budget
              <div className="h-100 w-100 mt-3">
                <h3 className="font-weight-400 text-center">
                  {projectDetail?.budget}
                </h3>
              </div>
            </div>
            <div className={`bg-white-variant-4 col p-2`}>
              {" "}
              Posted Date
              <div className="h-100 w-100 mt-3">
                <p>{projectDetail?.created}</p>
              </div>
            </div>
          </div>

          <div className={`bg-white-variant-4 col p-2`}>
            skill required
            <div className="d-flex gap-4 mt-3 flex-wrap">
              {projectDetail.skill
                ? projectDetail.skill.map((sk, index) => (
                    <div
                      key={index}
                      className="border px-3 py-1"
                      style={{ borderRadius: "30px" }}
                    >
                      {sk}
                    </div>
                  ))
                : ""}
              <div
                className="border px-3 py-1"
                style={{ borderRadius: "30px" }}
              >
                Managment
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-white-variant-4 col p-2`} style={{ height: 300 }}>
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

      <div className={`bg-white-variant-4 p-2 mb-3`}>
        <h5>Project Progress</h5>
        <p>Screen shot</p>
      </div>
    </div>
  );
};

export default ProjectStatus;
