import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ExperienceText = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-4  mt-8 text-center text-secondary justify-self-center"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 lg:mb-8 underline underline-offset-8 decoration-1 decoration-secondary">
            {t("experience.title")}
          </h1>
          <p className="text-xl lg:text-2xl mb-6 text-secondary/70">{t("experience.subtitle")}</p>

      <p className="text-base-200 mx-6 text-base md:text-lg leading-relaxed">
        {t("experience.part1")}
      </p>
      <p className="text-base-200 mx-6 my-8 text-base md:text-lg leading-relaxed">
        {t("experience.part2")}
      </p>
      <p className="text-base-200 mx-6 my-8 text-base md:text-lg leading-relaxed">
        {t("experience.part3")}
      </p>
    </motion.section>
  );
};

export default ExperienceText;
