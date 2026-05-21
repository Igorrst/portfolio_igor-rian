"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

type Filter = ProjectCategory | "all";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "frontend", label: "Front-End" },
  { value: "fullstack", label: "Full Stack" },
  { value: "backend", label: "Back-End" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="projetos" className="py-28 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="O que eu construí" title="Projetos" />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={cn(
                "font-code text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-200",
                activeFilter === value
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground font-code text-sm py-16">
            Nenhum projeto nessa categoria ainda.
          </p>
        )}
      </div>
    </section>
  );
}
