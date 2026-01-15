import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techSkills = [
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Nest.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "C++", category: "Language" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "REST APIs", category: "Backend" },
  { name: "gRPC", category: "Backend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Docker", category: "DevOps" },
];

const aiTools = [
  { name: "VS Code Copilot", description: "AI pair programming" },
  { name: "Cursor", description: "AI-first code editor" },
  { name: "LLM APIs", description: "OpenAI, Anthropic, Gemini" },
  { name: "MCP Servers", description: "Model context protocol" },
  { name: "Groq", description: "Fast inference" },
  { name: "Perplexity", description: "AI search" },
  { name: "Claude", description: "AI assistant" },
  { name: "Lovable", description: "UI generation" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary mr-2">01.</span>
            Skills & Tools
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Technologies I work with and AI tools that supercharge my productivity.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="font-mono text-primary mb-6 text-sm uppercase tracking-wider">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {techSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
                className="px-4 py-2 bg-card border border-border rounded-lg font-mono text-sm hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* AI Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-mono text-primary mb-6 text-sm uppercase tracking-wider">
            AI for Productivity
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="p-4 bg-card border border-border rounded-lg card-hover"
              >
                <p className="font-semibold mb-1">{tool.name}</p>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;