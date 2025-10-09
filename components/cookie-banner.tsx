"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", JSON.stringify({ necessary: true, analytics: true }));
    document.cookie = "cookie_consent=accepted; path=/; max-age=31536000"; // 1 year
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", JSON.stringify({ necessary: true, analytics: false }));
    document.cookie = "cookie_consent=rejected; path=/; max-age=31536000";
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-slate-900 text-white p-4 md:p-6 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-100">
          We use cookies to enhance your experience, analyze usage, and improve our services.{" "}
          <Link href="/cookie-preferences" className="underline hover:text-sky-300">
            Manage preferences
          </Link>
        </p>

        <div className="flex gap-2 mt-2 md:mt-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 rounded-md border border-slate-400 text-sm hover:bg-slate-800"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary/90"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
