"use client";

import { Moon, Sun } from "../../assets/icons/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex gap-2 items-center border ds-border-disabled rounded-2xl !p-3">
    <Icon Icon={isDark ? Moon : Sun} className="ds-text-black" onClick={toggleTheme} />
 
    </div>);
}