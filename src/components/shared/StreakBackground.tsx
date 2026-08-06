"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type Streak = {
  top: number;
  width: number;
  height: number;
  duration: number;
  phase: number;
  direction: 1 | -1;
  accent: boolean;
};

const streaks: Streak[] = Array.from({ length: 30 }, (_, index) => ({
  top: (index * 37 + 7) % 96,
  width: 150 + ((index * 47) % 230),
  height: 4 + ((index * 7) % 6),
  duration: 2.2 + ((index * 19) % 18) / 10,
  phase: ((index * 41) % 97) / 97,
  direction: index % 4 === 0 ? -1 : 1,
  accent: index % 4 === 0,
}));

export function StreakBackground() {
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const eraserX = useMotionValue(-400);
  const eraserY = useMotionValue(-400);

  useEffect(() => {
    const sectionElement = document.querySelector<HTMLElement>("#inicio");
    if (!sectionElement) return;

    const section = sectionElement;
    let animationFrame = 0;

    function animate(time: number) {
      const sectionWidth = section.clientWidth;

      streaks.forEach((streak, index) => {
        const line = lineRefs.current[index];
        if (!line) return;

        const progress = (time / 1000 / streak.duration + streak.phase) % 1;
        const travelDistance = sectionWidth + streak.width * 2;
        const position =
          streak.direction === 1
            ? -streak.width + travelDistance * progress
            : sectionWidth + streak.width - travelDistance * progress;

        line.style.transform = `translate3d(${position}px, 0, 0)`;
      });

      animationFrame = requestAnimationFrame(animate);
    }

    function handlePointerMove(event: PointerEvent) {
      const bounds = section.getBoundingClientRect();
      eraserX.set(event.clientX - bounds.left - 150);
      eraserY.set(event.clientY - bounds.top - 150);
    }

    function handlePointerLeave() {
      eraserX.set(-400);
      eraserY.set(-400);
    }

    section.addEventListener("pointermove", handlePointerMove, { passive: true });
    section.addEventListener("pointerleave", handlePointerLeave);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [eraserX, eraserY]);

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
      {streaks.map((streak, index) => (
        <span
          key={index}
          ref={(element) => {
            lineRefs.current[index] = element;
          }}
          className={cn(
            "absolute left-0 flex items-center gap-3 text-foreground opacity-35 dark:opacity-45",
            streak.accent && "text-accent"
          )}
          style={{
            top: `${streak.top}%`,
            width: streak.width,
            height: streak.height,
          }}
        >
          <span className="h-full w-[16%] shrink-0 rounded-full bg-current opacity-60" />
          <span className="h-full w-[48%] shrink-0 rounded-full bg-current shadow-[0_0_16px_currentColor]" />
          <span className="h-full flex-1 rounded-full bg-current opacity-75" />
        </span>
      ))}

      <motion.span
        className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,var(--background)_0%,var(--background)_58%,transparent_100%)]"
        style={{ x: eraserX, y: eraserY }}
      />
    </div>
  );
}
