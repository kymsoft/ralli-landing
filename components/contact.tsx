import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
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
    <Card className="bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300">
      <CardContent className="p-8 lg:p-12">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-foreground"
              >
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-foreground"
              >
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="Enter your email address"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="company"
                className="text-sm font-medium text-foreground"
              >
                Company
              </label>
              <input
                id="company"
                type="text"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="Enter your company name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-foreground"
            >
              Subject *
            </label>
            <select
              id="subject"
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            >
              <option value="">Select a subject</option>
              <option value="unswayed">Unswayed - Employment Platform</option>
              <option value="dot">DOT</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="demo">Schedule a Demo</option>
              <option value="support">Technical Support</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-vertical"
              placeholder="Tell us about your needs and how we can help..."
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              id="consent"
              type="checkbox"
              required
              className="mt-1 w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary/50 focus:ring-2"
            />
            <label htmlFor="consent" className="text-sm text-secondary">
              I agree to receive communications from RALLi Technologies and
              understand that I can unsubscribe at any time. *
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="submit"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover-lift flex-1 sm:flex-none p-2"
            >
              Send Message
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          {status && (
            <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;
