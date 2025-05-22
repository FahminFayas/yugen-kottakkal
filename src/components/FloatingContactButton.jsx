'use client';
import { useState } from 'react';

export default function FloatingContactButton({ bottom = 'bottom-10' }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`fixed right-5 ${bottom} z-[1100] flex flex-col items-end gap-3 md:gap-4`}>
      {open && (
        <div className="bg-white dark:bg-[#23272f] rounded-2xl shadow-2xl p-4 flex flex-col gap-3 mb-2 animate-fade-in border border-gray-200 dark:border-[#333] min-w-[220px]">
          <a
            href="https://wa.me/918943888005"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#25D366]/10 transition text-[#25D366] font-semibold text-base"
            title="WhatsApp"
            aria-label="Chat on WhatsApp"
            role="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.617h-.001a8.77 8.77 0 01-4.473-1.231l-.321-.191-3.326.868.889-3.24-.209-.332a8.725 8.725 0 01-1.334-4.626c.001-4.822 3.934-8.754 8.756-8.754 2.337 0 4.533.911 6.188 2.566a8.68 8.68 0 012.566 6.187c-.003 4.822-3.936 8.754-8.755 8.754m7.149-15.904A10.449 10.449 0 0012.05 1.5C6.228 1.5 1.3 6.428 1.298 12.25c0 2.159.566 4.263 1.641 6.115L.458 22.542a1.13 1.13 0 001.398 1.398l4.177-1.482a10.423 10.423 0 004.017.814h.004c5.822 0 10.75-4.928 10.752-10.75a10.42 10.42 0 00-3.057-7.615"/></svg>
            <span className="text-[#222] dark:text-white">WhatsApp</span>
          </a>
          <a
            href="tel:+918943888006"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition text-primary font-semibold text-base"
            title="Call"
            aria-label="Call Yugen Education"
            role="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-2.071 1.679-3.75 3.75-3.75h2.25c.414 0 .75.336.75.75v3.375c0 .414-.336.75-.75.75H6.75v1.5A8.25 8.25 0 0015 18.75h1.5v-2.25c0-.414.336-.75.75-.75h3.375c.414 0 .75.336.75.75v2.25a3.75 3.75 0 01-3.75 3.75h-2.25C6.679 21.75 2.25 17.321 2.25 12V6.75z" /></svg>
            <span className="text-[#222] dark:text-white">Call</span>
          </a>
        </div>
      )}
      <button
        className="bg-primary text-white rounded-full w-[60px] h-[60px] flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition focus:outline-none group"
        title="Contact Options"
        aria-label="Show contact options"
        onClick={() => setOpen(o => !o)}
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
      >
        {open ? (
          <span className="text-3xl">×</span>
        ) : (
          <span className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-1"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9zm-9 4h.01M12 16h.01" /></svg>
            <span className="text-xs font-semibold mt-1">Contact</span>
          </span>
        )}
      </button>
      <style>{`
        @media (max-width: 500px) {
          .fixed.right-5.bottom-24 { display: none !important; }
        }
        .animate-fade-in { animation: fadeIn 0.3s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
} 