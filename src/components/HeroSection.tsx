import { ArrowDownRight, Download, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
    <div className="hero-grid absolute inset-0 pointer-events-none" />
    <div className="section-container relative">
      <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-12 lg:gap-20 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-xs text-primary mb-7"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Open to software engineering opportunities</span>
          <p className="font-mono text-sm text-muted-foreground mb-3">HELLO, I'M KUNAL KUDANDE</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08]">Building products.<br /><span className="text-primary">Connecting systems.</span></h1>
          <h2 className="text-xl md:text-2xl font-medium mt-6 mb-4">Software Engineer <span className="text-muted-foreground">/ Full Stack</span></h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">I build web applications, backend services, and practical AI workflows. Currently working on multi-tenant SaaS at BeeLogical, with React, TypeScript, Node.js, and NestJS.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#projects" className="primary-button">Explore my work <ArrowDownRight className="w-4 h-4" /></a>
            <a href="/Kunal_Kudande_Resume.pdf" download className="secondary-button"><Download className="w-4 h-4" /> Download resume</a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-7 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Pune, India</span>
            <a href="https://github.com/Kunalkudande" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary"><Github className="w-4 h-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/kunal-kudande/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary"><Linkedin className="w-4 h-4" /> LinkedIn</a>
          </div>
        </div>
        <div className="relative max-w-sm w-full mx-auto lg:ml-auto">
          <div className="absolute -inset-5 bg-primary/10 blur-3xl rounded-full" />
          <div className="relative rounded-3xl border border-border overflow-hidden bg-card">
            <img src="/kunal-photo.jpeg" alt="Kunal Kudande" className="w-full h-72 sm:h-80 object-cover object-top" />
            <div className="p-5 border-t border-border">
              <p className="font-semibold">Kunal Kudande</p>
              <p className="text-sm text-muted-foreground mt-1">Jr. Software Engineer @ BeeLogical</p>
              <div className="flex items-center gap-2 mt-4 text-xs font-mono text-primary"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> FULL STACK · BACKEND · AUTOMATION</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-border mt-14 pt-7">
        <div><p className="font-semibold">Production SaaS</p><p className="text-sm text-muted-foreground mt-1">Multi-tenancy, APIs & access control</p></div>
        <div><p className="font-semibold">250+ problems solved</p><p className="text-sm text-muted-foreground mt-1">LeetCode & GeeksforGeeks</p></div>
        <a href="#experience" className="group"><p className="font-semibold flex gap-2 items-center">Rockstar Rookie 2025 <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" /></p><p className="text-sm text-muted-foreground mt-1">Recognized at BeeLogical</p></a>
      </div>
    </div>
  </section>
);
export default HeroSection;
