'use client';
import { useEffect, useState } from 'react';

const heroImages = [
  {
    light: '/img/HeroBanner-light-1.jpg',
    dark: '/img/HeroBanner-dark-1.jpg',
    lightMobile: '/img/HeroBanner-light-mobile-1.jpg',
    darkMobile: '/img/HeroBanner-dark-mobile-1.jpg',
    headline: ['Chase Dreams', 'Reach New Heights']
  },
  {
    light: '/img/HeroBanner-light-2.jpg',
    dark: '/img/HeroBanner-dark-2.jpg',
    lightMobile: '/img/HeroBanner-light-mobile-2.jpg',
    darkMobile: '/img/HeroBanner-dark-mobile-2.jpg',
    headline: ['Let Your', 'Dreams Take', 'Flight']
  }
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const darkNow = document.documentElement.classList.contains('dark');
      setTimeout(() => {
        setIsDark(prevIsDark => {
          if (prevIsDark !== darkNow) {
            return darkNow;
          }
          return prevIsDark;
        });
      }, 0);
    };
    updateTheme();

    const match = window.matchMedia('(prefers-color-scheme: dark)');
    match.addEventListener('change', updateTheme);
    window.addEventListener('themechange', updateTheme);
    return () => {
      match.removeEventListener('change', updateTheme);
      window.removeEventListener('themechange', updateTheme);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % heroImages.length), 6000);
    return () => clearInterval(interval);
  }, []);

  const bg = isMobile
    ? (isDark ? heroImages[index].darkMobile : heroImages[index].lightMobile)
    : (isDark ? heroImages[index].dark : heroImages[index].light);
  const headline = heroImages[index].headline;

  return (
    <section
      className="relative flex flex-col md:flex-row items-center min-h-[calc(100vh-96px)] pt-24 pb-0 transition-all duration-700 bg-bg dark:bg-bg-dark"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'background 1s'
      }}
    >
      {/* Mobile: No image background, just color */}
      <div className="md:hidden w-full flex justify-center mb-4" style={{width: '100vw', aspectRatio: '2/1', maxWidth: '100vw'}}>
        {/* No image on mobile */}
      </div>
      <div className="max-w-2xl text-left z-10 px-4 ml-0 md:ml-12 lg:ml-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-primary dark:text-gray-50 drop-shadow-lg" style={{fontFamily: 'inherit'}}>
          {headline.map((line, i) => <span key={i} className="block">{line}</span>)}
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-[#222] dark:text-gray-300 font-semibold drop-shadow-lg">Yugen School Of Accounting & Taxation - Kottakkal Aims To Provide World Class Training For Global Accounting And Taxation</p>
        <div className="flex gap-4 flex-wrap">
          <a href="/about" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold text-lg bg-white/80 hover:bg-primary hover:text-gray-50 transition">Know more</a>
          <a href="/yugen.pdf" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold text-lg bg-white/80 hover:bg-primary hover:text-gray-50 transition" download>Download Brochures</a>
        </div>
      </div>
      {/* Desktop: Gradient overlay */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/0 to-transparent dark:from-black/50 pointer-events-none" />
      <style>{`
        @media (max-width: 767px) {
          .mobile-no-bg {
            background-image: none !important;
          }
        }
      `}</style>
    </section>
  );
} 