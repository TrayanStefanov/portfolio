import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import KeywordContext from "./KeywordContext";

const ExperienceText = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-4 mt-8 text-center text-secondary justify-self-center"
    >
      {/* Title */}
      <h1 className="text-xl lg:text-2xl mb-6 text-secondary/70">
        {t("experience.title")}
      </h1>

      {/* Part 1 */}
      <p className="text-base-200 mx-6 text-base md:text-lg leading-relaxed">
        <Trans
          i18nKey="experience.part1"
          components={{
            leadership: (
              <KeywordContext
                label={t("experience.keywords.leadership.label")}
                tooltip={t("experience.keywords.leadership.tooltip")}
              />
            ),
            dynamic: (
              <KeywordContext
                label={t("experience.keywords.dynamic.label")}
                tooltip={t("experience.keywords.dynamic.tooltip")}
              />
            )
          }}
        />
      </p>

      {/* Part 2 */}
      <p className="text-base-200 mx-6 my-8 text-base md:text-lg leading-relaxed">
        <Trans
          i18nKey="experience.part2"
          components={{
            ownership: (
              <KeywordContext
                label={t("experience.keywords.ownership.label")}
                tooltip={t("experience.keywords.ownership.tooltip")}
              />
            ),
            communication: (
              <KeywordContext
                label={t("experience.keywords.communication.label")}
                tooltip={t("experience.keywords.communication.tooltip")}
              />
            ),
            clients: (
              <KeywordContext
                label={t("experience.keywords.clients.label")}
                tooltip={t("experience.keywords.clients.tooltip")}
              />
            )
          }}
        />
      </p>
    </motion.section>
  );
};

export default ExperienceText;
