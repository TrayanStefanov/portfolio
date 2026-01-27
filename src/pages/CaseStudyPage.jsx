import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StepCard from "../components/StepCard";
import TechStack from "../components/TechStack";
import ListBlock from "../components/ListBlock";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const rawProjects = t("projects.items", { returnObjects: true });
  const projects = Array.isArray(rawProjects) ? rawProjects : [];

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <p className="text-center mt-[4rem]">
        {t("projects.caseStudy.notFound")}
        <span className="text-secondary">.</span>
      </p>
    );
  }

  return (
    <section className="max-w-6xl rounded-xs mx-auto mt-[2rem] lg:mt-[8rem] px-4 py-16">
      {/* Intro */}
      <header className="mb-8 mx-4 flex flex-col gap-10 items-center">
        <h1 className="hidden lg:block text-3xl md:text-5xl font-semibold text-secondary text-center mb-4">
          {project.title}
        </h1>
        <div>
          {project.mainImage && (
            <img
              src={"/portfolio/" + project.mainImage}
              alt={project.title}
              className="hidden lg:block rounded border border-white/10"
            />
          )}
          {project.links && (
            <div className="hidden lg:flex flex-wrap justify-center gap-4 mt-10">
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
        </div>
        <div>
          {project.mainImage && (
            <img
              src={"/portfolio/" + project.mainImage}
              alt={project.title}
              className="rounded border lg:hidden mb-4 border-white/10"
            />
          )}
          <h1 className="lg:hidden text-3xl md:text-5xl font-bold text-base-200 text-center mb-4">
            {project.title}
          </h1>
          <p className="hidden lg:block text-base-300 text-lg lg:text-2xl mb-6">
            {project.intro}
          </p>
          <div className="hidden lg:block text-base text-base-300">
            <p>
              <strong>
                {t("projects.caseStudy.category")}
                <span className="text-secondary">:</span>
              </strong>{" "}
              {project.category === "freelance"
                ? "Freelance Project"
                : "Personal Project"}
            </p>
            {project.year && (
              <p>
                <strong>
                  {t("projects.caseStudy.year")}
                  <span className="text-secondary">:</span>
                </strong>{" "}
                {project.year}
              </p>
            )}
            {project.role && (
              <p>
                <strong>
                  {t("projects.caseStudy.role")}
                  <span className="text-secondary">:</span>
                </strong>{" "}
                {project.role}
              </p>
            )}
          </div>
          {project.tech && project.tech.length > 0 && (
            <section className="hidden lg:block mb-6 mx-10">
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                {t("projects.caseStudy.tech")}
              </h2>
              <TechStack tech={project.tech} />
            </section>
          )}
        </div>
        <p className="block lg:hidden text-base-300 text-lg mb-6">
          {project.intro}
        </p>

        {/* Meta */}
        <div className="lg:hidden w-full text-base text-base-300 text-left">
          <p>
            <strong>
              {t("projects.caseStudy.category")}
              <span className="text-secondary">:</span>
            </strong>{" "}
            {project.category === "freelance"
              ? "Freelance Project"
              : "Personal Project"}
          </p>
          {project.year && (
            <p>
              <strong>
                {t("projects.caseStudy.year")}
                <span className="text-secondary">:</span>
              </strong>{" "}
              {project.year}
            </p>
          )}
          {project.role && (
            <p>
              <strong>
                {t("projects.caseStudy.role")}
                <span className="text-secondary">:</span>
              </strong>{" "}
              {project.role}
            </p>
          )}
        </div>
        {/* CTA buttons */}
        {project.links && (
          <div className="lg:hidden flex  flex-wrap justify-center gap-4 mb-2">
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

        {/* {project.mainImage && (
          <img
            src={project.mainImage}
            alt={project.title}
            className="rounded border lg:hidden border-white/10"
          />
        )} */}
      </header>

      {/* Tech Stack */}
      {project.tech && project.tech.length > 0 && (
        <section className="lg:hidden mb-6 mx-10">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            {t("projects.caseStudy.tech")}
          </h2>
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
      <h3 className="text-xl lg:text-4xl font-semibold text-base-200 m-8">
        {project.summary.subtitle1}
      </h3>

      <ListBlock items={project.summary.chalenges || []} />

      <h3 className="text-xl lg:text-4xl font-semibold text-base-200 m-8">
        {project.summary.subtitle2}
      </h3>

      <ListBlock items={project.summary.learnings || []} />
    </section>
  );
};

export default CaseStudyPage;
