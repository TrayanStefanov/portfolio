import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KeywordContext = ({ label, tooltip, side = "right" }) => {
  const [open, setOpen] = useState(false);
  const isRight = side === "right";

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Visible word */}
      <span className="text-secondary/70 font-semibold cursor-help">{label}</span>

      {/* Tooltip */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: isRight ? 10 : -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: isRight ? 10 : -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-1/2 -translate-y-1/2 z-50
              ${isRight ? "left-full ml-4" : "right-full mr-4"}
              w-64 p-4 rounded-xl border border-secondary/40
              bg-primary/90 backdrop-blur-md shadow-xl text-sm text-secondary`}
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default KeywordContext;
