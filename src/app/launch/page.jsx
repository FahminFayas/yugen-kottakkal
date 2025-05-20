"use client";
import { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";
import { Fireworks } from "@fireworks-js/react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function LaunchPage() {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(5);
  const [showConfetti, setShowConfetti] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const intervalRef = useRef(null);
  const router = useRouter();

  // For react-particles
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const startCountdown = () => {
    setStarted(true);
    setShowConfetti(true);
    let c = 5;
    setCount(c);
    intervalRef.current = setInterval(() => {
      c -= 1;
      setCount(c);
      if (c === 0) {
        clearInterval(intervalRef.current);
        setTimeout(() => {
          setShowConfetti(false);
          setShowFireworks(true);
          setShowParticles(true);
        }, 400);
        // Show 'Welcome!' and effects for 3 seconds, then fade out and redirect
        setTimeout(() => {
          setFadeOut(true);
        }, 2200);
        setTimeout(() => {
          setShowFireworks(false);
          setShowParticles(false);
          router.push("/");
        }, 3200);
      }
    }, 1000);
  };

  // Fireworks options
  const fireworksOptions = {
    rocketsPoint: {
      min: 0,
      max: 100,
    },
    hue: {
      min: 0,
      max: 360,
    },
    delay: {
      min: 15,
      max: 30,
    },
    speed: 2,
    acceleration: 1.05,
    friction: 0.98,
    gravity: 1.5,
    particles: 90,
    trace: 5,
    explosion: 7,
    autoresize: true,
    brightness: {
      min: 60,
      max: 90,
    },
    decay: {
      min: 0.015,
      max: 0.03,
    },
    mouse: {
      click: false,
      move: false,
      max: 1,
    },
  };

  // Party popper/particle options
  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      number: { value: 0 },
      life: { count: 1 },
      shape: { type: ["circle", "square", "polygon", "star"] },
      size: {
        value: { min: 8, max: 32 },
        animation: { enable: true, sync: true, speed: 150, destroy: "min" },
      },
      color: {
        value: ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C", "#FF61F6", "#FF8C42", "#42FFD7", "#FFD700"],
      },
      move: {
        enable: true,
        speed: { min: 10, max: 30 },
        outModes: { default: "destroy" },
        trail: { fillColor: "#000", enable: false, length: 10 },
      },
      opacity: {
        value: 1,
        animation: { enable: true, speed: 0.6, minimumValue: 0.1, sync: false, startValue: "max", destroy: "min" },
      },
      rotate: { path: true },
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: { value: 1 / 3 },
          rate: { value: 100 },
          particles: {
            color: {
              value: ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C", "#FF61F6", "#FF8C42", "#42FFD7", "#FFD700"],
            },
            stroke: { width: 0 },
            number: { value: 0 },
            collisions: { enable: false },
            opacity: {
              value: 1,
              animation: { enable: true, speed: 0.6, minimumValue: 0.1, sync: false, startValue: "max", destroy: "min" },
            },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 3 }, animation: { enable: false } },
          },
        },
      },
    },
    emitters: [
      {
        direction: "top",
        life: { count: 0, duration: 0.1, delay: 0.1 },
        rate: { delay: 0.03, quantity: 2 },
        size: { width: 100, height: 0 },
        position: { y: 100, x: 50 },
      },
      {
        direction: "none",
        life: { count: 0, duration: 0.1, delay: 0.1 },
        rate: { delay: 0.05, quantity: 1 },
        size: { width: 100, height: 0 },
        position: { y: 50, x: 50 },
      },
    ],
  };

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Celebration ambient */}
      {mounted && showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={350} recycle={count > 0} gravity={0.25} />
      )}
      {/* Fireworks and party popper effects during fade-out and transition */}
      {showFireworks && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Fireworks options={fireworksOptions} style={{ width: '100vw', height: '100vh' }} />
        </div>
      )}
      {showParticles && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Particles options={particlesOptions} init={particlesInit} style={{ width: '100vw', height: '100vh' }} />
        </div>
      )}
      {/* Sparkle background */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none z-0 animate-pulse opacity-60">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <radialGradient id="sparkle" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[...Array(30)].map((_, i) => (
              <circle key={i} cx={Math.random() * 100 + "%"} cy={Math.random() * 100 + "%"} r={Math.random() * 80 + 20} fill="url(#sparkle)" />
            ))}
          </svg>
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-8 animate-bounce">Grand Launch Ceremony</h1>
        {!started ? (
          <button
            onClick={startCountdown}
            className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white text-3xl md:text-4xl font-bold px-16 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white border-opacity-30 animate-pulse"
          >
            Launch
          </button>
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-8xl md:text-9xl font-extrabold text-white drop-shadow-lg animate-pop mb-4 transition-all duration-500">
              {count > 0 ? count : "🎉"}
            </div>
            <div className="text-2xl text-white font-semibold tracking-widest animate-fadein">
              {count > 0 ? "Launching in..." : "Welcome!"}
            </div>
          </div>
        )}
      </div>
      {/* Ambient floating shapes */}
      {mounted && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-30 blur-2xl animate-float${i % 3 + 1}`}
              style={{
                width: `${60 + Math.random() * 120}px`,
                height: `${60 + Math.random() * 120}px`,
                background: `linear-gradient(135deg, #${Math.floor(Math.random()*16777215).toString(16)} 0%, #${Math.floor(Math.random()*16777215).toString(16)} 100%)`,
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                zIndex: 0,
              }}
            />
          ))}
        </div>
      )}
      {/* Custom keyframes for pop and float */}
      <style jsx>{`
        @keyframes pop {
          0% { transform: scale(0.7); opacity: 0.5; }
          60% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop { animation: pop 0.7s cubic-bezier(0.23, 1, 0.32, 1); }
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadein { animation: fadein 1.2s ease; }
        @keyframes float1 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-float1 { animation: float1 7s ease-in-out infinite; }
        @keyframes float2 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(30px) scale(0.95); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-float2 { animation: float2 9s ease-in-out infinite; }
        @keyframes float3 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-float3 { animation: float3 11s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
