"use client";
import { useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") {
        setDark(true);
        document.documentElement.classList.add("dark");
      } else {
        setDark(false);
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Optionally, you can provide a context for dark mode here
  return <>{children}</>;
} 