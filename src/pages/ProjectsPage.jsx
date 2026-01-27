import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";

const getLatestByCategory = (projects, category, limit = 2) =>
  projects
    .filter((p) => p.category === category)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);

const ProjectsPage = () => {
  const { t } = useTranslation();

  const projects = t("projects.items", { returnObjects: true });

  const freelanceProjects = getLatestByCategory(projects, "freelance");
  const personalProjects = getLatestByCategory(projects, "personal");

  return (
    <section className="max-w-6xl lg:mt-12 mx-auto px-4 py-16">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl 2xl:text-5xl font-bold text-white">
          <span className="underline underline-offset-[10px] decoration-2 decoration-secondary">{t("projects.page.titlePart1")}</span>{" "}
          <span className="text-secondary underline underline-offset-[10px] decoration-2 decoration-base-100">
            {t("projects.page.titlePart2")}
          </span>
        </h1>
        <p className="text-base-200 lg:text-2xl mt-2">{t("projects.page.subtitle")}</p>
      </header>

      {/* Freelance Projects */}
      <div className="mb-20">
        <h2 className="text-3xl 2xl:text-4xl font-semibold text-base-200 mb-6 justify-self-center">
          <span className="text-secondary">{"<"}</span> 
          {t("projects.freelance.title")}
          <span className="text-secondary">{">"}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {freelanceProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* Personal Projects */}
      <div>
        <h2 className="text-3xl 2xl:text-4xl font-semibold text-base-200 mb-6 justify-self-center">
          <span className="text-secondary">{"<"}</span> 
          {t("projects.personal.title")}
          <span className="text-secondary">{">"}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
