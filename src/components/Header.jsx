'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  useEffect(() => {
    // Set initial theme from localStorage or system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        setDark(true);
        document.documentElement.classList.add('dark');
      } else if (saved === 'light') {
        setDark(false);
        document.documentElement.classList.remove('dark');
      } else {
        setDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    }
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to ensure body scroll is restored if component unmounts while menu is open
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const handleToggleDark = () => {
    setDark(d => {
      const newDark = !d;
      if (newDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      // Dispatch custom event for theme change
      window.dispatchEvent(new Event('themechange'));
      return newDark;
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[120] bg-transparent backdrop-blur-md transition-colors duration-300">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between py-2 px-4" aria-label="Main navigation">
        <a href="/" className="flex items-center gap-2 group">
          <img src="/img/logo.png" alt="Yugen Education" className="h-12 block dark:hidden" />
          <img src="/img/logo-light.png" alt="Yugen Education" className="h-12 hidden dark:block" />
        </a>
        <div className={`desktop-nav flex items-center gap-8${menuOpen ? ' hidden' : ''}`}>
          <ul className="flex items-center gap-6 list-none m-0 p-0 text-[17px]">
            <li><a href="/" className="px-2 py-1 rounded transition-colors duration-150 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark">Home</a></li>
            <li><a href="/about" className="px-2 py-1 rounded transition-colors duration-150 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark">About</a></li>
            <li className="relative group">
              <span className="px-2 py-1 rounded cursor-pointer transition-colors duration-150 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark" tabIndex={0} aria-haspopup="true" aria-expanded="false">Courses ▾</span>
              <ul className="dropdown absolute top-7 left-0 bg-white text-[#222] rounded-lg shadow-lg min-w-[180px] p-0 m-0 hidden group-hover:block group-focus-within:block dark:bg-[#23272f] dark:text-white">
                <li><a href="/courses/mftg" className="block px-4 py-2 rounded transition-colors duration-150 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark">MFTG Course</a></li>
                <li><a href="/courses/mfa" className="block px-4 py-2 rounded transition-colors duration-150 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark">MFA Course</a></li>
                <li><a href="/courses/power-bi" className="block px-4 py-2 rounded transition-colors duration-150 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark">Power BI Course</a></li>
              </ul>
            </li>
            <li><a href="/gallery" className="px-2 py-1 rounded transition-colors duration-150 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark">Gallery</a></li>
            <li><a href="/blog" className="px-2 py-1 rounded transition-colors duration-150 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark">Blog</a></li>
            <li><a href="/contact" className="px-2 py-1 rounded transition-colors duration-150 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark">Contact Us</a></li>
          </ul>
          <a href="tel:+918943888006" className="bg-primary text-white px-5 py-2 rounded-lg no-underline font-semibold shadow hover:bg-primary-dark transition">Call Now</a>
          {/* Dark mode toggle - only render once */}
          <button
            className="ml-4 flex items-center bg-gray-200 dark:bg-[#23272f] rounded-full px-2 py-1 transition-colors duration-200 focus:outline-none border border-gray-300 dark:border-[#333]"
            aria-label="Toggle dark mode"
            onClick={handleToggleDark}
            style={{ minWidth: 48 }}
          >
            <span className={`inline-block w-5 h-5 rounded-full transition-all duration-300 ${dark ? 'translate-x-5 bg-primary' : 'bg-yellow-400'}`}></span>
            <span className="ml-2 text-xs text-[#222] dark:text-white">{dark ? 'Dark' : 'Light'}</span>
            <span className="ml-1">{dark ? '🌙' : '☀️'}</span>
          </button>
        </div>
        {/* Mobile right controls: hamburger + theme toggle */}
        <div className="mobile-controls flex items-center gap-2 ml-auto md:hidden">
          <button
            className="mobile-dark-toggle bg-gray-100 dark:bg-[#23272f] border border-gray-300 dark:border-[#333] rounded-full flex items-center px-2 py-1 text-[#222] dark:text-white focus:outline-none shadow transition-colors duration-200"
            aria-label="Toggle dark mode"
            onClick={handleToggleDark}
            style={{ minWidth: 48 }}
          >
            <span className={`inline-block w-5 h-5 rounded-full transition-all duration-300 ${dark ? 'translate-x-5 bg-primary' : 'bg-yellow-400'}`}></span>
            <span className="ml-2 text-xs">{dark ? 'Dark' : 'Light'}</span>
            <span className="ml-1">{dark ? '🌙' : '☀️'}</span>
          </button>
          <button className="mobile-nav-toggle bg-gray-100 dark:bg-[#23272f] border border-gray-300 dark:border-[#333] rounded-full text-[#222] dark:text-white text-3xl p-2 focus:outline-none shadow transition-colors duration-200" aria-label="Open mobile menu" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <>
            {/* Overlay: fade-in, blur, dark */}
            <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm transition-opacity duration-300" onClick={() => setMenuOpen(false)} aria-label="Close mobile menu overlay" style={{top: 0, left: 0, width: '100vw', height: '100vh'}} />
            {/* Modern Drawer Panel */}
            <div className="fixed top-0 right-0 h-full w-[320px] max-w-sm bg-white/80 dark:bg-[#23272f]/80 backdrop-blur-xl shadow-2xl rounded-l-3xl border-l-4 border-primary dark:border-primary-dark z-[130] flex flex-col p-8 transform transition-transform duration-300 translate-x-0 animate-slide-in">
              {/* Modern Close Button */}
              <button className="self-end mb-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-[#23272f]/80 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 text-3xl text-primary dark:text-primary-dark focus:outline-none" aria-label="Close mobile menu" onClick={() => setMenuOpen(false)}>
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none' viewBox='0 0 24 24'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M18 6 6 18M6 6l12 12'/></svg>
              </button>
              <nav className="flex-1 flex flex-col gap-6">
                <a href="/" onClick={() => setMenuOpen(false)} className="block text-2xl font-bold text-gray-800 dark:text-gray-100 py-3 px-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary-dark/20 transition">Home</a>
                <a href="/about" onClick={() => setMenuOpen(false)} className="block text-2xl font-bold text-gray-800 dark:text-gray-100 py-3 px-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary-dark/20 transition">About</a>
                <a href="/courses/mftg" onClick={() => setMenuOpen(false)} className="block text-2xl font-bold text-gray-800 dark:text-gray-100 py-3 px-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary-dark/20 transition">MFTG Course</a>
                <a href="/courses/mfa" onClick={() => setMenuOpen(false)} className="block text-2xl font-bold text-gray-800 dark:text-gray-100 py-3 px-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary-dark/20 transition">MFA Course</a>
                <a href="/courses/power-bi" onClick={() => setMenuOpen(false)} className="block text-2xl font-bold text-gray-800 dark:text-gray-100 py-3 px-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary-dark/20 transition">Power BI Course</a>
                <a href="/gallery" onClick={() => setMenuOpen(false)} className="block text-2xl font-bold text-gray-800 dark:text-gray-100 py-3 px-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary-dark/20 transition">Gallery</a>
                <a href="/blog" onClick={() => setMenuOpen(false)} className="block text-2xl font-bold text-gray-800 dark:text-gray-100 py-3 px-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary-dark/20 transition">Blog</a>
                <a href="/contact" onClick={() => setMenuOpen(false)} className="block text-2xl font-bold text-gray-800 dark:text-gray-100 py-3 px-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary-dark/20 transition">Contact Us</a>
              </nav>
              {/* Sticky Call Now Button */}
              <div className="mt-8 sticky bottom-8">
                <a href="tel:+918943888006" className="block w-full bg-primary text-white text-center px-8 py-4 rounded-2xl text-2xl font-bold shadow-lg hover:bg-primary-dark transition">Call Now</a>
              </div>
            </div>
            <style>{`
              @keyframes slide-in {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
              }
              .animate-slide-in {
                animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </>
        )}
      </nav>
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; position: absolute; top: 16px; right: 16px; z-index: 200; }
          .mobile-nav-toggle, .mobile-dark-toggle { display: inline-flex !important; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in { animation: fadeIn 0.3s; }
      `}</style>
    </header>
  );
} 