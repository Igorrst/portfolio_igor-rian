"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { skills } from "@/data/experience";
import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types";

const categoryLabel: Record<SkillCategory, string> = {
  language: "Linguagens",
  framework: "Frameworks & Libs",
  tool: "Ferramentas",
  database: "Banco de Dados",
};

const categoryOrder: SkillCategory[] = ["language", "framework", "tool", "database"];

const paragraphs = [
  "Sou um desenvolvedor front-end apaixonado por criar interfaces que combinam beleza e funcionalidade. Meu foco está em React e Next.js, com TypeScript como padrão para qualquer projeto sério.",
  "Acredito que bom código é como boa arquitetura: a estrutura deve ser sólida, a experiência deve parecer natural e os detalhes fazem toda a diferença. Cada projeto é uma oportunidade de resolver problemas reais com elegância.",
  "Quando não estou codando, estou estudando design, explorando novas tecnologias ou contribuindo para projetos open-source.",
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

  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabel[cat],
    items: skills.filter((s) => s.category === cat),
  }));

  let globalBadgeIndex = 0;

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

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="mt-8 pt-8 border-t border-border"
            >
              <motion.a
                href="mailto:igorrian.cntgm18@gmail.com"
                className="group inline-flex items-center gap-2 font-code text-sm text-accent tracking-wider relative"
                whileHover="hover"
              >
                <motion.span
                  variants={{ hover: { x: -3 } }}
                  transition={{ duration: 0.2 }}
                >
                  igorrian.cntgm18@gmail.com
                </motion.span>
                <motion.span
                  variants={{ hover: { x: 5 } }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-px bg-accent"
                  initial={{ width: 0 }}
                  variants={{ hover: { width: "100%" } }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </div>

          <div className="space-y-7">
            {grouped.map(({ category, label, items }, groupIndex) => {
              const groupStart = globalBadgeIndex;
              globalBadgeIndex += items.length;

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
