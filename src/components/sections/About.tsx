"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { skills } from "@/data/experience";
import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types";

const categoryLabel: Record<SkillCategory, string> = {
  language: "Linguagens",
  frontend: "Front-End",
  backend: "Back-End & APIs",
  database: "Banco de Dados",
  quality: "Testes & Qualidade",
  tool: "Ferramentas",
};

const categoryOrder: SkillCategory[] = [
  "language",
  "frontend",
  "backend",
  "database",
  "quality",
  "tool",
];

const paragraphs = [
  "Sou desenvolvedor Full Stack com experiência profissional em front-end, atuando em sistemas web para hotéis e reservas. Trabalho com React, Next.js, TypeScript e Tailwind CSS, integrando interfaces a APIs REST e arquiteturas BFF.",
  "Minha experiência envolve desenvolvimento de funcionalidades, componentização, testes unitários, homologação, pipelines e colaboração com QA em ambientes com múltiplos repositórios.",
  "Também desenvolvo conhecimentos em Node.js, Express.js, SQL e PostgreSQL. Minha trajetória anterior em operações fortaleceu minha visão sobre processos, regras de negócio, dados e necessidades reais dos usuários.",
];

function SkillBadge({ name, delay }: { name: string; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden font-code text-xs px-3 py-1.5 border border-border text-muted-foreground cursor-default select-none"
    >
      <motion.span
        animate={hovered ? { x: "0%" } : { x: "-100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-0 bg-accent/10 pointer-events-none"
      />
      <motion.span
        animate={hovered ? { color: "var(--accent)", borderColor: "var(--accent)" } : {}}
        transition={{ duration: 0.2 }}
        className="relative z-10 transition-colors duration-200"
        style={{ color: hovered ? "var(--accent)" : undefined }}
      >
        {name}
      </motion.span>
    </motion.span>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  const grouped = categoryOrder.map((category) => ({
    category,
    label: categoryLabel[category],
    items: skills.filter((skill) => skill.category === category),
  }));

  return (
    <section id="sobre" ref={sectionRef} className="py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Quem sou eu" title="Sobre" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-5">
            {paragraphs.map((text, pIndex) => (
              <motion.p
                key={pIndex}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.3 + pIndex * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className={cn(
                  "font-body text-base leading-relaxed",
                  pIndex === 0 ? "text-foreground drop-cap" : "text-muted-foreground"
                )}
              >
                {text}
              </motion.p>
            ))}

          </div>

          <div className="space-y-7">
            {grouped.map(({ category, label, items }, groupIndex) => {
              const groupStart = grouped
                .slice(0, groupIndex)
                .reduce((total, group) => total + group.items.length, 0);

              return (
                <div key={category}>
                  <motion.p
                    initial={{ opacity: 0, x: 16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + groupIndex * 0.1 }}
                    className="font-code text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3 flex items-center gap-3"
                  >
                    <motion.span
                      initial={{ width: 0 }}
                      animate={isInView ? { width: 20 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + groupIndex * 0.1 }}
                      className="inline-block h-px bg-accent/50"
                    />
                    {label}
                  </motion.p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        delay={0.45 + (groupStart + i) * 0.05}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
