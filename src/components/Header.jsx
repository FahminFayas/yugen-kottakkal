'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  useEffect(() => {
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
      window.dispatchEvent(new Event('themechange'));
      return newDark;
    });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[110] bg-transparent backdrop-blur-md transition-colors duration-300">
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
            {/* --- Fullscreen Overlay with Blur --- */}
            <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-md transition-opacity duration-300 animate-fade-in" onClick={closeMenu} aria-label="Close mobile menu overlay" />
            
            {/* --- Modern Drawer Panel (Right Aligned, Enhanced UI/UX) --- */}
            <div className="fixed right-0 top-16 w-4/5 max-w-xs sm:max-w-sm h-[calc(100vh-64px)] z-[130] flex flex-col animate-slide-in bg-white/80 dark:bg-gray-900/80 shadow-2xl backdrop-blur-lg border-l-4 border-primary dark:border-primary-dark">
              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col gap-2 py-4 px-2 overflow-y-auto">
                <a href="/" onClick={closeMenu} className="flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark transition-all duration-200 ease-in-out">
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-primary dark:text-primary-dark' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6'/></svg>
                  Home
                </a>
                <a href="/about" onClick={closeMenu} className="flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark transition-all duration-200 ease-in-out">
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-primary dark:text-primary-dark' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z'/></svg>
                  About
                </a>
                {/* Collapsible Courses Section */}
                <div className="accordion-group">
                  <button
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark transition-all duration-200 ease-in-out focus:outline-none"
                    aria-expanded={accordionOpen}
                    aria-controls="courses-accordion"
                    onClick={() => setAccordionOpen(o => !o)}
                  >
                    <span className="flex items-center gap-3">
                      <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-primary dark:text-primary-dark' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 0l-9-5m9 5l9-5'/></svg>
                      Courses
                    </span>
                    <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${accordionOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div id="courses-accordion" className={`pl-8 pr-2 transition-all duration-200 overflow-hidden ${accordionOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{ pointerEvents: accordionOpen ? 'auto' : 'none' }}
                  >
                    <a href="/courses/mftg" onClick={closeMenu} className="block py-2 text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition">MFTG Course</a>
                    <a href="/courses/mfa" onClick={closeMenu} className="block py-2 text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition">MFA Course</a>
                    <a href="/courses/power-bi" onClick={closeMenu} className="block py-2 text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition">Power BI Course</a>
                  </div>
                </div>
                <a href="/gallery" onClick={closeMenu} className="flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark transition-all duration-200 ease-in-out">
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-primary dark:text-primary-dark' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6'/></svg>
                  Gallery
                </a>
                <a href="/blog" onClick={closeMenu} className="flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark transition-all duration-200 ease-in-out">
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-primary dark:text-primary-dark' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h6a2 2 0 012 2v12a2 2 0 01-2 2z'/></svg>
                  Blog
                </a>
                <a href="/contact" onClick={closeMenu} className="flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary dark:hover:bg-primary-dark/20 dark:hover:text-primary-dark transition-all duration-200 ease-in-out">
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-primary dark:text-primary-dark' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0V8a4 4 0 018 0v4'/></svg>
                  Contact Us
                </a>
              </nav>

              {/* Sticky Call Now Button & Dark Mode Toggle */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-3">
                <button 
                  className="w-full bg-primary text-white text-center px-6 py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-primary-dark transition-colors duration-200 ease-in-out flex items-center justify-center gap-2"
                  onClick={() => { window.location.href = 'tel:+918943888006'; }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </button>
                <button
                  className="w-full flex items-center justify-center bg-gray-200 dark:bg-[#23272f] rounded-full px-2 py-2 transition-colors duration-200 focus:outline-none border border-gray-300 dark:border-[#333]"
                  aria-label="Toggle dark mode"
                  onClick={handleToggleDark}
                  style={{ minWidth: 48 }}
                >
                  <span className={`inline-block w-5 h-5 rounded-full transition-all duration-300 ${dark ? 'translate-x-5 bg-primary' : 'bg-yellow-400'}`}></span>
                  <span className="ml-2 text-xs text-[#222] dark:text-white">{dark ? 'Dark' : 'Light'}</span>
                  <span className="ml-1">{dark ? '🌙' : '☀️'}</span>
                </button>
              </div>
            </div>
            <style>{`
              @keyframes slide-in {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
              }
              .animate-slide-in {
                animation: slide-in 0.4s cubic-bezier(0.4,0,0.2,1);
              }
              @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              .animate-fade-in {
                animation: fade-in 0.3s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </>
        )}
      </nav>
      <style>{`
        @media (max-width: 900px) { /* Changed from md: (768px) to 900px for a more specific breakpoint if needed, or adjust to md (768px)*/
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; /* Removed absolute positioning as it was causing layout issues with the example*/ }
         /* .mobile-nav-toggle, .mobile-dark-toggle { display: inline-flex !important; } */ /* Not strictly needed if mobile-controls is flex */
        }
        @media (min-width: 901px) { /* Ensure mobile controls are hidden on desktop */
            .mobile-controls { display: none !important; }
        }

        /* General body scroll lock when menu is open - This is handled by JS, but an extra CSS guard can be useful */
        body.menu-open-no-scroll {
          overflow: hidden;
        }
      `}</style>
    </header>
  );
}