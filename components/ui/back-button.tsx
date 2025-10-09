"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftCircle } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="px-6 max-w-6xl mx-auto mt-6 mb-4">
      <button
        onClick={() => router.back()}
        aria-label="Go back"
        className="flex items-center gap-2 text-primary hover:text-sky-700 transition-colors"
      >
        <ArrowLeftCircle className="w-8 h-8" />
      </button>
    </div>
  );
}
