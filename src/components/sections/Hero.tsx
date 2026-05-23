"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AnimatedText } from "@/components/shared/AnimatedText";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/shared/SocialIcons";
import type { SocialIconProps } from "@/components/shared/SocialIcons";
import type { ComponentType } from "react";

type SocialItem = { href: string; label: string; icon: ComponentType<SocialIconProps> };

const roles = ["Desenvolvedor Front-End", "Desenvolvedor React & Next.js"];

const socials: SocialItem[] = [
  { href: "https://github.com/Igorrst", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/igorrian/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "mailto:igorrian.cntgm18@gmail.com", label: "E-mail", icon: MailIcon },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (!isDeleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCharIndex(0);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">
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
          <p className="font-display text-xl md:text-2xl text-accent italic">
            {displayedRole}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-0.5 h-6 md:h-7 bg-accent ml-0.5 align-middle"
            />
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Construo interfaces que unem performance e elegância — experiências digitais
          que as pessoas amam usar.
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
                target={href.startsWith("mailto") ? undefined : "_blank"}
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
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>
    </section>
  );
}
