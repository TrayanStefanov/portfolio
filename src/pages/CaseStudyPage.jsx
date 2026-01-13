import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StepCard from "../components/StepCard";
import TechStack from "../components/TechStack";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const rawProjects = t("projects.items", { returnObjects: true });
  const projects = Array.isArray(rawProjects) ? rawProjects : [];

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-center mt-[4rem]">{t("projects.caseStudy.notFound")}<span className="text-secondary">.</span></p>;
  }

  return (
    <section className="max-w-6xl rounded-xs mx-auto mt-[4rem] px-4 py-16">
      {/* Intro */}
      <header className="mb-8 mx-4 grid md:grid-cols-2 gap-10 items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-base-200 text-center mb-4">
            {project.title}
          </h1>
          <p className="text-base-300 text-xl mb-6">{project.intro}</p>

          {/* Meta */}
          <div className="text-base text-base-300">
            <p>
              <strong>{t("projects.caseStudy.category")}<span className="text-secondary">:</span></strong>{" "}
              {project.category === "freelance"
                ? "Freelance Project"
                : "Personal Project"}
            </p>
            {project.year && (
              <p>
                <strong>{t("projects.caseStudy.year")}<span className="text-secondary">:</span></strong> {project.year}
              </p>
            )}
          </div>
        {/* CTA buttons */}
        {project.links && (
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent rounded-none text-secondary px-6"
              >
                {t("projects.caseStudy.links.live")}
              </a>
            )}

            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent rounded-none text-secondary px-6"
              >
                {t("projects.caseStudy.links.demo")}
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent rounded-none text-secondary px-6"
              >
                {t("projects.caseStudy.links.github")}
              </a>
            )}
          </div>
        )}

        {project.mainImage && (
          <img
            src={project.mainImage}
            alt={project.title}
            className="rounded border border-white/10"
          />
        )}
      </header>

      {/* Tech Stack */}
      {project.tech && project.tech.length > 0 && (
        <section className="mb-6 mx-10">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">{t("projects.caseStudy.tech")}</h2>
          <TechStack tech={project.tech} />
        </section>
      )}

      {/* Steps */}
      <h2 className="text-3xl font-semibold text-center text-white mb-16">
        {t("projects.caseStudy.breakdown")}
      </h2>
      <section>
        {project.steps?.map((step, index) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </section>
    </section>
  );
};

export default CaseStudyPage;
