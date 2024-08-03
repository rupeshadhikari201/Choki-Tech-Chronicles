import RoundedText from "../../../components/rounded_text/rounded_text";
import usePostedProject from "../hooks/used_posted_project";
import PostedProjectSkeleton from "./posted_project_skeleton";

const PostedProject = () => {
  const postedProject = usePostedProject();
  return (
    <div>
      {/* Project cards */}
      <div className="mb-4"></div>{" "}
      <div className={`mb-3 bg-white-v-4 rounded border-card overflow-hidden`}>
        <div className="col">
          {postedProject.loading ? (
            <>
              <PostedProjectSkeleton />
              <PostedProjectSkeleton />
            </>
          ) : (
            postedProject.postedProject.map((project, index) => {
              return (
                <ProjectPostedCard
                  key={index}
                  agentBoard={postedProject}
                  project={project}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default PostedProject;

export const ProjectPostedCard = ({ postedProject, project }) => {
  return (
    <div
      className="border-card rounded project-card-wrapper bg-white-v-4  px-3 py-3 cursor-pointer"
      style={{
        width: "100%",
      }}
      onClick={() => postedProject.checkOutProject(project)}
    >
      <div className="d-flex justify-content-between">
        <p className="m-0 text-black-variant-3" style={{ fontSize: "14px" }}>
          {postedProject.timeAgo.format(new Date(project.created_at))}
        </p>
      </div>
      {/* title */}
      <h6 className="project-title my-2 text-capitalize">{project.title}</h6>
      {/* Description */}
      <p className="project-description my-3 text-sm text-black-variant-3">
        {project.description}
      </p>
      <div className="d-flex gap-3 flex-wrap my-3 text-sm">
        {project.skills_required.map((skill, index) => (
          <RoundedText text={skill} key={index} />
        ))}
      </div>
      <div className="card-bottom d-flex justify-content-between">
        <div className="d-flex gap-4">
          <p
            className="d-flex gap-1 flex-sm-row flex-column"
            style={{ fontSize: "14px" }}
          >
            <span className="text-black-variant-2">Est Submission </span>
            <span className="text-black-variant-3">
              {new Date(project.project_deadline).toDateString()}
            </span>
          </p>
          <p className="text-black-variant-3 font-weight-300">
            Proposals:{" "}
            {project.applied_count <= 5
              ? "0 to 5"
              : project.applied_count <= 10
              ? "5 to 10"
              : "10 to 20"}
          </p>
        </div>
        <p>
          Budget <br />
          {project.project_price}
          {" Nu"}
        </p>
      </div>
    </div>
  );
};
