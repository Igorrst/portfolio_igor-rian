"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projetos" className="py-28 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="O que eu construí" title="Projetos" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
