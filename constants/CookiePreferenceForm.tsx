"use client";

import { useState, useEffect } from "react";

type CookieSettings = {
  necessary: boolean;
  analytics: boolean;
};

export default function CookiePreferencesForm() {
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (stored) {
      setSettings(JSON.parse(stored));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("cookie_consent", JSON.stringify(settings));
    document.cookie = `cookie_consent=${settings.analytics ? "accepted" : "rejected"}; path=/; max-age=31536000`;
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <form className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded-xl shadow border border-slate-200">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">Cookie Preferences</h1>
      <p className="text-slate-600 mb-6">
        You can control how cookies are used on this site. Essential cookies are always enabled
        because they are necessary for the site to function properly.
      </p>

      <div className="space-y-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={settings.necessary}
            disabled
            className="mt-1 accent-slate-900"
          />
          <div>
            <p className="font-medium text-slate-900">Necessary Cookies</p>
            <p className="text-sm text-slate-600">
              Required for basic site functionality. Cannot be disabled.
            </p>
          </div>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={settings.analytics}
            onChange={(e) =>
              setSettings((prev) => ({ ...prev, analytics: e.target.checked }))
            }
            className="mt-1 accent-sky-600"
          />
          <div>
            <p className="font-medium text-slate-900">Analytics Cookies</p>
            <p className="text-sm text-slate-600">
              Help us understand how visitors use our website.
            </p>
          </div>
        </label>
      </div>

      <button
        type="button"
        onClick={handleSave}
        className="mt-6 w-full py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-slate-800 transition"
      >
        Save Preferences
      </button>

      {saved && (
        <p className="text-green-600 text-sm mt-3 text-center">
          Preferences saved successfully!
        </p>
      )}
    </form>
  );
}
