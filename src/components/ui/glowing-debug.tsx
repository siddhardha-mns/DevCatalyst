"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowingDebugProps {
  proximity?: number;
  className?: string;
  disabled?: boolean;
}

const GlowingDebug = memo(
  ({
    proximity = 100,
    className,
    disabled = false,
  }: GlowingDebugProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current || disabled) return;

        const element = containerRef.current;
        const { left, top, width, height } = element.getBoundingClientRect();
        const mouseX = e?.x ?? lastPosition.current.x;
        const mouseY = e?.y ?? lastPosition.current.y;

        if (e) {
          lastPosition.current = { x: mouseX, y: mouseY };
        }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity;

        if (isActive) {
          const centerX = left + width / 2;
          const centerY = top + height / 2;
          const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI) + 90;
          
          element.style.setProperty("--rotation", `${angle}deg`);
          element.style.setProperty("--opacity", "1");
        } else {
          element.style.setProperty("--opacity", "0");
        }
      },
      [proximity, disabled]
    );

    useEffect(() => {
      if (disabled) return;

      const handlePointerMove = (e: PointerEvent) => handleMove(e);
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    if (disabled) return null;

    return (
      <div
        ref={containerRef}
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden",
          className
        )}
        style={{
          "--rotation": "0deg",
          "--opacity": "0",
        } as React.CSSProperties}
      >
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: `conic-gradient(from var(--rotation), 
              #ff6b9d, 
              #ffd93d, 
              #6bcf7f, 
              #4d9de0, 
              #ff6b9d)`,
            opacity: "var(--opacity)",
            transition: "opacity 0.3s ease",
            filter: "blur(1px)",
          }}
        />
        <div 
          className="absolute inset-[1px] rounded-[inherit] bg-background"
        />
      </div>
    );
  }
);

GlowingDebug.displayName = "GlowingDebug";

export { GlowingDebug };