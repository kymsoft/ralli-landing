"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  Users,
  Shield,
  Leaf,
  Rocket,
  Star,
  Globe,
  Brain,
  Target,
  CheckCircle,
  Briefcase,
  Network,
  Heart,
  Lightbulb,
  TrendingUp,
  Award,
  Menu,
  X,
  Mail,
  Phone,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Contact from "@/components/contact";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const disruptors = [
  {
    icon: Zap,
    title: "Lead with Relentless Agility",
    description:
      "Adapting swiftly to market changes and technological advances with unwavering determination and strategic flexibility.",
  },
  {
    icon: Users,
    title: "Team Ignited with Collaboration",
    description:
      "Fostering synergistic partnerships and collective innovation that amplifies individual strengths into transformative solutions.",
  },
  {
    icon: Shield,
    title: "Stand on Unshakable Empowerment",
    description:
      "Building confidence and capability in every stakeholder through transparent processes and inclusive technology access.",
  },
  {
    icon: Heart,
    title: "Walk in Uncompromising Integrity",
    description:
      "Maintaining ethical standards and authentic relationships as the foundation of all our technological innovations.",
  },
  {
    icon: Leaf,
    title: "Build with Radical Sustainability",
    description:
      "Creating solutions that not only meet today's needs but ensure long-term environmental and social responsibility.",
  },
  {
    icon: Rocket,
    title: "Advance through Insane Innovation",
    description:
      "Pushing boundaries with breakthrough technologies that redefine what's possible in digital transformation.",
  },
];

