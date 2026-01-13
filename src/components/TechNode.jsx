import { useFloatingNode } from "../hooks/useFloatingNode";
import { useRef, useEffect, useState } from "react";

const MIN_RADIUS = 40;
const MAX_RADIUS = 100;

function hashToUnitFloat(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash % 1000) / 1000;
}

const CORNER_POSITIONS = {
  frontend: { x: -195, y: -140 },
  backend: { x: 195, y: -140 },
  data: { x: -195, y: 140 },
  tools: { x: 195, y: 140 },
};

const TechNode = ({ label, groupKey, activeGroup, bounds, containerRef }) => {
  const focused = activeGroup === groupKey;

  // ⚡ Get dynamic container center
  const [cloudCenter, setCloudCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setCloudCenter({ x: offsetWidth / 2, y: offsetHeight / 2 });
    }
  }, [containerRef]);

  // Compute starting position around center
  const angle = hashToUnitFloat(label) * Math.PI * 2;
  const radius = MIN_RADIUS + hashToUnitFloat(label + "_r") * (MAX_RADIUS+70);

  let homeX = cloudCenter.x + Math.cos(angle) * radius;
  let homeY = cloudCenter.y + Math.sin(angle) * radius;

  // Hover moves to corner
  if (focused && CORNER_POSITIONS[groupKey]) {
    homeX = CORNER_POSITIONS[groupKey].x + cloudCenter.x; // corner relative to center
    homeY = CORNER_POSITIONS[groupKey].y + cloudCenter.y;
  }

  const pos = useFloatingNode({
    homeX,
    homeY,
    bounds,
    focused,
  });

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
