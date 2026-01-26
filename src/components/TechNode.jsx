import { useState, useEffect } from "react";
import { useFloatingNode } from "../hooks/useFloatingNode";

const TechNode = ({
  label,
  bounds,
  containerRef,
  corner,
  layout,
}) => {
  const [cloudSize, setCloudSize] = useState({ width: 0, height: 0 });

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

  // Anchor near corner label
  const anchorX = corner.xPerc * cloudSize.width;
  const anchorY = corner.yPerc * cloudSize.height;

  const baseX = anchorX + layout.x * cloudSize.width;
  const baseY = anchorY + layout.y * cloudSize.height;

  const pos = useFloatingNode({ baseX, baseY, bounds });

  return (
    <div
      className="absolute px-3 py-1 rounded-md border-2 border-secondary
                 text-lg text-base-200 bg-accent/80 backdrop-blur"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        opacity: pos.opacity,
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {label}
    </div>
  );
};

export default TechNode;
