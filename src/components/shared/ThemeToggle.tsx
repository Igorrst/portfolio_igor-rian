"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Alternar tema"
      className={cn(
        "relative w-9 h-9 flex items-center justify-center rounded-full",
        "border border-border text-muted-foreground",
        "hover:border-accent hover:text-accent transition-colors duration-300",
        className
      )}
    >
      <span className="relative h-4 w-4" aria-hidden="true">
        <Sun
          size={16}
          strokeWidth={1.5}
          className="absolute inset-0 scale-0 rotate-90 opacity-0 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:opacity-100"
        />
        <Moon
          size={16}
          strokeWidth={1.5}
          className="absolute inset-0 scale-100 rotate-0 opacity-100 transition-all duration-300 dark:scale-0 dark:-rotate-90 dark:opacity-0"
        />
      </span>
    </button>
  );
}
