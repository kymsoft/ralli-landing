"use client";

import { usePathname } from "next/navigation";
import { useWizard, Wizard } from "react-use-wizard";
import { TERMS_CONDITIONS } from "@/constants/TermsOfService";
import BackButton from "@/components/ui/back-button";


export default function TermsAndConditions() {
    const data = TERMS_CONDITIONS;
  const pathname = usePathname();

  const shouldShowButton = pathname.includes("/career-areas");


  return (
    <div className=" bg-slate-50 py-24 px-6">
      {/* Header */}
      <BackButton />

      {/* Scrollable Content */}
      <div className="max-h-[600px] overflow-y-auto py-4 px-4 md:px-6 lg:px-8">
        {/* Last Updated */}
        <p className="text-primary text-sm sm:text-base font-medium leading-relaxed">
          Last updated: {data?.time}
        </p>

        {/* Intro Paragraph */}
        <p className="mt-2 text-slate-800 text-sm sm:text-base font-light leading-7 pb-4">
          {data?.para}
        </p>

        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-primary leading-tight mb-4">
          {data?.title}
        </h2>

        {/* Dynamic Items */}
        {data?.items?.map((item, index) => (
          <div key={index} className="mb-6">
            {item?.mainTitle && (
              <h3 className="text-lg sm:text-xl font-extrabold text-primary leading-snug pb-1">
                {item.mainTitle}
              </h3>
            )}

            {item?.title && (
              <h4 className="text-lg sm:text-xl font-semibold text-primary leading-snug">
                {item.title}
              </h4>
            )}

            {item?.description && (
              <p className="text-slate-800 text-sm sm:text-base font-light leading-7 mt-2">
                {item.description}
              </p>
            )}

            {item?.subTitle && (
              <h5 className="text-lg sm:text-xl font-semibold text-black pl-4 mt-3">
                {item.subTitle}
              </h5>
            )}

            {item?.subDescription && (
              <p className="text-slate-800 text-sm sm:text-base font-light leading-7 pl-4">
                {item.subDescription}
              </p>
            )}
          </div>
        ))}

        {/* Contact Info */}
        <p className="text-slate-800 text-sm sm:text-base font-light leading-7 md:pl-4">
          By email: <span className="font-medium">contact@rallitechnologies.onmicrosoft.com</span>
        </p>
      </div>

      {/* Accept Button
      {shouldShowButton && (
        <div className="pt-4 px-4 md:px-6">
          <RalliButton label="Accept" onClick={handleAccept} />
        </div>
      )} */}
    </div>
  );
}
