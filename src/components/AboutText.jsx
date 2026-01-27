import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import KeywordContext from "./KeywordContext";

const AboutText = () => {
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
      <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 lg:mb-8 underline underline-offset-8 decoration-1 decoration-secondary">
        {t("about.title")}
      </h1>

      {/* Subtitle */}
      <p className="text-xl 2xl:text-2xl mb-6 text-secondary/70">
        {t("about.subtitle")}
      </p>

      {/* Part 1 */}
      <p className="text-base-200 mx-6 text-base 2xl:text-lg leading-relaxed">
        <Trans
          i18nKey="about.part1"
          components={{
            mern: (
              <KeywordContext
                label={t("about.keywords.mern.label")}
                tooltip={t("about.keywords.mern.tooltip")}
              />
            )
          }}
        />
      </p>

      {/* Part 2 */}
      <p className="text-base-200 m-6 text-base md:text-lg leading-relaxed">
        <Trans
          i18nKey="about.part2"
          components={{
            freelance: (
              <KeywordContext
                label={t("about.keywords.freelance.label")}
                tooltip={t("about.keywords.freelance.tooltip")}
              />
            )
          }}
        />
      </p>

      <p className="text-base-200 mx-6 text-base md:text-lg leading-relaxed">
        <Trans
          i18nKey="about.part3"
          components={{
            reliability: (
              <KeywordContext
                label={t("about.keywords.reliability.label")} // visible word
                tooltip={t("about.keywords.reliability.tooltip")}
              />
            ),
            scalability: (
              <KeywordContext
                label={t("about.keywords.scalability.label")}
                tooltip={t("about.keywords.scalability.tooltip")}
              />
            ),
            ux: (
              <KeywordContext
                label={t("about.keywords.ux.label")}
                tooltip={t("about.keywords.ux.tooltip")}
              />
            ),
            easier: (
              <KeywordContext
                label={t("about.keywords.easier.label")}
                tooltip={t("about.keywords.easier.tooltip")}
              />
            ),
            AI: (
              <KeywordContext
                label={t("about.keywords.AI.label")}
                tooltip={t("about.keywords.AI.tooltip")}
              />
            ),
            Cloud: (
              <KeywordContext
                label={t("about.keywords.Cloud.label")}
                tooltip={t("about.keywords.Cloud.tooltip")}
              />
            )
          }}
        />
      </p>
    </motion.section>
  );
};

export default AboutText;
