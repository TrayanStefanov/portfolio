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
  layout, // layout now in % of container
  center,
}) => {
  const focused = activeGroup === groupKey || frozenGroup === groupKey;
  const isOnTop = focused;
  const [cloudSize, setCloudSize] = useState({ width: 0, height: 0 });

  // Update cloud size on mount & resize
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const { offsetWidth, offsetHeight } = containerRef.current;
      setCloudSize({ width: offsetWidth, height: offsetHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [containerRef]);

  /* const centerX = cloudSize.width / 2;
  const centerY = cloudSize.height / 2; */
  const centerX = center.xPerc * cloudSize.width;
  const centerY = center.yPerc * cloudSize.height;

  // Default: floating around center
  let homeX = centerX;
  let homeY = centerY;

  if (focused && corner && layout) {
    // corner + layout in % of container
    const anchorX = corner.xPerc * cloudSize.width;
    const anchorY = corner.yPerc * cloudSize.height;

    homeX = anchorX + layout.x * cloudSize.width;
    homeY = anchorY + layout.y * cloudSize.height;

    // Clamp to bounds
    homeX = Math.max(bounds.minX, Math.min(bounds.maxX, homeX));
    homeY = Math.max(bounds.minY, Math.min(bounds.maxY, homeY));
  }

  const pos = useFloatingNode({ homeX, homeY, bounds, focused });

  return (
    <div
      className="absolute px-3 py-1 rounded-md border-2 border-secondary
                 text-sm text-base-200 bg-accent/80 backdrop-blur transition-transform"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
        opacity: pos.opacity,
        transition: "opacity 0.01s linear",
        pointerEvents: "none",
        zIndex: isOnTop ? 50 : 1,
      }}
    >
      {label}
    </div>
  );
};

export default TechNode;
