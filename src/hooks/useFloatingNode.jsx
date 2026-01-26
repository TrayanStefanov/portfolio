import { useEffect, useRef, useState } from "react";

/**
 * Simple vertical floating motion around a fixed anchor point
 */
export const useFloatingNode = ({ baseX, baseY, bounds }) => {
  const t = useRef(0);
  const speed = useRef(0.003);

  const [pos, setPos] = useState({
    x: baseX,
    y: baseY,
    opacity: 1,
    scale: 1,
  });

  // init randomness AFTER mount (safe & pure)
  useEffect(() => {
    t.current = Math.random() * 1000;
    speed.current = 0.002 + Math.random() * 0.02;
  }, []);

  useEffect(() => {
    let raf;

    const animate = () => {
      t.current += speed.current;

      const floatY = Math.sin(t.current) * 20; // vertical bob

      let x = baseX;
      let y = baseY + floatY;

      // Clamp
      x = Math.max(bounds.minX, Math.min(bounds.maxX, x));
      y = Math.max(bounds.minY, Math.min(bounds.maxY, y));

      setPos({
        x,
        y,
        opacity: 1,
        scale: 1,
      });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [baseX, baseY, bounds]);

  return pos;
};
