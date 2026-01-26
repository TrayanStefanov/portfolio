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
    <section className="text-center mt-6 content-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-base-200 text-4xl lg:text-6xl"
      >
        {t("home.intro.value1")}
        <span className="text-secondary">!</span>
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl lg:text-5xl text-base-200 mt-2 lg:mt-8 underline underline-offset-[12px] decoration-2 decoration-secondary"
      >
        {t("home.intro.value2")}
        <span className="text-secondary">.</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl lg:text-5xl text-base-200 font-semibold mt-2 lg:mt-4"
      >
        {t("home.intro.value3")}
      </motion.h2>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center lg:text-5xl gap-4 lg:gap-20 mt-8 lg:mt-16"
      >
        <button
          onClick={() => navigate("/contacts")}
          className="btn btn-accent lg:scale-150 rounded-none text-secondary px-6"
        >
          {t("home.intro.cta.contact")}
        </button>

        <button
          onClick={downloadCV}
          className="btn btn-outline lg:scale-150 rounded-xs btn-secondary px-6 text-secondary hover:text-primary"
        >
          {t("home.intro.cta.cv")}
        </button>
      </motion.div>
    </section>
  );
};

export default IntroSection;
