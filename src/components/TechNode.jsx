import { useFloatingNode } from "../hooks/useFloatingNode";
import { useState, useEffect } from "react";

// Corner offsets for hover
const CORNER_POSITIONS = {
  frontend: { x: -195, y: -140 },
  backend: { x: 195, y: -140 },
  data: { x: -195, y: 140 },
  tools: { x: 195, y: 140 },
};

// Absolute start positions (to avoid overlapping)
const NODE_START_POSITIONS = {
  frontend: [
    { x: -30, y: -20 },
    { x: 0, y: -10 },
    { x: 30, y: 10 },
    { x: -15, y: 15 },
  ],
  backend: [
    { x: -30, y: -20 },
    { x: 0, y: -10 },
    { x: 30, y: 10 },
  ],
  data: [
    { x: -20, y: -10 },
    { x: 10, y: 0 },
  ],
  tools: [
    { x: -20, y: -15 },
    { x: 10, y: 5 },
    { x: 25, y: 15 },
  ],
};

const TechNode = ({ label, groupKey, activeGroup, bounds, containerRef, index }) => {
  const focused = activeGroup === groupKey;
  const [cloudCenter, setCloudCenter] = useState({ x: 0, y: 0 });

  // get center of container
  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setCloudCenter({ x: offsetWidth / 2, y: offsetHeight / 2 });
    }
  }, [containerRef]);

  // starting position relative to center
  const startPos = NODE_START_POSITIONS[groupKey][index % NODE_START_POSITIONS[groupKey].length];
  let homeX = cloudCenter.x + startPos.x;
  let homeY = cloudCenter.y + startPos.y;

  // move to corner on hover
  if (focused && CORNER_POSITIONS[groupKey]) {
    homeX = cloudCenter.x + CORNER_POSITIONS[groupKey].x;
    homeY = cloudCenter.y + CORNER_POSITIONS[groupKey].y;
  }

  const pos = useFloatingNode({ homeX, homeY, bounds, focused });

  return (
    <div
      className="absolute px-3 py-1 rounded-md border-2 border-secondary
                 text-sm text-base-200 bg-accent/80 backdrop-blur"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
        opacity: pos.opacity,
        transition: "opacity 0.01s linear",
        pointerEvents: "none",
      }}
    >
      {label}
    </div>
  );
};

export default TechNode;
