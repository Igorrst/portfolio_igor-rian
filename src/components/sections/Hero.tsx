"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AnimatedText } from "@/components/shared/AnimatedText";
import { StreakBackground } from "@/components/shared/StreakBackground";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/shared/SocialIcons";
import type { SocialIconProps } from "@/components/shared/SocialIcons";
import type { ComponentType } from "react";

type SocialItem = { href: string; label: string; icon: ComponentType<SocialIconProps> };

const socials: SocialItem[] = [
  { href: "https://github.com/Igorrst", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/igorrian/", label: "LinkedIn", icon: LinkedinIcon },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=igorrian.cntgm18@gmail.com",
    label: "Enviar e-mail",
    icon: MailIcon,
  },
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden flex items-center justify-center px-6 pt-24 pb-16">
      <StreakBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-code text-xs tracking-[0.4em] uppercase text-accent">
            Portfólio
          </span>
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight">
          <AnimatedText text="Igor Rian" />
        </h1>

        <div className="h-10 md:h-12 flex items-center justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94, filter: "blur(8px)" }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex flex-col"
          >
            <motion.p
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                textShadow: [
                  "0 0 0px transparent",
                  "0 0 18px color-mix(in srgb, var(--accent) 45%, transparent)",
                  "0 0 0px transparent",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.04 }}
              className="bg-linear-to-r from-accent via-foreground to-accent bg-size-[200%_100%] bg-clip-text font-display text-xl md:text-2xl italic text-transparent"
            >
              Desenvolvedor Full-Stack
            </motion.p>

            <span className="relative mt-1 h-px overflow-hidden bg-accent/20" aria-hidden="true">
              <motion.span
                animate={{ x: ["-120%", "220%"] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-transparent via-accent to-transparent shadow-[0_0_10px_var(--accent)]"
              />
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Desenvolvo aplicações web completas, unindo interfaces com React e Next.js a APIs,
          serviços em Node.js e bancos de dados PostgreSQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm tracking-wide font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Ver Projetos
            <ArrowDown
              size={14}
              strokeWidth={2}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </a>

          <div className="flex items-center gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground/40"
          >
            <ArrowDown size={20} strokeWidth={1} />
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>
    </section>
  );
}
