import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const tech = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "React", icon: FaReact },
  { name: "GitHub", icon: FaGithub },
  { name: "Git", icon: FaGitAlt },
];

// Parent container animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// Individual item animation
const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

const TechStack = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-secondary text-sm md:text-base font-semibold"
    >
      {tech.map(({ name, icon: Icon }) => (
        <motion.div
          key={name}
          variants={item}
          whileHover={{ y: -4, scale: 1.06 }}
          className="flex items-center gap-1 cursor-default
                     transition-colors hover:text-secondary
                     hover:drop-shadow-[0_0_6px_rgba(0,255,0,0.6)]"
        >
          <Icon className="text-lg md:text-xl" />
          <span>{name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;
