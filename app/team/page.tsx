"use client"

import React, { JSX, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  img: string;
  accent?: string;
  link?: string;
};

const TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Lese Howard",
    role: "Co-founder, CEO and CMO",
    bio: "Lese is a dynamic leader with a proven track record in product management, program and project execution, and software development. She has spearheaded major organizational initiatives. With a strategic vision and technical expertise, Lese drives innovation and operational excellence. She holds a bachelor’s degree in Information Technology, a master’s degree in Management, and is a certified Project Management Professional (PMP).",
    img: "/avatar/lese.jpg",
    accent: "#10B981",
    link: "tel:+18888327448"
  },
  {
    id: "2",
    name: "LaDonna Alston",
    role: "Co-founder, CTO and COO",
    bio: "LaDonna Alston, Cofounder, Chief Commercial Officer (CCO), and Chief Technology Officer (CTO), is a seasoned technology executive with over 30 years of experience in IT. Holding a bachelor’s degree in Information Technology with a focus on information systems security, she drives the company’s strategic direction and technical innovation. With expertise in IT infrastructure, software development, and digital transformation, LaDonna leads teams to deliver cutting-edge solutions while scaling operations and fostering client relationships.",
    img: "/avatar/avatar-4.png",
    accent: "#06B6D4",
    link: "tel:+18888327448"
  },
  {
    id: "3",
    name: "Alexus Hunter",
    role: "Co-founder & CIO and CCO",
    bio: "Alexus Hunter is a creative innovator and technology leader. Known for her passion for solving complex problems, Alexus brings a wealth of experience from working in IT at a leading global aerospace company. Her career reflects a unique combination of creativity, technical expertise, and strategic leadership. She has made significant contributions in various roles, including computing architecture to project management. Alexus holds a Bachelor’s degree in Information Technology and is dedicated to pioneering innovative solutions in the tech industry.",
    img: "/avatar/avatar-2.png",
    accent: "#8B5CF6",
    link: "tel:+18888327448"
  },
  {
    id: "4",
    name: "Roshanda Ronco",
    role: "Co-founder & CFO",
    bio: "Roshanda Ronco, an accomplished engineering leader, is a beacon of inspiration in the fields of aviation and business operations. As CFO, she not only drives teams and innovation but also strengthens financial performance, setting a high standard for leadership in the industry. Her leadership and technical acumen, backed by her solid educational foundation, have been instrumental in the success of numerous projects and initiatives. Roshanda holds bachelor's and master's degrees in aeronautical science, and a master's degree in systems engineering.",
    img: "/avatar/avatar-3.png",
    accent: "#F59E0B",
    link: "tel:+18888327448"
  },
  {
    id: "5",
    name: "Kiyiana Lyles",
    role: "Chief Human Resources Officer (CHRO)",
    bio: "Kiyiana is an accomplished Human Resources professional with a strong background in recruiting, interviewing, talent acquisition, training and onboarding, benefits management, strategic policy development, regulatory compliance, and organizational administration. She excels in team building and thrives in collaborative environments, working toward achieving shared goals. Kiyiana holds a dual Bachelor of Science degree in Human Resources Management and Business Administration, which underpins her ability to align HR strategies with organizational objectives.",
    img: "/avatar/avatar-5.png",
    accent: "#EF4444",
    link: "tel:+18888327448"
  },
  {
    id: "6",
    name: "Marlon Howard",
    role: "Growth and Media",
    bio: "Marlon is a results-driven marketing professional with a passion for driving business growth through innovative strategies and data-driven decision-making. With a strong background in digital marketing, brand management, and customer acquisition, Marlon excels at creating and executing campaigns that resonate with target audiences and deliver measurable results. He is skilled in leveraging analytics to optimize marketing efforts and enhance ROI. Msrlon holds a Bachelor’s degree in Marketing and is committed to staying ahead of industry trends to ensure her strategies remain effective and impactful.",
    img: "/globe.svg",
    accent: "#06D6A0",
    link: "tel:+18888327448"
  },
  {
    id: "7",
    name: "Kemdi Ifeanyi",
    role: "Software Engineer",
    bio: "Kemdi is a technical specialist in system architectures and software development. With a bachelors degree in Software Engineering, he has proven expertise in all integral areas of software development (frontend, backend, devops, and system design and architecture). Kemdi excels mostly in critical thinking and solving real-world problems and providing state-of-the-art solutions. Being an integral part of the development of Unswayed, Kemdi has shown his dedication and contributions to solving the issues of hiring in the business world.",
    img: "/avatar/profile-pic.jpg",
    accent: "#980b93",
    link: "https://linkedin.com/in/kemdi-ifeanyi"
  },
];

