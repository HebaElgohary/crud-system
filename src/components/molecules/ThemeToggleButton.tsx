"use client";

import { Moon, Sun } from "../../assets/icons/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        relative
        inline-flex
        h-11
        w-11
        items-center
        justify-center
        rounded-2xl
        border
        border-border
        bg-background
        text-foreground
        shadow-sm
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-md
        active:scale-95
      "
    >
      <Sun
        className={`
          absolute
          h-5
          w-5
          transition-all
          duration-300
          ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"}
        `}
      />

      <Moon
        className={`
          absolute
          h-5
          w-5
          transition-all
          duration-300
          ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}
        `}
      />
    </button>
  );
}