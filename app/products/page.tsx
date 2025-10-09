"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Network,
  Brain,
  Shield,
  Globe,
  BarChart3,
  CheckCircle,
  Clock,
  Users,
  Target,
  Zap,
  Rocket,
  Send,
} from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("unswayed");

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-28 pb-8 lg:pt-28 lg:pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            {/* <div className="w-full absolute left-4 text-left">
              <Link
                href="/"
                className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div> */}

            <h1 className="text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Revolutionary Products
            </h1>
          </div>

          {/* Product Navigation */}
          <div className="flex justify-center">
            <div className="bg-muted/50 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab("unswayed")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "unswayed"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-secondary hover:text-foreground"
                }`}
              >
                Unswayed
              </button>
              <button
                onClick={() => setActiveTab("dot")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "dot"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-secondary hover:text-foreground"
                }`}
              >
                DOT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Unswayed Product Details */}
      {activeTab === "unswayed" && (
        <section id="unswayed" className="pb-5">
          <div className="max-w-7xl mx-auto px-6">
            {/* Product Header */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/unswayed-logo.png"
                    alt="Unswayed Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <div>
                    <h2 className="font-heading font-bold text-4xl text-primary">
                      Unswayed
                    </h2>
                    <p className="text-xl text-secondary">
                      AI-Powered Employment Platform
                    </p>
                  </div>
                </div>

                <p className="text-xl text-secondary text-pretty leading-relaxed">
                  Unswayed is RALLi Technologies' revolutionary employment
                  platform that combines best-in-class features dedicated to
                  ensuring precise talent matching. We provide business
                  intelligence and AI software that uses a filtering system to
                  ensure all candidates are provided the same interview and
                  hiring opportunities based solely on their credentials and
                  professional fit.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 hover-lift cursor-pointer"
                    onClick={() =>
                      (window.location.href = "https://unswayed.com")
                    }
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Dialog>
                    <DialogTrigger>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-primary/30 hover:bg-primary/10 hover:text-black cursor-pointer hover-lift bg-transparent"
                      >
                        Watch Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-center">
                          Coming Soon!
                        </DialogTitle>
                        <DialogDescription className="text-center">
                          The video is under production and will be available
                          shortly. Thank you for your patience!
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl animate-float" />
                <Card className="relative bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift">
                  <CardContent className="p-8">
                    <Image
                      src="/unswayed-dashboard.png"
                      alt="Unswayed Platform Mockup"
                      width={450}
                      height={330}
                      className="rounded-2xl mx-auto"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-20">
              <h3 className="font-heading font-bold text-3xl text-center mb-12">
                Key Features
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-4">
                    AI-Driven Matching
                  </h4>
                  <p className="text-secondary text-pretty">
                    Advanced algorithms ensure precise talent-to-opportunity
                    alignment based on skills and fit.
                  </p>
                </Card>

                <Card className="text-center p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-4">
                    Fair and Inclusive Process
                  </h4>
                  <p className="text-secondary text-pretty">
                    Merit-based selection system eliminates unconscious bias in
                    recruitment decisions.
                  </p>
                </Card>

                <Card className="text-center p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-4">
                    Global Reach
                  </h4>
                  <p className="text-secondary text-pretty">
                    Connect with talent and opportunities worldwide through our
                    extensive network.
                  </p>
                </Card>

                <Card className="text-center p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-4">
                    Data Analytics
                  </h4>
                  <p className="text-secondary text-pretty">
                    Comprehensive insights and tracking for optimized
                    recruitment performance.
                  </p>
                </Card>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h3 className="font-heading font-bold text-3xl text-center mb-12">
                Benefits
              </h3>

              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <h4 className="font-heading font-bold text-2xl mb-6 text-primary">
                    For Job Seekers
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Entirely free with no fees for applicants to use
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        No account required for unlimited browsing
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        AI-powered resume writing assistance and success
                        toolkits
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Build talent network with comments, Reels, and
                        collaboration features
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Fair, merit-based evaluation process
                      </span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <h4 className="font-heading font-bold text-2xl mb-6 text-accent">
                    For Employers
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        30-day free trial period to test the platform
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Enhanced recruitment processes with improved accuracy
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Access to a diverse range of qualified candidates
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Comprehensive data analytics and candidate tracking
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Reduced time-to-hire with AI-powered matching
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md border-primary/30 p-12 text-center">
              <CardContent className="p-0">
                <h3 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
                  Ready to Transform Your Hiring Process?
                </h3>
                <p className="text-xl text-secondary text-pretty mb-8 max-w-2xl mx-auto">
                  Join hundreds of organizations already using Unswayed to build
                  better teams and create lasting impact through intelligent
                  talent matching.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 hover-lift cursor-pointer"
                    onClick={() =>
                      (window.location.href = "https://unswayed.com")
                    }
                  >
                    Explore now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* DOT Product Details */}
      {activeTab === "dot" && (
        <section id="dot" className="pb-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Product Header */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                    <Network className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-4xl text-accent">
                      DOT
                    </h2>
                    <p className="text-xl text-secondary">
                      Revolutionizing Connections
                    </p>
                  </div>
                </div>

                <p className="text-xl text-secondary text-pretty leading-relaxed">
                  D.O.T is RALLi Technologies’ next flagship product. A groundbreaking social platform designed to disrupt the status quo and create new ways for people to connect, share, and thrive.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-accent/10 text-accent border-accent/20 font-medium"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl animate-float" />
                <Card className="relative bg-card/80 backdrop-blur-md border-border/50 hover:border-accent/50 transition-all duration-500 hover-lift h-72 flex items-center justify-center">
                  <CardContent className="p-8">
                    <div>
                      <p className="text-6xl text-primary font-bold text-center">
                        Coming Soon!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Planned Features */}
            {/* <div className="mb-20">
              <h3 className="font-heading font-bold text-3xl text-center mb-12">
                What's Coming
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-4">
                    Process Automation
                  </h4>
                  <p className="text-secondary text-pretty">
                    Intelligent workflow automation that adapts to your
                    organization's unique hiring processes.
                  </p>
                </Card>

                <Card className="text-center p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-4">
                    Real-time Communication
                  </h4>
                  <p className="text-secondary text-pretty">
                    Real-time communication tools with candidates and team
                    during interview.
                  </p>
                </Card>

                <Card className="text-center p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-4">
                    Smart Analytics
                  </h4>
                  <p className="text-secondary text-pretty">
                    Advanced analytics and performance insights to optimize
                    operations and decision-making.
                  </p>
                </Card>

                <Card className="text-center p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-4">
                    One-stop Hiring Process
                  </h4>
                  <p className="text-secondary text-pretty">
                    Enterprise-grade platform that grades the candidiate on the
                    spot and provides real-time feedback.
                  </p>
                </Card>
              </div>
            </div> */}

            {/* Coming Soon Features */}
            {/* <div className="mb-20">
              <h3 className="font-heading font-bold text-3xl text-center mb-12">
                What's Coming
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift">
                  <h4 className="font-heading font-bold text-2xl mb-6 text-accent">
                    Phase 1: Foundation
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Intelligent workflow automation and optimization
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Core collaboration and communication tools
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Basic analytics and performance dashboards
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Integration with popular business tools
                      </span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-card/80 backdrop-blur-md border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift">
                  <h4 className="font-heading font-bold text-2xl mb-6 text-primary">
                    Phase 2: Advanced
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        AI-powered predictive analytics and insights
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Advanced automation with machine learning
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Custom workflow builder and templates
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">
                        Enterprise security and compliance features
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div> */}

            {/* Waitlist CTA */}
            {/* <Card className="bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-md border-accent/30 p-12 text-center">
              <CardContent className="p-0">
                <h3 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
                  Be First to Experience DOT
                </h3>
                <p className="text-xl text-secondary text-pretty mb-8 max-w-2xl mx-auto">
                  Join our exclusive waitlist to get early access to DOT and be
                  among the first to transform your digital operations with our
                  revolutionary platform.
                </p>

                <div className="max-w-md mx-auto mb-8">
                  <div className="flex gap-4">
                    <Input
                      placeholder="Enter your email address"
                      className="bg-background/50 border-border/50 focus:border-accent/50"
                    />
                    <Button className="bg-accent hover:bg-accent/90 hover-lift">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-accent/30 hover:bg-accent/10 hover-lift bg-transparent"
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/30 hover:bg-primary/10 hover-lift bg-transparent"
                  >
                    Schedule Preview
                  </Button>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </section>
      )}

      {/* Footer */}
      {/* <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <Link href="/" className="font-heading font-bold text-2xl block">
                RALLi Technologies
              </Link>
              <p className="text-primary-foreground/80 text-pretty">
                Empowering tomorrow's innovations through advanced AI and
                transformative technology solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg">Products</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab("unswayed")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Unswayed
                </button>
                <button
                  onClick={() => setActiveTab("dot")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  DOT
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg">Company</h3>
              <div className="space-y-2">
                <Link
                  href="/#about"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/#disruptors"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Disruptors
                </Link>
                <Link
                  href="/#contact"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg">Connect</h3>
              <div className="space-y-2">
                <p className="text-primary-foreground/80">
                  hello@rallitechnologies.com
                </p>
                <p className="text-primary-foreground/80">+1 (555) 123-RALLI</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80">
              © 2024 RALLi Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