export default function TeamsPage(): JSX.Element {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    
      <section className="max-w-6xl mx-auto pt-28 pb-8 lg:pt-28 lg:pb-8">
        <Badge className="bg-accent/10 text-accent border-accent/20 font-medium mb-4">
            Team
          </Badge>
        <header className="mb-8">
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Meet the team
          </motion.h1>
          <motion.p
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-slate-600 max-w-2xl"
          >
            RALLi Technologies was founded by four women with deep roots in engineering and information technology—visionaries committed to leveraging tech to solve real-world challenges. What began with a focus on transforming online hiring has evolved into a broader mission: building innovative, scalable platforms that improve how people work, connect, and grow.
          </motion.p>
        </header>

        {/* Collaboration banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-2xl border border-slate-100 shadow-sm p-6 mb-10 flex flex-col md:flex-row items-center gap-6 bg-white"
        >
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900">Innovation through collaboration</h3>
            <p className="mt-1 text-slate-600">
              The RALLi team continues to grow, bringing in top-tier talent who shares a passion for impact, excellence, and forward-thinking innovation. We’re building more than products—we’re building a movement.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Simple animated people illustration built with circles and rects (SVG) */}
            <motion.svg
              width={160}
              height={90}
              viewBox="0 0 160 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
            >
              <motion.circle cx="30" cy="50" r="16" fill="#10B981" initial={{ y: 4 }} animate={{ y: -4 }} transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }} />
              <motion.rect x="52" y="28" width="24" height="36" rx="6" fill="#06B6D4" initial={{ y: -3 }} animate={{ y: 3 }} transition={{ repeat: Infinity, duration: 2.2, repeatType: "reverse" }} />
              <motion.circle cx="116" cy="40" r="18" fill="#8B5CF6" initial={{ y: 3 }} animate={{ y: -3 }} transition={{ repeat: Infinity, duration: 1.8, repeatType: "reverse" }} />
              <motion.path d="M12 78c28-14 58-14 86 0" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>

            <div className="text-right md:text-left">
              <p className="text-sm text-slate-500">We hire with empathy and measurable criteria.</p>
              <div className="mt-2 flex gap-2 justify-end md:justify-start">
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-50 text-green-700">Collaborative interviews</span>
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-indigo-50 text-indigo-700">Fast feedback loops</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, idx) => (
              <motion.article
                key={member.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.45 }}
                className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md cursor-pointer"
                onClick={() => setSelected(member)}
                aria-label={`Open profile for ${member.name}`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover block" />
                    <span style={{ boxShadow: `0 4px 18px ${member.accent}33` }} className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-slate-900">{member.name}</h4>
                    <p className="text-sm text-slate-500">{member.role}</p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-2 transition-all duration-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-400">
                      <path d="M8 5l8 7-8 7V5z" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-600 line-clamp-2">{member.bio}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Modal / details */}
        {selected && (
          <motion.dialog
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-6 border border-slate-100"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-6 items-center">
                <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={selected.img} alt={selected.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-900">{selected.name}</h3>
                  <p className="text-sm text-slate-500">{selected.role}</p>
                </div>

                <div>
                  <button onClick={() => setSelected(null)} className="text-slate-500 hover:text-slate-700">Close</button>
                </div>
              </div>

              <div className="mt-4 text-slate-700">
                <p>{selected.bio}</p>

                <div className="grid grid-cols-4 gap-4 mt-4">
                                  <div
                                    className="flex flex-col items-center cursor-pointer"
                                    onClick={() =>
                                      window.open(
                                        "https://www.linkedin.com/company/unswayed",
                                        "_blank"
                                      )
                                    }
                                  >
                                    <FaLinkedin className="w-6 h-6 text-[#0A66C2]" />
                                    Linkedin
                                  </div>
                                  <div
                                    className="flex flex-col items-center cursor-pointer"
                                    onClick={() =>
                                      window.open("https://x.com/unswayed_ralli", "_blank")
                                    }
                                  >
                                    <FaXTwitter className="w-6 h-6 text-[#000000]" />
                                    Twitter
                                  </div>
                                  <div
                                    className="flex flex-col items-center cursor-pointer"
                                    onClick={() =>
                                      window.open("https://www.facebook.com/unswayed", "_blank")
                                    }
                                  >
                                    <FaFacebook className="w-6 h-6 text-[#1877F2]" />
                                    Facebook
                                  </div>
                                  <div
                                    className="flex flex-col items-center cursor-pointer"
                                    onClick={() =>
                                      window.open(
                                        "https://www.instagram.com/unswayed_ralli",
                                        "_blank"
                                      )
                                    }
                                  >
                                    <FaInstagram className="w-6 h-6 text-[#E4405F]" />
                                    Instagram
                                  </div>
                                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <a href={selected.link} className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white">Reach Out</a>
                <button onClick={() => setSelected(null)} className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-200 text-sm">Close</button>
              </div>
            </motion.div>
          </motion.dialog>
        )}
      </section>
  );
}
