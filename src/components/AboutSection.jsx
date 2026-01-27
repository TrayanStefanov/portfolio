import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto mt-8 lg:mt-0 text-center"
    >
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-base-200 mb-6 underline underline-offset-8 decoration-1 lg:underline-offset-16 lg:decoration-2 decoration-secondary">
        {t("home.about.title")}
      </h2>

      <p className="text-secondary/70 text-base md:text-lg lg:text-lg leading-relaxed">
        {t("home.about.description")}
      </p>
      <button
        onClick={() => navigate("/about")}
        className="btn btn-outline rounded-xs btn-secondary mt-6 text-lg"
      >
        {t("home.about.cta")}
      </button>
    </motion.section>
  );
};

export default AboutSection;
