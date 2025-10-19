"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currX = useRef(0);
  const currY = useRef(0);
  const rafId = useRef<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over buttons, cards, or clickable elements
      if (
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest('[class*="hover:"]') ||
        target.closest(".cursor-pointer") ||
        target.closest("a") ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if leaving buttons, cards, or clickable elements
      if (
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest('[class*="hover:"]') ||
        target.closest(".cursor-pointer") ||
        target.closest("a") ||
        target.closest('[role="button"]')
      ) {
        // Only set to false if we're not moving to another interactive element
        const relatedTarget = e.relatedTarget as HTMLElement;
        if (
          !relatedTarget ||
          (!relatedTarget.closest("button") &&
            !relatedTarget.closest('[class*="hover:"]') &&
            !relatedTarget.closest(".cursor-pointer") &&
            !relatedTarget.closest("a") &&
            !relatedTarget.closest('[role="button"]'))
        ) {
          setIsHovering(false);
        }
      }
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
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove as any);
      window.removeEventListener("mouseover", handleMouseOver as any);
      window.removeEventListener("mouseout", handleMouseOut as any);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2"
      aria-hidden
    >
      {isHovering ? (
        // Arrow inside circle when hovering over interactive elements
        <div className="w-full h-full rounded-full bg-primary/80 flex items-center justify-center">
          <div className="relative">
            {/* Arrow body */}
            <div className="w-4 h-0.5 bg-white"></div>
            {/* Arrow head */}
            <div className="absolute top-1/2 right-0 w-0 h-0 border-l-[5px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent transform -translate-y-1/2"></div>
          </div>
        </div>
      ) : (
        // Circle by default
        <div className="w-full h-full rounded-full bg-primary/60 blur-[1px]"></div>
      )}
    </div>
  );
}
