import { useNavigate } from "react-router-dom";
const ProjectCard = ({ project, onSelect }) => {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => e.key === "Enter" && onSelect(project)}
      className=" shadow-md rounded-none overflow-hidden cursor-pointer hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <img
        src={project.mainImage}
        alt={project.title}
        loading="lazy"
        className="w-full h-60 object-cover"
      />
      <div className="p-4 text-left">
        <h3 className="text-2xl text-white font-semibold">
          <span className="text-secondary">{"<"}</span>
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mt-1">{project.description}</p>
        <div className="flex justify-end">
          <button
            onClick={() =>
              navigate(`/projects/${project.slug || "coming-soon"}`)
            }
            className="btn btn-sm btn-outline rounded-xs btn-secondary mt-4 hover:text-primary"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
