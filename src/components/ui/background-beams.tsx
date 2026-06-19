"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const handler = () => setReducedMotion(media.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#b91c1c]/10 via-transparent to-[#d4af37]/10" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#b91c1c]/10 via-transparent to-[#d4af37]/10" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-px w-full animate-beam opacity-30"
          style={{
            top: `${15 + i * 14}%`,
            background:
              "linear-gradient(90deg, transparent, #d4af37, #b91c1c, transparent)",
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i * 0.5}s`,
          }}
        />
      ))}
      <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
      <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#b91c1c]/5 blur-3xl" />
    </div>
  );
}
