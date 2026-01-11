import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "justify-end text-secondary px-4 py-2 font-bold rounded-none"
      : "justify-end text-secondary-content px-4 py-2 font-bold hover:text-secondary rounded-none";

  // Variants for staggered menu items
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Variants for staggered mobile nav items
  const mobileListVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <motion.div
        animate={{
          backgroundColor:
            scrollY > 50 ? "rgba(18,31,40,1)" : "rgba(18,31,40,0.8)",
          backdropFilter: scrollY > 50 ? "blur(8px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
        className="navbar justify-between relative"
      >
        {/* Logo */}
        <div className="navbar-start h-60px">
          <Link to="/" className="flex items-center">
            <span className="text-secondary-content font-bold text-2xl">
              {"<"}
            </span>
            <span className="text-secondary text-2xl font-bold mx-1">
              TrayanS
            </span>
            <span className="text-secondary-content font-bold text-2xl">
              {"/>"}
            </span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="navbar-end w-[70vw] hidden md:flex xl:me-20 2xl:me-40 font-pf">
          <motion.ul
            className="menu menu-horizontal md:text-lg lg:text-xl text-secondary-content items-center relative"
            initial="hidden"
            animate="show"
            variants={mobileListVariants}
          >
            {[
              { path: "/", label: t("navbar.home") },
              { path: "/about", label: t("navbar.about") },
              { path: "/projects", label: t("navbar.projects") },
              { path: "/contacts", label: t("navbar.contacts") },
            ].map(({ path, label }) => {
              const active = location.pathname === path;
              return (
                <motion.li
                  key={path}
                  variants={mobileItemVariants}
                  className="px-1 relative group"
                >
                  <Link
                    to={path}
                    className={`relative inline-block hover:text-accent px-2 py-1 transition-colors font-bold ${
                      active ? "text-secondary" : "text-secondary-content"
                    }`}
                  >
                    {label}

                    {/* Only active link gets layoutId for smooth motion */}
                    {active && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 bottom-0 h-0.5 bg-secondary rounded-2xl w-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}

            <motion.li variants={mobileItemVariants} className="px-1 mx-2">
              <LanguageSelector />
            </motion.li>
          </motion.ul>
        </div>

        {/* Mobile burger */}
        <div className="block md:hidden ">
          <button
            className="relative z-50 p-1 border-2 border-secondary rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-secondary"
              fill="none"
              viewBox="0 0 28 28"
              stroke="currentColor"
              animate={isOpen ? "open" : "closed"}
            >
              {/* Top — 100% */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                variants={{
                  closed: { d: "M4 7h20" },
                  open: { d: "M8 20L20 8" },
                }}
              />

              {/* Middle — 75% */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                variants={{
                  closed: { d: "M9 14h15", opacity: 1 },
                  open: { opacity: 0 },
                }}
              />

              {/* Bottom — 50% */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                variants={{
                  closed: { d: "M14 21h10" },
                  open: { d: "M8 8L20 20" },
                }}
              />
            </motion.svg>
          </button>

          {/* Backdrop + Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-primary/40 z-40"
                  onClick={() => setIsOpen(false)}
                />

                {/* Dropdown menu */}
                <motion.ul
                  id="mobile-menu"
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={menuVariants}
                  className="menu absolute top-full right-0 bg-primary text-secondary-content z-50 w-screen border-t-2 border-secondary p-0 mx-auto items-end"
                >
                  {[
                    { path: "/", label: t("navbar.home") },
                    { path: "/about", label: t("navbar.about") },
                    { path: "/projects", label: t("navbar.projects") },
                    { path: "/contacts", label: t("navbar.contacts") },
                  ].map(({ path, label }) => (
                    <motion.li
                      key={path}
                      variants={itemVariants}
                      className="w-full border-b border-primary flex justify-end"
                    >
                      <Link
                        to={path}
                        className={isActive(path)}
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </Link>
                    </motion.li>
                  ))}

                  <motion.li
                    variants={itemVariants}
                    className="w-full flex justify-end"
                  >
                    <LanguageSelector />
                  </motion.li>
                </motion.ul>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
