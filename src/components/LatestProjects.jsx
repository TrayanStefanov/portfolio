import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const LatestProjects = () => {
  const { t } = useTranslation();

  const rawProjects = t("projects.items", { returnObjects: true });
  const projects = Array.isArray(rawProjects) ? rawProjects : [];

  return (
    <section className="my-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-200 text-center mb-10 underline underline-offset-8 lg:underline-offset-16 decoration-1 lg:decoration-2 decoration-secondary">
        {t("projects.title")}
      </h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard project={project} onSelect={() => {}} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LatestProjects;
