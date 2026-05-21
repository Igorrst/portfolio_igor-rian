"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";
import type { SocialIconProps } from "@/components/shared/SocialIcons";
import { cn } from "@/lib/utils";
import type { ComponentType } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";
type SocialItem = { href: string; label: string; icon: ComponentType<SocialIconProps> };

const socials: SocialItem[] = [
  { href: "https://github.com/Igorrst", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/igorrian/", label: "LinkedIn", icon: LinkedinIcon },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      await new Promise((res) => setTimeout(res, 1500));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass = cn(
    "w-full bg-transparent border-0 border-b border-border py-3 text-sm text-foreground",
    "placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent",
    "transition-colors duration-300 font-body"
  );

  return (
    <section id="contato" className="py-28 px-6 bg-surface/40">
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="Vamos conversar" title="Contato" />

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              Estou aberto a novas oportunidades, freelances ou apenas uma boa conversa
              sobre tecnologia. Envie uma mensagem e responderei em breve.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:igorrian.cntgm18@gmail.com"
                className="block font-code text-sm text-accent hover:underline underline-offset-4 tracking-wider"
              >
                igorrian.cntgm18@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-4 py-12"
              >
                <span className="font-display text-4xl text-accent">✦</span>
                <p className="font-display text-xl text-foreground">Mensagem enviada!</p>
                <p className="font-body text-sm text-muted-foreground">
                  Obrigado pelo contato. Responderei em breve.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-code text-xs text-accent tracking-wider hover:underline underline-offset-4 mt-2"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    autoComplete="email"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Sua mensagem"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={cn(inputClass, "resize-none")}
                  />
                </div>

                {status === "error" && (
                  <p className="font-code text-xs text-destructive tracking-wider">
                    Erro ao enviar. Tente novamente.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "group flex items-center gap-3 bg-foreground text-background px-6 py-3",
                    "text-sm font-semibold tracking-wide",
                    "hover:bg-accent hover:text-accent-foreground transition-all duration-300",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  {status === "sending" ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send
                        size={14}
                        strokeWidth={2}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
