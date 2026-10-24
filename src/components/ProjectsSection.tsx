import { ExternalLink, Github, Chrome } from "lucide-react";

const projects = [
  {
    title: "BikersBrain",
    period: "Dec 2025 – Present",
    description: "Full-stack e-commerce platform for bike spare parts and accessories with end-to-end deployment.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Supabase", "Razorpay", "Brevo", "Cloudinary", "Gemini API"],
    github: "",
    live: "https://www.bikersbrain.in/",
    type: "Full-Stack E-Commerce",
    highlights: [
      "Built and deployed customer shopping workflows and backend APIs",
      "Integrated Supabase (PostgreSQL) for database management",
      "Implemented secure payments with Razorpay and automated emails with Brevo",
      "Integrated Cloudinary for efficient image storage and delivery",
      "AI-powered product assistant using Gemini API to auto-generate product details",
      "Admin dashboard to manage products, inventory, orders, and users",
    ],
  },
  {
    title: "Hermes – AI Agent and Workflow Automation",
    period: "Sep 2026 – Present",
    description: "Configured Hermes with LLM API routing, Telegram access, and scheduled workflows for everyday tasks.",
    tech: ["Python", "JavaScript", "Node.js", "Telegram", "Groq API", "OpenRouter", "Gemini API", "Oracle Cloud", "Vercel", "Linux"],
    type: "AI Workflow Automation",
    highlights: [
      "Added routing across free LLM APIs and connected Telegram for chat and task requests",
      "Configured scheduled generation and publishing of posts on X",
      "Set up Naukri profile updates twice daily",
      "Added daily and on-demand email digests with the top five AI news updates",
      "Deployed on an Oracle Cloud Ubuntu VPS with a web dashboard for schedules, run reports, and server status",
    ],
  },
  {
    title: "XAUUSD Trading Automation",
    period: "Mar 2026 – Present",
    description: "A MetaTrader 5 Expert Advisor that executes a predefined XAUUSD strategy with configurable position and risk settings.",
    tech: ["MQL5", "MetaTrader 5", "Azure VPS"],
    type: "Trading Automation",
    highlights: [
      "Automated strategy execution and position management with configurable lot and risk settings",
      "Deployed on an Azure VPS for persistent remote execution and monitoring",
    ],
  },
  {
    title: "AI Reply for X",
    description: "Chrome extension that generates AI-powered replies for X (Twitter) posts with a single click. Integrated multiple AI providers with secure client-side API calls.",
    tech: ["JavaScript", "Chrome Extensions", "OpenAI", "Anthropic", "Gemini", "Groq"],
    github: "https://github.com/Kunalkudande/X-AI-Reply-Chrome-Extention",
    type: "extension",
    highlights: [
      "Multiple AI providers",
      "MutationObserver for dynamic DOM",
      "Chrome Web Store compliant",
    ],
  },
  {
    title: "ChatGPT Navigation Dropdown",
    description: "Chrome extension that adds a floating navigation dropdown to quickly jump between user messages in long ChatGPT conversations.",
    tech: ["JavaScript", "Chrome Extensions", "DOM Manipulation", "CSS"],
    github: "https://github.com/Kunalkudande/chatgpt-jump-navigator",
    type: "extension",
    highlights: [
      "Real-time message detection",
      "Dark mode support",
      "Zero data collection",
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-16 md:py-20 border-t border-border">
    <div className="section-container">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div><p className="eyebrow">01 / SELECTED WORK</p><h2 className="section-title mb-0">Ideas turned into working software.</h2></div>
        <p className="text-sm text-muted-foreground max-w-xs">From customer-facing products to the workflows running behind them.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <article key={project.title} className={`group rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40 ${index === 0 ? "md:col-span-2" : ""}`}>
            <div className={index === 0 ? "grid lg:grid-cols-[1fr_0.85fr]" : ""}>
              {index === 0 && <div className="lg:order-2 relative min-h-64 p-7 md:p-10 flex flex-col justify-center bg-gradient-to-br from-primary/10 via-secondary/40 to-card border-b lg:border-b-0 lg:border-l border-border">
                <div className="font-mono text-[10px] tracking-widest text-primary mb-8">BIKERSBRAIN / PRODUCT OVERVIEW</div>
                <div className="flex items-center gap-3 mb-7"><div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">B.</div><div><p className="text-xl font-bold tracking-tight">Made for the ride.</p><p className="text-xs text-muted-foreground mt-1">Two-wheeler parts & accessories</p></div></div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">{["Storefront", "Backend APIs", "PostgreSQL"].map((label, i) => <div key={label} className="rounded-xl bg-background/70 border border-border p-3"><span className="font-mono text-primary text-[10px]">0{i + 1}</span><p className="mt-2">{label}</p></div>)}</div>
                <p className="text-xs text-muted-foreground mt-5">Shopping · Payments · Inventory · Admin</p>
              </div>}
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase tracking-widest mb-4">{project.type === "extension" ? <Chrome className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}{project.type === "extension" ? "Chrome Extension" : project.type}{index === 0 && <span className="ml-auto border border-primary/25 rounded-full px-2 py-1">Featured</span>}</div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">{project.title}</h3>
                {project.period && <p className="text-xs text-muted-foreground mb-4">{project.period}</p>}
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
                <ul className="space-y-2 mb-5">{project.highlights.slice(0, index === 0 ? 3 : 2).map(item => <li key={item} className="flex gap-2 text-sm text-muted-foreground"><span className="text-primary shrink-0">↗</span>{item}</li>)}</ul>
                {project.highlights.length > (index === 0 ? 3 : 2) && <details className="mb-5 text-sm text-muted-foreground"><summary className="cursor-pointer text-foreground hover:text-primary w-fit">More project details</summary><ul className="mt-3 space-y-2 pl-4 list-disc">{project.highlights.slice(index === 0 ? 3 : 2).map(item => <li key={item}>{item}</li>)}</ul></details>}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">{project.tech.slice(0, 5).map(tech => <span className="tech-chip" key={tech}>{tech}</span>)}{project.tech.length > 5 && <details className="text-xs"><summary className="tech-chip cursor-pointer hover:text-primary">+{project.tech.length - 5} tools</summary><div className="flex flex-wrap gap-1.5 mt-2">{project.tech.slice(5).map(tech => <span className="tech-chip" key={tech}>{tech}</span>)}</div></details>}</div>
                {(project.github || project.live) && <div className="flex flex-wrap gap-3 mt-6">{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="primary-button !py-2">Live demo <ExternalLink className="w-3.5 h-3.5" /></a>}{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="secondary-button !py-2"><Github className="w-3.5 h-3.5" /> View code</a>}</div>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default ProjectsSection;
