"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedReveal({
  children,
  delay = 0,
  className,
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}