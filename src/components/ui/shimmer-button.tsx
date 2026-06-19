"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, shimmerColor = "#d4af37", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 py-3 text-sm font-semibold text-[#0f0f0f] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f] disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        style={{
          background: `linear-gradient(135deg, ${shimmerColor}, #e8c96a)`,
        }}
        {...props}
      >
        <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform group-hover:translate-x-full duration-700" />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);
ShimmerButton.displayName = "ShimmerButton";
