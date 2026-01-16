import { useNavigate } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useTranslation } from "react-i18next";

const techIcons = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  "Node.js": FaNodeJs,
  React: FaReact,
  Tailwind: SiTailwindcss,
  Git: FaGitAlt,
  GitHub: FaGithub,
};

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToProject = () => {
    navigate(`/projects/${project.slug || "coming-soon"}`);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={goToProject}
      onKeyDown={(e) => e.key === "Enter" && goToProject()}
      className="
        cursor-pointer overflow-hidden
        border border-white/5
        shadow-md hover:shadow-lg
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-accent
      "
    >
      <img
        src={project.mainImage}
        alt={project.title}
        loading="lazy"
        className="w-full h-44 md:h-60 object-cover"
      />

      <div className="p-4 text-left">
        <h3 className="text-2xl lg:text-3xl font-semibold text-white">
          <span className="text-secondary mr-1">{">"}</span>
          {project.title}
        </h3>

        <p className="text-sm lg:text-lg text-gray-400 mt-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Icons */}
        {project.tech && (
          <div className="flex gap-3 mt-3 text-secondary">
            {project.tech.slice(0, 5).map((tech) => {
              const Icon = techIcons[tech];
              return Icon ? (
                <Icon key={tech} className="text-lg lg:text-2xl" title={tech} />
              ) : null;
            })}
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToProject();
            }}
            className="
              btn btn-sm btn-outline
              rounded-xs btn-secondary
              mt-4 lg:text-xl  hover:text-primary
            "
          >
            {t("projects.cta")}
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProjectCard;
