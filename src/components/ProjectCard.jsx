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
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/projects/${project.slug || "coming-soon"}`)}
      onKeyDown={(e) =>
        e.key === "Enter" &&
        navigate(`/projects/${project.slug || "coming-soon"}`)
      }
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
        <h3 className="text-2xl font-semibold text-white">
          <span className="text-secondary">{">"}</span>
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mt-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Icons */}
        {project.tech && (
          <div className="flex gap-3 mt-3 text-secondary">
            {project.tech.slice(0, 5).map((tech) => {
              const Icon = techIcons[tech];
              return Icon ? (
                <Icon key={tech} className="text-lg" title={tech} />
              ) : null;
            })}
          </div>
        )}

        <div className="flex justify-end">
          <button
            className="
              btn btn-sm btn-outline
              rounded-xs btn-secondary
              mt-4 hover:text-primary
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
