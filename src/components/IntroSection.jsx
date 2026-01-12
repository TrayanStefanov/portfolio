import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const IntroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Trayan_Stefanov_CV.pdf";
    link.click();
  };

  return (
    <section className="text-center mt-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-base-200 text-[36px] md:text-xl"
      >
        {t("home.intro.value1")}
        <span className="text-secondary">!</span>
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl md:text-5xl font-bold text-base-200 mt-2 underline underline-offset-8 decoration-1 decoration-secondary"
      >
        {t("home.intro.value2")}
        <span className="text-secondary">.</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-2xl text-base-200 font-semibold mt-2"
      >
        {t("home.intro.value3")}
      </motion.h2>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-4 mt-8"
      >
        <button
          onClick={() => navigate("/contacts")}
          className="btn btn-accent rounded-none text-secondary px-6"
        >
          {t("home.intro.cta.contact")}
        </button>

        <button
          onClick={downloadCV}
          className="btn btn-outline rounded-xs btn-secondary px-6 text-secondary hover:text-primary"
        >
          {t("home.intro.cta.cv")}
        </button>
      </motion.div>
    </section>
  );
};

export default IntroSection;
