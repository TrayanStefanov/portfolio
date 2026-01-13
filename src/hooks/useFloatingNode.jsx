import { useEffect, useRef, useState } from "react";

/**
 * Responsive floating node hook
 * @param homeX - target x (can be corner or center)
 * @param homeY - target y
 * @param bounds - object {minX, maxX, minY, maxY} in px, scaled to container
 * @param focused - whether node should move to homeX/homeY instantly
 */
export const useFloatingNode = ({ homeX, homeY, bounds, focused }) => {
  const t = useRef(0);
  const phase = useRef({ x: 0, y: 0 });
  const speed = useRef(0.005); // base speed

  const [pos, setPos] = useState({
    x: homeX,
    y: homeY,
    opacity: 1,
    scale: 1,
  });

  // Random initialization once
  useEffect(() => {
    phase.current = {
      x: Math.random() * 1000,
      y: Math.random() * 1000,
    };
    speed.current = 0.004 + Math.random() * 2;
  }, []);

  useEffect(() => {
    let raf;

    const animate = () => {
      t.current += speed.current;

      // floating offsets
      const floatX = Math.sin(t.current + phase.current.x) * 0.03 * (bounds.maxX - bounds.minX);
      const floatY = Math.cos(t.current + phase.current.y) * 0.03 * (bounds.maxY - bounds.minY);

      let x = focused ? homeX : homeX + floatX;
      let y = focused ? homeY : homeY + floatY;

      // clamp inside responsive bounds
      x = Math.max(bounds.minX, Math.min(bounds.maxX, x));
      y = Math.max(bounds.minY, Math.min(bounds.maxY, y));

      // depth illusion for opacity and scale
      const depth = (y - bounds.minY) / (bounds.maxY - bounds.minY);
      const opacity = 0.45 + depth * 0.55;
      const scale = 0.94 + depth * 0.1;

      setPos({ x, y, opacity, scale });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [focused, homeX, homeY, bounds]);

  return pos;
};
