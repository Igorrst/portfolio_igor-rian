"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionTitle({ label, title, className }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("text-center mb-16", className)}
    >
      <span className="font-code text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
        {label}
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
        {title}
      </h2>
      <div className="ornament-line max-w-xs mx-auto">
        <span className="font-display text-accent text-lg">✦</span>
      </div>
    </motion.div>
  );
}
