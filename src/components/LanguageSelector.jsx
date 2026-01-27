import { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18next.language);
  const [open, setOpen] = useState(false);

  const changeLanguage = (code) => {
    setLanguage(code);
    i18next.changeLanguage(code);
    setOpen(false);
  };

  useEffect(() => {
    document.body.dir = "ltr";
  }, [i18n.language]);

  const languages = [
    { label: t("language.en"), short: "EN", code: "en" },
    { label: t("language.bg"), short: "BG", code: "bg" },
  ];

  const current = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="relative font-pf select-none justify-end rounded-xl">
      <div className="hidden md:block">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1 py-1 rounded-full text-secondary font-bold lg:font-semibold cursor-pointer
                     text-lg md:text-lg 2xl:text-3xl hover:text-secondary transition-colors"
        >
          <span className="relative">
            {current.label}

            <span className="absolute left-0 -bottom-1 h-2px w-full bg-current rounded-full" />
          </span>

          <span className="ml-1">▾</span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="absolute right-0 mt-2 rounded-md bg-primary shadow-lg border border-secondary overflow-hidden z-50"
            >
              {languages.map((lang) => {
                const active = lang.code === language;

                return (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full px-4 py-2 text-left font-bold transition-colors
                      ${
                        active
                          ? "text-secondary"
                          : "text-secondary-content hover:text-secondary hover:cursor-pointer"
                      }`}
                  >
                    {lang.label}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex md:hidden items-center">
        {languages.map((lang, index) => {
          const active = lang.code === language;

          return (
            <div key={lang.code} className="flex items-center">
              <button
                onClick={() => changeLanguage(lang.code)}
                className={`relative flex items-center text-lg font-bold transition-colors
                  ${
                    active
                      ? "text-secondary"
                      : "text-secondary-content hover:text-secondary hover:cursor-pointer"
                  }`}
              >
                <span>{lang.short}</span>

                  <motion.span
                    layoutId="mobile-lang-underline"
                    className="absolute left-0 -bottom-1 h-2px w-full bg-current rounded-full"
                  />
              </button>

              {index === 0 && <div className="w-0.5 h-6 bg-secondary mx-2" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
