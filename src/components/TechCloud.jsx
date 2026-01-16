import { useState, useRef, useEffect } from "react";
import TechNode from "./TechNode";

// Corner labels as percentages
const CORNER_POSITIONS = {
  frontend: { xPerc: 0, yPerc: 0 },
  backend: { xPerc: 1, yPerc: 0 },
  data: { xPerc: 0, yPerc: 1 },
  tools: { xPerc: 1, yPerc: 1 },
};

// Node layouts relative to corner (in % of container)
const NODE_LAYOUTS = {
  frontend: [
    { x: 0.1, y: 0.1 },
    { x: 0.3, y: 0.1 },
    { x: 0.1, y: 0.25 },
    { x: 0.2, y: 0.17 },
  ],
  backend: [
    { x: -0.35, y: 0.1 },
    { x: -0.35, y: 0.25 },
    { x: -0.2, y: 0.155 },
  ],
  data: [
    { x: 0.1, y: -0.25 },
    { x: 0.15, y: -0.15 },
  ],
  tools: [
    { x: -0.35, y: -0.35 },
    { x: -0.2, y: -0.25 },
    { x: -0.4, y: -0.2 },
  ],
};

// Tech groups
const TECH_GROUPS = {
  frontend: ["HTML", "CSS", "React", "Tailwind"],
  backend: ["Node.js", "Express", "MongoDB"],
  data: ["MongoDB", "Upstash"],
  tools: ["Git", "GitHub", "Figma"],
};

const TechCloud = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [frozenGroup, setFrozenGroup] = useState(null);
  const [bounds, setBounds] = useState({ minX: 0, maxX: 1, minY: 0, maxY: 1 });

  const containerRef = useRef(null);
  const CLOUD_CENTER = { xPerc: 0.5, yPerc: 0.5 }; 

  // Update bounds once container mounts or resizes
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

  const toggleFreeze = (groupKey) =>
    setFrozenGroup((prev) => (prev === groupKey ? null : groupKey));

  return (
    <div
      ref={containerRef}
      className="relative w-[90%] xl:max-w-[50vw] aspect-[390/280] mx-auto"
    >
      {/* Center FULLSTACK label */}
      <div className="absolute inset-0 flex items-center justify-center
                      text-3xl md:text-5xl font-bold text-secondary/70
                      pointer-events-none select-none">
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
            groupKey={groupKey}
            activeGroup={activeGroup}
            frozenGroup={frozenGroup}
            bounds={bounds}
            containerRef={containerRef}
            corner={CORNER_POSITIONS[groupKey]}
            layout={NODE_LAYOUTS[groupKey][i]}
            center={CLOUD_CENTER}
          />
        ))
      )}
    </div>
  );
};

export default TechCloud;
