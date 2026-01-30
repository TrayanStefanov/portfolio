import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KeywordContext = ({ label, tooltip, side = "right" }) => {
  const [open, setOpen] = useState(false);
  const [vertical, setVertical] = useState("top");
  const ref = useRef(null);

  const isRight = side === "right";

  const handleOpen = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const middleOfScreen = window.innerHeight / 2;

      // If the word is in the top half → tooltip goes below
      setVertical(rect.top < middleOfScreen ? "bottom" : "top");
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <span
      ref={ref}
      className="relative inline-block"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onClick={() => (open ? handleClose() : handleOpen())} // mobile tap
    >
      {/* Visible word */}
      <span className="text-secondary/70 font-semibold cursor-help">
        {label}
      </span>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: vertical === "top" ? 10 : -10,
              scale: 0.95,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: vertical === "top" ? 10 : -10,
              scale: 0.95,
            }}
            transition={{ duration: 0.2 }}
            className={`
              absolute z-50 w-64 mx-3 p-1 md:p-2 lg:p-4 rounded-xl
              border border-secondary/40
              bg-primary/90 backdrop-blur-md shadow-xl
              text-sm text-secondary

              ${
                vertical === "top"
                  ? "bottom-full mb-4"
                  : "top-full mt-4"
              }
              left-1/2 -translate-x-1/2 sm:left-auto
            `}
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default KeywordContext;
