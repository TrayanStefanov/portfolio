import { useState, useEffect } from "react";
import { useFloatingNode } from "../hooks/useFloatingNode";

const TechNode = ({
  label,
  groupKey,
  activeGroup,
  frozenGroup,
  bounds,
  containerRef,
  corner,
  layout,
}) => {
  const focused = activeGroup === groupKey || frozenGroup === groupKey;
  const [cloudSize, setCloudSize] = useState({ width: 0, height: 0 });

  // Get container size
  useEffect(() => {
    if (!containerRef.current) return;
    const { offsetWidth, offsetHeight } = containerRef.current;
    setCloudSize({ width: offsetWidth, height: offsetHeight });
  }, [containerRef]);

  // Center of cloud
  const centerX = cloudSize.width / 2;
  const centerY = cloudSize.height / 2;

  // Default home position: center
  let homeX = centerX;
  let homeY = centerY;

  // If hovered or frozen, move relative to corner + layout
  if (focused && corner && layout) {
    const anchorX = corner.xPerc * cloudSize.width;
    const anchorY = corner.yPerc * cloudSize.height;

    // Apply layout offset
    let targetX = anchorX + layout.x;
    let targetY = anchorY + layout.y;

    // Clamp inside bounds to prevent overlap at edges
    homeX = Math.max(bounds.minX, Math.min(bounds.maxX, targetX));
    homeY = Math.max(bounds.minY, Math.min(bounds.maxY, targetY));
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
