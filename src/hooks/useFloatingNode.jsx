import { useEffect, useRef, useState } from "react";

/**
 * Responsive floating node hook with smooth motion
 * @param homeX - target x (can be corner or center)
 * @param homeY - target y
 * @param bounds - object {minX, maxX, minY, maxY} in px
 * @param focused - whether node should move to homeX/homeY smoothly
 */
export const useFloatingNode = ({ homeX, homeY, bounds, focused }) => {
  const t = useRef(0);
  const phase = useRef({ x: 0, y: 0 });
  const speed = useRef(0.002); // base speed
  const [pos, setPos] = useState({
    x: homeX,
    y: homeY,
    opacity: 1,
    scale: 1,
  });

  // Random phase init once
  useEffect(() => {
    phase.current = {
      x: Math.random() * 1000,
      y: Math.random() * 1000,
    };
    speed.current = 0.002 + Math.random() * 0.005; // subtle speed variation
  }, []);

  useEffect(() => {
    let raf;

    const animate = () => {
      t.current += speed.current;

      // floating offsets (small gentle movement)
      const floatX = Math.sin(t.current + phase.current.x) * 80; // reduced for subtlety
      const floatY = Math.cos(t.current + phase.current.y) * 55;

      const targetX = focused ? homeX : homeX + floatX;
      const targetY = focused ? homeY : homeY + floatY;

      // Smooth interpolation (lerp) to target
      const lerp = (start, end, amt) => start + (end - start) * amt;
      const smoothFactor = 0.02; // smaller = slower, smoother
      // Clamp target first
      const clampedTargetX = Math.max(
        bounds.minX,
        Math.min(bounds.maxX, targetX)
      );
      const clampedTargetY = Math.max(
        bounds.minY,
        Math.min(bounds.maxY, targetY)
      );

      // Lerp toward clamped target
      let x = lerp(pos.x, clampedTargetX, smoothFactor);
      let y = lerp(pos.y, clampedTargetY, smoothFactor);

      // Depth illusion (opacity & scale)
      const depth = (y - bounds.minY) / (bounds.maxY - bounds.minY);
      const opacity = 0.45 + depth * 0.55;
      const scale = 0.94 + depth * 0.1;

      setPos({ x, y, opacity, scale });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [focused, homeX, homeY, bounds, pos]);

  return pos;
};
