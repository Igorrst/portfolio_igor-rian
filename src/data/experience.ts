import type { Experience, Skill } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Assistente de Desenvolvimento Front-End",
    company: "MaxMilhas",
    period: "mar. 2025 — mar. 2026",
    description:
      "Transição interna para Engenharia de Software, atuando no desenvolvimento front-end da área de hotéis. Desenvolvimento e manutenção de interfaces com Next.js, React, TypeScript e Tailwind CSS, consumo de APIs REST com arquitetura BFF, testes unitários, e uso de Postman, Git, Bitbucket, GitLab e pipelines CI/CD.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "APIs REST", "CI/CD"],
    type: "work",
  },
  {
    id: "exp-2",
    role: "Engenharia de Software (Bacharelado)",
    company: "Unicesumar",
    period: "fev. 2024 — fev. 2028",
    description:
      "Graduação com ênfase em engenharia de requisitos, design de software e arquiteturas escaláveis.",
    tech: ["Engenharia de Requisitos", "Design de Software", "Arquiteturas Escaláveis"],
    type: "education",
  },
  {
    id: "exp-3",
    role: "Analista de Operações",
    company: "MaxMilhas",
    period: "fev. 2023 — mar. 2025",
    description:
      "Análise de ofertas de milhas, prevenção a fraudes e atendimento ao cliente. Papel fundamental na operação da plataforma, com visão de produto e transição planejada para a área de engenharia de software.",
    tech: ["Análise de Dados", "Prevenção a Fraudes", "Atendimento ao Cliente"],
    type: "work",
  },
];

export const skills: Skill[] = [
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "HTML & CSS", category: "language" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Tailwind CSS", category: "framework" },
  { name: "Framer Motion", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "Git & GitHub", category: "tool" },
  { name: "Figma", category: "tool" },
  { name: "Vercel", category: "tool" },
  { name: "PostgreSQL", category: "database" },
  { name: "Prisma", category: "database" },
];
