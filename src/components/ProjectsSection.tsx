import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Chrome } from "lucide-react";

const projects = [
  {
    title: "MedVerify",
    description: "A Medical Deepfake Image Detection System using microservices architecture. Built prediction service with FastAPI using trained CNN models for real-time deepfake detection.",
    tech: ["React.js", "FastAPI", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/Kunalkudande/medverify",
    live: "https://medverify-beta.vercel.app/",
    type: "project",
    highlights: [
      "Microservices architecture",
      "CNN models for deepfake detection",
      "Deployed on Vercel & Hugging Face",
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
            Some things I've built — from web apps to browser extensions.
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
                      {project.type === "extension" ? "Chrome Extension" : "Web App"}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
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