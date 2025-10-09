"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      e.currentTarget.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 max-w-5xl mx-auto pt-28 pb-8 lg:pt-28 lg:pb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center">
          <Badge className=" bg-accent/10 text-accent border-accent/20 font-medium mb-4">
            Contact
          </Badge>
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            We’d love to hear from you. Fill out the form and we’ll get back to
            you shortly.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 w-full"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 w-full"
          />

          <input
            type="text"
            name="company"
            placeholder="Company (optional)"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 w-full"
          />

          <select
            name="subject"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 w-full"
          >
            <option value="">Select a Subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership">Partnership</option>
            <option value="Support">Support</option>
            <option value="Careers">Careers</option>
          </select>

          <textarea
            name="message"
            placeholder="Your message..."
            rows={5}
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 w-full"
          />

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-all"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
          )}
        </form>

        {/* Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <iframe
            src="https://www.google.com/maps?q=6824+19th+St.+W+%23468,+University+Place,+WA+98466-5528,+USA&output=embed"
            width="100%"
            height="400"
            className="rounded-2xl border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
