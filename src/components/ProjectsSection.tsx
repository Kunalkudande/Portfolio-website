import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary mr-2">02.</span>
            Projects
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Full-stack applications, AI workflows, and automation projects, alongside browser extensions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative bg-card border border-border rounded-xl p-6 md:p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {project.type === "extension" ? (
                      <Chrome className="w-5 h-5 text-primary" />
                    ) : (
                      <ExternalLink className="w-5 h-5 text-primary" />
                    )}
                    <span className="font-mono text-xs text-primary uppercase tracking-wider">
                      {project.type === "extension" ? "Chrome Extension" : project.type}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.period && <p className="font-mono text-xs text-primary mb-4">{project.period}</p>}

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 mt-1.5 shrink-0 bg-primary rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 rounded-md font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
