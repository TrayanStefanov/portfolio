import { useState, useRef } from "react";
import TechNode from "./TechNode";

// Corner positions as percentages for labels
const CORNER_LABELS = {
  frontend: { xPerc: 0, yPerc: 0 },
  backend: { xPerc: 1, yPerc: 0 },
  data: { xPerc: 0, yPerc: 1 },
  tools: { xPerc: 1, yPerc: 1 },
};

// Tech items
const TECH_GROUPS = {
  frontend: ["HTML", "CSS", "React", "Tailwind"],
  backend: ["Node.js", "Express", "MongoDB"],
  data: ["PostgreSQL", "Firebase"],
  tools: ["Git", "GitHub", "Figma"],
};

// Bounds for floating
const CLOUD_BOUNDS = { minX: 0, maxX: 390, minY: 0, maxY: 280 };

const TechCloud = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative w-[90%] xl:max-w-[50vw] aspect-[390/280] mx-auto"
    >
      {/* Center FULLSTACK label */}
      <div
        className="absolute flex items-center justify-center inset-0
                      text-3xl md:text-5xl font-bold text-secondary select-none pointer-events-none"
      >
        FULLSTACK
      </div>

      {/* Corner group labels */}
      {Object.entries(CORNER_LABELS).map(([groupKey, pos]) => (
        <div
          key={groupKey}
          className="absolute text-lg text-secondary cursor-pointer p-2"
          style={{
            left: `${pos.xPerc * 100}%`,
            top: `${pos.yPerc * 100}%`,
            transform: `${pos.xPerc === 1 ? "translateX(-100%)" : ""} ${
              pos.yPerc === 1 ? "translateY(-100%)" : ""
            }`,
          }}
          onMouseEnter={() => setActiveGroup(groupKey)}
          onMouseLeave={() => setActiveGroup(null)}
        >
          {groupKey.charAt(0).toUpperCase() + groupKey.slice(1)}
        </div>
      ))}

      {/* Render all tech nodes */}
      {Object.entries(TECH_GROUPS).map(([groupKey, items]) =>
        items.map((tech) => (
          <TechNode
            key={tech}
            label={tech}
            groupKey={groupKey}
            activeGroup={activeGroup}
            bounds={CLOUD_BOUNDS}
            containerRef={containerRef}
          />
        ))
      )}
    </div>
  );
};

export default TechCloud;
