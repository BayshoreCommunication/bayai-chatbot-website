"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currX = useRef(0);
  const currY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;
    };

    const animate = () => {
      // simple lerp for smoothing
      currX.current += (targetX.current - currX.current) * 0.18;
      currY.current += (targetY.current - currY.current) * 0.18;

      const el = dotRef.current;
      if (el) {
        el.style.transform = `translate3d(${currX.current - 8}px, ${
          currY.current - 8
        }px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove as any);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[2px]"
      aria-hidden
    />
  );
}
