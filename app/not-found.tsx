// app/not-found.tsx
"use client"
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    // optional: set document title when displayed in client
    if (typeof window !== "undefined") document.title = "404 — Page not found";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <section
        className="max-w-4xl w-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg p-8 md:p-12 grid gap-6 md:grid-cols-2 items-center"
        aria-labelledby="not-found-title"
        role="region"
      >
        <div>
          <h1 id="not-found-title" className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            404 — We couldn't find that.
          </h1>

          <p className="mt-4 text-slate-600 leading-relaxed">
            The page you were looking for either moved, never existed, or took an early coffee break.
            Try returning home or searching for the thing you were trying to reach.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary text-white text-sm font-medium shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300">
              ← Back home
            </Link>

            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-primary text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300">
              Contact support
            </Link>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-500">
            <div>
              <dt className="font-medium text-slate-700">Hint</dt>
              <dd className="mt-1">Check the URL for typos or try the home page.</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-700">If this is unexpected</dt>
              <dd className="mt-1">Open an issue, or contact us — we love investigating ghosts.</dd>
            </div>
          </dl>
        </div>

        <div className="flex justify-center md:justify-end items-center">
          {/* Friendly SVG illustration with subtle motion (respects prefers-reduced-motion) */}
          <div className="max-w-xs w-full">
            <svg
              viewBox="0 0 600 480"
              role="img"
              aria-labelledby="svgTitle svgDesc"
              className="w-full h-auto"
            >
              <title id="svgTitle">Lost map illustration</title>
              <desc id="svgDesc">An illustrated paper map with a dashed trail and a pin</desc>

              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#34d399" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              <g transform="translate(40,40)">
                <rect x="0" y="0" width="520" height="360" rx="20" fill="#f8fafc" stroke="#e6eef7" />
                <g id="map" transform="translate(24,24)">
                  <path d="M0 80 C120 10, 240 140, 360 60 C420 20, 480 100, 560 68" fill="none" stroke="url(#g)" strokeWidth="6" strokeLinecap="round" className="map-path" />
                  <circle cx="520" cy="48" r="10" fill="#ef4444" className="map-pin" />
                  <g transform="translate(40,220)">
                    <rect x="0" y="0" width="180" height="90" rx="8" fill="#fff" stroke="#e6eef7"/>
                    <text x="12" y="28" className="text-sm" style={{ fill: "#0f172a", fontWeight: 700 }}>Lost?</text>
                    <text x="12" y="52" className="text-xs" style={{ fill: "#475569" }}>Maybe try the home page</text>
                  </g>
                </g>
              </g>
              <style>{`
                @media (prefers-reduced-motion: no-preference) {
                  .map-path {
                    stroke-dasharray: 20 8;
                    animation: dash 6s linear infinite;
                  }
                  .map-pin { transform-origin: 520px 48px; animation: bob 3s ease-in-out infinite; }
                  @keyframes dash { to { stroke-dashoffset: -120; } }
                  @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                }
              `}</style>
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}
