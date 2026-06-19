"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type AnimationType = "fadeIn" | "slideUp" | "blurIn";

interface TextAnimateProps {
  text: string;
  className?: string;
  type?: AnimationType;
  delay?: number;
}

const animations: Record<AnimationType, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

export function TextAnimate({
  text,
  className,
  type = "slideUp",
  delay = 0,
}: TextAnimateProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={cn("inline-flex flex-wrap gap-x-2", className)}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={animations[type]}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
