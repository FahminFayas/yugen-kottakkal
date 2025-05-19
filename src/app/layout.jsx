'use client';
import './globals.css';
import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/600.css';
import '@fontsource/mulish/700.css';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  // Dark mode state and effect
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        setDark(true);
        document.documentElement.classList.add('dark');
      } else {
        setDark(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);
  const toggleDark = () => {
    setDark((d) => {
      const newDark = !d;
      if (newDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newDark;
    });
  };

  return (
    <html lang="en">
      <body>
        {/* Removed duplicate dark/light mode button here */}
        {children}
      </body>
    </html>
  );
} 