export default function RALLiTechnologies() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 opacity-60">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(to right, #e2e2e2 1px, transparent 1px),
              linear-gradient(to bottom, #e2e2e2 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-accent text-accent-foreground border-accent font-medium">
                <Star className="w-4 h-4 mr-2" />
                Founded by Four Visionary Women
              </Badge>

              <h1 className="font-heading font-bold text-2xl text-center lg:text-4xl md:text-left text-balance leading-tight">
                Empowering Tomorrow's
                <span className="text-accent block">Innovations</span>
              </h1>

              <p className="text-xl text-secondary text-pretty leading-relaxed max-w-2xl">
                At RALLi Technologies, we believe in redefining how people
                connect, work, and grow—by leveraging intelligent technologies
                that solve real-world challenges. Our flagship product,
                Unswayed, is an online employment platform that empowers
                employers and job seekers with AI-driven tools, streamlined
                communication, and values-based hiring features.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="group bg-accent hover:bg-accent/90 hover-lift cursor-pointer"
                  >
                    Explore Our Solutions
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl text-primary">
                    500K+
                  </div>
                  <div className="text-sm text-secondary">Connections Made</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl text-primary">
                    99%
                  </div>
                  <div className="text-sm text-secondary">Match Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl text-primary">
                    24/7
                  </div>
                  <div className="text-sm text-secondary">AI Support</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up md:block hidden flex justify-center items-center w-full align-center">
              <div>
                <Image
                  src="/hero-image.png"
                  alt="Hero Image"
                  width={500}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Disruptors Section */}
      <section id="disruptors" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 font-medium mb-4">
              Our Foundation
            </Badge>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-balance mb-6">
              Six Technology Disruptors
            </h2>
            <p className="text-xl text-secondary text-pretty max-w-3xl mx-auto">
              Technology disruptors drive progress and compel industries to
              adapt, motivate and evolve. At RALLi Technologies, we commit to
              reshaping the technology landscape through our six disruptors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {disruptors.map((disruptor, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-500 bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/50 hover-lift"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <disruptor.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-4 text-balance">
                    {disruptor.title}
                  </h3>
                  <p className="text-secondary text-pretty leading-relaxed">
                    {disruptor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 font-medium mb-4">
              Our Solutions
            </Badge>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-balance mb-6">
              Revolutionary Products
            </h2>
            <p className="text-xl text-secondary text-pretty max-w-3xl mx-auto">
              Discover our cutting-edge AI-powered platforms designed to
              transform how organizations connect, collaborate, and grow in the
              digital age.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Unswayed Preview */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-primary/5 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover-lift">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src="/unswayed-logo.png"
                    alt="Unswayed Logo"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="font-heading font-bold text-3xl text-primary">
                      Unswayed
                    </h3>
                    <p className="text-secondary">
                      AI-Powered Employment Platform
                    </p>
                  </div>
                </div>

                <p className="text-lg text-secondary mb-6 text-pretty leading-relaxed">
                  Revolutionary employment platform combining best-in-class
                  features for precise talent matching. Our AI software ensures
                  fair, merit-based hiring through advanced filtering systems.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">AI-Driven Matching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">
                      Fair and Inclusive Recruitment
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Global Reach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Data Analytics</span>
                  </div>
                </div>

                <Link
                  href="https://unswayed.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="group bg-primary hover:bg-primary/90 hover-lift cursor-pointer">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* DOT Preview */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-accent/5 backdrop-blur-md border-border/50 hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover-lift">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Network className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-3xl text-accent">
                      DOT
                    </h3>
                    <p className="text-secondary">
                     Upcoming
                    </p>
                  </div>
                </div>

                <p className="text-lg text-secondary mb-6 text-pretty leading-relaxed">
                  D.O.T is RALLi Technologies’ next flagship product. A groundbreaking social platform designed to disrupt the status quo and create new ways for people to connect, share, and thrive.
                </p>

                {/* <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Hiring Process Automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Voice AI Agent Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Smart Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">One-stop Hiring Process</span>
                  </div>
                </div> */}

                <Link href="/products#dot">
                  <Button
                    variant="outline"
                    className="group border-accent/30 hover:bg-accent/10 text-accent hover:text-accent hover-lift bg-transparent"
                  >
                    Coming Soon
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 hover-lift cursor-pointer"
              >
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </Badge>

              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-balance">
                Founded by Four Visionary Women in Tech
              </h2>

              <p className="text-lg text-secondary text-pretty leading-relaxed">
                RALLi Technologies was born from the shared passion of four
                women with deep technical expertise in engineering and
                information technology. United by a vision to use technology as
                a force for transformative change, we set out to revolutionize
                how organizations connect, collaborate, and grow.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mt-1">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Innovation-Driven
                    </h3>
                    <p className="text-secondary text-pretty">
                      We leverage advanced technologies to enhance communication
                      and streamline complex processes across industries and
                      communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mt-1">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Transformative Impact
                    </h3>
                    <p className="text-secondary text-pretty">
                      Our solutions ignite impactful connections, creating
                      access and opportunity in an increasingly digital world.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mt-1">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Long-term Value
                    </h3>
                    <p className="text-secondary text-pretty">
                      We build intelligent, scalable solutions that promote
                      innovation, efficiency, and sustainable growth for the
                      future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-float" />
              <Card className="relative bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-accent/5 rounded-2xl">
                      <Image
                        src="/avatar/avatar-3.png"
                        alt="Founders Image"
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-4"
                      />
                      <div className="font-heading font-bold text-primary mb-1">
                        Roshanda Ronco
                      </div>
                      <div className="text-sm text-secondary">
                        Co-founder, CFO
                      </div>
                    </div>
                    <div className="text-center p-6 bg-accent/5 rounded-2xl">
                      <Image
                        src="/avatar/avatar-2.png"
                        alt="Founders Image"
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-4"
                      />
                      <div className="font-heading font-bold text-primary mb-1">
                        Alexus Hunter
                      </div>
                      <div className="text-sm text-secondary">
                        Co-founder, CIO and CCO
                      </div>
                    </div>
                    <div className="text-center p-6 bg-primary/5 rounded-2xl">
                      <Image
                        src="/avatar/avatar-4.png"
                        alt="Founders Image"
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-4"
                      />
                      <div className="font-heading font-bold text-primary mb-1">
                        LaDonna Alston
                      </div>
                      <div className="text-sm text-secondary">
                        Co-founder, CTO and COO
                      </div>
                    </div>
                    <div className="text-center p-6 bg-primary/5 rounded-2xl">
                      <Image
                        src="/avatar/lese.jpg"
                        alt="Founders Image"
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-4"
                      />
                      <div className="font-heading font-bold text-primary mb-1">
                        Lese Howard
                      </div>
                      <div className="text-sm text-secondary">
                        Co-founder, CEO and CMO
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-accent text-accent-foreground border-accent font-medium mb-4">
              Get In Touch
            </Badge>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-balance mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-secondary text-pretty max-w-3xl mx-auto">
              Connect with our team to discover how RALLi Technologies can
              revolutionize your organization's approach to talent acquisition
              and digital operations.
            </p>
          </div>

          <Contact />

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 cursor-pointer"
                onClick={() =>
                  (window.location.href =
                    "mailto:contact@rallitechnologies.online")
                }
              >
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                Email Us
              </h3>
              <p className="text-secondary">contact@rallitechnologies.online</p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 cursor-pointer"
                onClick={() => (window.location.href = "tel:+18888327448")}
              >
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                Call Us
              </h3>
              <p className="text-secondary"> 1-888-832-7448</p>
            </div>

            <Dialog>
              <div className="text-center">
                <DialogTrigger>
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 cursor-pointer">
                    <Rocket className="w-8 h-8 text-accent" />
                  </div>
                </DialogTrigger>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Connect
                </h3>
                <p className="text-secondary">Social Platforms</p>
              </div>

              <DialogContent>
                <div className="grid grid-cols-4 gap-4">
                  <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/unswayed",
                        "_blank"
                      )
                    }
                  >
                    <FaLinkedin className="w-12 h-12 text-[#0A66C2]" />
                    Linkedin
                  </div>
                  <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() =>
                      window.open("https://x.com/unswayed_ralli", "_blank")
                    }
                  >
                    <FaXTwitter className="w-12 h-12 text-[#000000]" />
                    Twitter
                  </div>
                  <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() =>
                      window.open("https://www.facebook.com/unswayed", "_blank")
                    }
                  >
                    <FaFacebook className="w-12 h-12 text-[#1877F2]" />
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
                    <FaInstagram className="w-12 h-12 text-[#E4405F]" />
                    Instagram
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
