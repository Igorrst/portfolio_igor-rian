"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/shared/SocialIcons";
import type { SocialIconProps } from "@/components/shared/SocialIcons";
import type { ComponentType } from "react";

type SocialItem = { href: string; label: string; icon: ComponentType<SocialIconProps> };

const socials: SocialItem[] = [
  { href: "https://github.com/Igorrst", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/igorrian/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "mailto:igorrian.cntgm18@gmail.com", label: "E-mail", icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-xl font-bold text-foreground">IR</span>

        <div className="flex items-center gap-4">
          {socials.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <p className="font-code text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Igor Rian
        </p>
      </div>
    </footer>
  );
}
