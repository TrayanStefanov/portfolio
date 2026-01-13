import { useState, useRef } from "react";
import TechNode from "./TechNode";

// Corner labels as percentages (unchanged)
const CORNER_POSITIONS = {
  frontend: { xPerc: 0, yPerc: 0 },
  backend: { xPerc: 1, yPerc: 0 },
  data: { xPerc: 0, yPerc: 1 },
  tools: { xPerc: 1, yPerc: 1 },
};

// Tech groups
const TECH_GROUPS = {
  frontend: ["HTML", "CSS", "React", "Tailwind"],
  backend: ["Node.js", "Express", "MongoDB"],
  data: ["MongoDB", "Upstash"],
  tools: ["Git", "GitHub", "Figma"],
};

// Node layouts relative to their corner (new)
const NODE_LAYOUTS = {
  frontend: [
    { x: 40,  y: 40 },
    { x: 110, y: 40 },
    { x: 40,  y: 80 },
    { x: 110, y: 80 },
  ],
  backend: [
    { x: -110, y: 40 },
    { x: -40,  y: 80 },
    { x: -75,  y: 120 },
  ],
  data: [
    { x: 40,  y: -110 },
    { x: 140, y: -110 },
  ],
  tools: [
    { x: -110, y: -180 },
    { x: -40,  y: -140 },
    { x: -75,  y: -40 },
  ],
};



// Bounds for floating nodes
const CLOUD_BOUNDS = {
  minX: 0,
  maxX: 390,
  minY: 0,
  maxY: 280,
};

const TechCloud = () => {
  const [activeGroup, setActiveGroup] = useState(null);
   const [frozenGroup, setFrozenGroup] = useState(null);  // click-to-freeze
  const containerRef = useRef(null);

  const toggleFreeze = (groupKey) => {
    setFrozenGroup(prev => (prev === groupKey ? null : groupKey));
  };
  return (
    <div
      ref={containerRef}
      className="relative w-[90%] xl:max-w-[50vw] aspect-[390/280] mx-auto border border-red-500 overflow-visible"
    >
      {/* Center FULLSTACK label */}
      <div
        className="absolute flex items-center justify-center inset-0
                      text-3xl md:text-5xl font-bold text-secondary/70 select-none pointer-events-none"
      >
        FULLSTACK
      </div>

      {/* Corner labels */}
      {Object.entries(CORNER_POSITIONS).map(([groupKey, pos]) => (
        <div
          key={groupKey}
          className="absolute text-lg font-bold text-secondary cursor-pointer p-2"
          style={{
            left: `${pos.xPerc * 100}%`,
            top: `${pos.yPerc * 100}%`,
            transform: `${pos.xPerc === 1 ? "translateX(-100%)" : ""} ${
              pos.yPerc === 1 ? "translateY(-100%)" : ""
            }`,
          }}
          onMouseEnter={() => setActiveGroup(groupKey)}
          onMouseLeave={() => setActiveGroup(null)}
          onClick={() => toggleFreeze(groupKey)}
        >
          {groupKey.charAt(0).toUpperCase() + groupKey.slice(1)}
        </div>
      ))}

      {/* Render tech nodes */}
      {Object.entries(TECH_GROUPS).map(([groupKey, items]) =>
        items.map((tech, i) => (
          <TechNode
            key={tech}
            label={tech}
            index={i}
            groupKey={groupKey}
            activeGroup={activeGroup}
            frozenGroup={frozenGroup}   // ✅ pass frozen info
            bounds={CLOUD_BOUNDS}
            containerRef={containerRef}
            corner={CORNER_POSITIONS[groupKey]}  // corner anchor
            layout={NODE_LAYOUTS[groupKey][i]}   // relative node layout
          />
        ))
      )}
    </div>
  );
};

export default TechCloud;
