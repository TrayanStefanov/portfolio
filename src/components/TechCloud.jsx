import { useState, useRef, useEffect } from "react";
import TechNode from "./TechNode";
import ProfileImage from "../components/ProfileImage";


// Corner labels as percentages
const CORNER_POSITIONS = {
  frontend: { xPerc: 0, yPerc: 0 },
  backend: { xPerc: 1, yPerc: 0 },
  data: { xPerc: 0, yPerc: 1 },
  tools: { xPerc: 1, yPerc: 1 },
};

// Node layouts relative to corner (responsive)
const NODE_LAYOUTS = {
  frontend: [
    { x: 0.04, y: 0.12 },
    { x: 0.22, y: 0.06 },
    { x: 0.06, y: 0.23 },
    { x: 0.16, y: 0.16 },
  ],
  backend: [
    { x: -0.22, y: 0.1 },
    { x: -0.08, y: 0.13 },
    { x: -0.18, y: 0.22 },
  ],
  data: [
    { x: 0.06, y: -0.2 },
    { x: 0.14, y: -0.1 },
  ],
  tools: [
    { x: -0.22, y: -0.18 },
    { x: -0.14, y: -0.14 },
    { x: -0.14, y: -0.25 },
  ],
};

const TECH_GROUPS = {
  frontend: ["HTML", "CSS", "React", "Tailwind"],
  backend: ["Node.js", "Express", "MongoDB"],
  data: ["MongoDB", "Upstash"],
  tools: ["Git", "GitHub", "Figma"],
};

const TechCloud = () => {
  const [bounds, setBounds] = useState({ minX: 0, maxX: 1, minY: 0, maxY: 1 });
  const containerRef = useRef(null);

  useEffect(() => {
    const updateBounds = () => {
      if (!containerRef.current) return;
      const { offsetWidth, offsetHeight } = containerRef.current;
      setBounds({
        minX: 0,
        maxX: offsetWidth,
        minY: 0,
        maxY: offsetHeight,
      });
    };
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[90%] xl:max-w-[70vw] aspect-video mx-auto my-12"
    >
      {/* Center FULLSTACK label */}
      <div
        className="absolute inset-0 flex items-center justify-center"
      >
        <ProfileImage />
      </div>

      {/* Corner labels */}
      {Object.entries(CORNER_POSITIONS).map(([groupKey, pos]) => (
        <div
          key={groupKey}
          className="absolute text-lg lg:text-2xl font-bold text-secondary p-2"
          style={{
            left: `${pos.xPerc * 100}%`,
            top: `${pos.yPerc * 100}%`,
            transform: `${pos.xPerc === 1 ? "translateX(-100%)" : ""} ${
              pos.yPerc === 1 ? "translateY(-100%)" : ""
            }`,
          }}
        >
          {groupKey.charAt(0).toUpperCase() + groupKey.slice(1)}
        </div>
      ))}

      {/* Tech nodes */}
      {Object.entries(TECH_GROUPS).map(([groupKey, items]) =>
        items.map((tech, i) => (
          <TechNode
            key={tech}
            label={tech}
            bounds={bounds}
            containerRef={containerRef}
            corner={CORNER_POSITIONS[groupKey]}
            layout={NODE_LAYOUTS[groupKey][i]}
          />
        ))
      )}
    </div>
  );
};

export default TechCloud;
