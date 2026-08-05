"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";
import type { SocialIconProps } from "@/components/shared/SocialIcons";
import type { ComponentType } from "react";

type SocialItem = { href: string; label: string; icon: ComponentType<SocialIconProps> };

const socials: SocialItem[] = [
  { href: "https://github.com/Igorrst", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/igorrian/", label: "LinkedIn", icon: LinkedinIcon },
];

export function Contact() {
  return (
    <section id="contato" className="py-28 px-6 bg-surface/40">
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="Vamos conversar" title="Contato" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-xl flex-col items-center text-center"
        >
          <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
            Estou aberto a novas oportunidades, freelances ou apenas uma boa conversa sobre
            tecnologia. Envie uma mensagem e responderei em breve.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=igorrian.cntgm18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-code text-sm text-accent hover:underline underline-offset-4 tracking-wider"
          >
            igorrian.cntgm18@gmail.com
          </a>

          <div className="mt-8 flex items-center justify-center gap-4">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <Icon size={16} strokeWidth={1.5} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
