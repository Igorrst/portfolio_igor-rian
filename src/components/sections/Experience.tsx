"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import type { ExperienceType } from "@/types";

const typeIcon: Record<ExperienceType, typeof Briefcase> = {
  work: Briefcase,
  freelance: Code2,
  education: GraduationCap,
};

export function Experience() {
  return (
    <section id="experiencia" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle label="Minha trajetória" title="Experiência" />

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const Icon = typeIcon[exp.type];
              const isRight = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className={cn(
                    "relative flex items-start gap-6 md:gap-0",
                    "md:w-1/2",
                    isRight ? "md:ml-0 md:pr-12" : "md:ml-auto md:pl-12"
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-1 z-10 w-10 h-10 rounded-full border-2 border-border bg-background",
                      "flex items-center justify-center text-accent",
                      "left-0 md:left-auto",
                      isRight ? "md:-right-5" : "md:-left-5"
                    )}
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </div>

                  <div className="ml-14 md:ml-0 bg-card border border-border p-5 flex-1">
                    <span className="font-code text-[10px] tracking-widest uppercase text-muted-foreground">
                      {exp.period}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-0.5">
                      {exp.role}
                    </h3>
                    <p className="font-code text-xs text-accent mb-3">{exp.company}</p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="font-code text-[10px] tracking-wider text-muted-foreground/70 uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
