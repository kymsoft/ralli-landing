"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto pt-28 pb-8 lg:pt-28 lg:pb-8">
      {/* Hero / Intro */}
      <div className="flex items-center justify-center">
        <Badge className=" bg-accent/10 text-accent border-accent/20 font-medium mb-4">
          About
        </Badge>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          About RALLi Technologies
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          We believe in redefining how people connect, work, and grow—by
          leveraging intelligent technologies that solve real-world challenges.
        </p>
      </motion.div>

      {/* Flagship Product Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
              alt="Collaboration"
              className="rounded-2xl shadow-md w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-3">Unswayed</h2>
            <p className="text-slate-600 mb-4">
              Our flagship product,{" "}
              <span className="font-semibold">Unswayed</span>, is an online
              employment platform that empowers employers and job seekers with
              AI-driven tools, streamlined communication, and values-based
              hiring features. But Unswayed is just the beginning.
            </p>
            <p className="text-slate-600">
              We are building a portfolio of innovative solutions—from
              recruitment to productivity, collaboration, and beyond. Each
              product we develop aligns with our mission: to simplify complex
              processes, enhance decision-making, and deliver measurable impact
              through intuitive, tech-powered platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-900 mb-4"
        >
          Our Mission
        </motion.h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          At RALLi Technologies, our mission is to harness the power of
          technology to deliver transformative solutions that drive opportunity,
          equity, and innovation. We create platforms that empower individuals
          and organizations to connect, grow, and thrive—championing integrity,
          intelligent design, and meaningful impact.
        </p>
        <p className="mt-4 text-lg font-semibold text-slate-800">
          We’re not just building products. We’re redefining possibilities.{" "}
          <br />
          <span className="text-primary">A Different Kind of Disruptive.</span>
        </p>
      </section>

      {/* Vision */}
      <section className="mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-900 mb-4"
        >
          Our Vision
        </motion.h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          We envision a world where technology is a force for positive
          disruption—accelerating progress, unlocking human potential, and
          reshaping industries. RALLi Technologies strives to lead this change
          globally by delivering adaptive, AI-driven solutions that improve how
          people work, collaborate, and succeed.
        </p>
        <p className="mt-4 text-lg font-semibold text-slate-800">
          <span className="text-primary">A Different Kind of Disruptive</span>
          —in everything we do.
        </p>
      </section>

      {/* Goals */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate-900 mb-8 text-center"
        >
          Our Goals
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Empower Employers & Job Seekers",
              desc: "Deliver AI-driven, fair, and values-based hiring platforms that help organizations and individuals thrive.",
              img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
            },
            {
              title: "Drive Innovation Across Industries",
              desc: "Expand beyond recruitment into productivity, collaboration, and decision-making tools.",
              img: "/goal-8.avif",
            },
            {
              title: "Champion Equity & Opportunity",
              desc: "Ensure every solution we build fosters fairness, accessibility, and inclusion.",
              img: "/opportunity-image.jpg",
            },
            {
              title: "Global Impact",
              desc: "Scale adaptive solutions that can reshape industries worldwide.",
              video: "/goals.mp4",
            },
            {
              title: "Simplify Complex Processes",
              desc: "Use intelligent design to transform complicated workflows into intuitive experiences.",
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
            },
            {
              title: "Continuous Growth & Learning",
              desc: "Foster a culture of innovation, experimentation, and knowledge-sharing.",
              img: "/goal-5.png",
            },
          ].map((goal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              {goal.video ? (
                <video
                  src={goal.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-40 w-full object-cover"
                />
              ) : (
                <img
                  src={goal.img}
                  alt={goal.title}
                  className="h-40 w-full object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {goal.title}
                </h3>
                <p className="text-slate-600 text-sm">{goal.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="mt-12 text-center text-sm text-slate-500">
        <p>RALLi Technologies — A Different Kind of Disruptive.</p>
      </footer>
    </section>
  );
}
