import type { Experience, Skill } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Desenvolvedor Front-End",
    company: "MaxMilhas",
    period: "fev. 2025 — mar. 2026",
    description:
      "Atuação em sistemas de hotéis e reservas, incluindo site, painéis administrativos e micro front-ends. Desenvolvimento de interfaces e da funcionalidade de gerenciamento de cupons com React, Next.js, TypeScript e Tailwind CSS, integração de APIs REST via BFF, testes unitários, apoio em QA, homologação, pipelines, deploys e code review entre múltiplos repositórios.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "APIs REST", "BFF", "Testes", "CI/CD"],
    type: "work",
  },
  {
    id: "exp-2",
    role: "Engenharia de Software (Bacharelado)",
    company: "Unicesumar",
    period: "2024 — 2028",
    description:
      "Graduação com ênfase em engenharia de requisitos, design de software e arquiteturas escaláveis.",
    tech: ["Engenharia de Requisitos", "Design de Software", "Arquiteturas Escaláveis"],
    type: "education",
  },
  {
    id: "exp-3",
    role: "Analista de Operações",
    company: "MaxMilhas",
    period: "fev. 2023 — jan. 2025",
    description:
      "Atuação em atendimento ao cliente, suporte interno, análise de ofertas de milhas e prevenção a fraudes. Validação de dados e processos, acompanhamento de indicadores, melhoria de fluxos operacionais e apoio no treinamento de novos colaboradores.",
    tech: ["Processos", "Análise de Dados", "Prevenção a Fraudes", "Atendimento"],
    type: "work",
  },
];

export const skills: Skill[] = [
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "HTML & CSS", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "APIs REST", category: "backend" },
  { name: "BFF", category: "backend" },
  { name: "SQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Testes Unitários", category: "quality" },
  { name: "QA & Homologação", category: "quality" },
  { name: "Git & GitHub", category: "tool" },
  { name: "GitLab & Bitbucket", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "CI/CD", category: "tool" },
  { name: "Figma", category: "tool" },
  { name: "Vercel", category: "tool" },
];
