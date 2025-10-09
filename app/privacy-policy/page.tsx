"use client"
import BackButton from "@/components/ui/back-button";
import { privacyPolicyContent } from "@/constants/PrivacyPolicy";

export default function PrivacyPolicy() {
  return (
    <>
      <BackButton />

      <main className="flex justify-center px-4 py-8">
        <div className="w-full max-w-3xl">
          {/* Heading */}
          <h1 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
            {privacyPolicyContent.heading}
          </h1>

          {/* Last Updated */}
          <p className="text-sky-900 underline text-sm md:text-base mt-1">
            {privacyPolicyContent.lastUpdated}
          </p>

          {/* Sections */}
          {privacyPolicyContent.sections.map((section, index) => (
            <section key={index} className="mt-4">
              {section.title && (
                <h2
                  className={`font-semibold text-lg md:text-xl ${
                    section.color || "text-slate-800"
                  }`}
                >
                  {section.title}
                </h2>
              )}

              {section.description && (
                <p className="mt-2 text-slate-700 text-sm md:text-base leading-relaxed">
                  {section.description}
                </p>
              )}
            </section>
          ))}

          <button
            onClick={() => window.open("/privacy-policy.docx", "_blank")}
            className="mt-6 mb-12 px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary/90"
          >
            See All
          </button>
        </div>
      </main>
    </>
  );
}
