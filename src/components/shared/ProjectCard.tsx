"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/shared/SocialIcons";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryLabel: Record<Project["category"], string> = {
  frontend: "Front-End",
  backend: "Back-End",
  fullstack: "Full Stack",
  mobile: "Mobile",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const y = -(e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    setTilt({ x: x * 6, y: y * 6 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        className="group relative bg-card border border-border overflow-hidden cursor-default"
      >
        {project.image && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-foreground/70 flex items-center justify-center gap-4"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 bg-accent text-accent-foreground font-code text-xs px-4 py-2 tracking-wider hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={13} strokeWidth={2} />
                  Deploy
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 bg-background/90 text-foreground font-code text-xs px-4 py-2 tracking-wider hover:opacity-90 transition-opacity"
                >
                  <GithubIcon size={13} />
                  GitHub
                </a>
              )}
            </motion.div>
          </div>
        )}

        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <span className="font-code text-[10px] tracking-[0.25em] uppercase text-accent">
              {categoryLabel[project.category]}
            </span>
            <motion.span
              animate={{ x: isHovered ? 3 : 0, y: isHovered ? -3 : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={15} className="text-accent" />
            </motion.span>
          </div>

          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-code text-[10px] tracking-wider text-muted-foreground/70 uppercase"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="font-code text-[10px] tracking-wider text-accent uppercase">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-[2px] bg-accent/60 w-0 group-hover:w-full transition-all duration-500 ease-out"
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}
