import { Code2, Layers, Database, Cloud, Sparkles, Workflow } from "lucide-react";
const groups = [
  { title: "Frontend", icon: Code2, items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { title: "Backend & systems", icon: Layers, items: ["Node.js", "NestJS", "Express.js", "REST APIs", "gRPC", "WebSockets", "Microservices", "RBAC", "Multi-tenancy", "API Gateway"] },
  { title: "Data & infrastructure", icon: Database, items: ["PostgreSQL", "MongoDB", "Prisma", "Supabase", "Redis", "RabbitMQ"] },
  { title: "Cloud & developer tools", icon: Cloud, items: ["AWS S3", "Azure", "Oracle Cloud", "Docker", "Git", "GitHub", "Postman", "Swagger"] },
];
const SkillsSection = () => (
  <section id="skills" className="py-16 md:py-20 border-t border-border">
    <div className="section-container">
      <p className="eyebrow">03 / TOOLKIT</p><h2 className="section-title">The tools behind the work.</h2>
      <p className="section-description">Technologies I use across professional work and personal projects.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {groups.map(({ title, icon: Icon, items }) => <div key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-semibold flex items-center gap-3 mb-5"><Icon className="w-5 h-5 text-primary" />{title}</h3><div className="flex flex-wrap gap-2">{items.map(name => <span key={name} className="tech-chip">{name}</span>)}</div></div>)}
      </div>
      <p className="text-sm text-muted-foreground mt-5">Additional languages: SQL, C++, and Python.</p>
      <div className="mt-5 grid md:grid-cols-2 gap-6 rounded-2xl bg-secondary/30 border border-border p-6">
        <div><h3 className="font-semibold flex gap-2 items-center mb-3"><Sparkles className="w-4 h-4 text-primary" /> AI for coding & research</h3><p className="text-sm leading-7 text-muted-foreground">ChatGPT · Claude · Gemini · GitHub Copilot · Cursor · Perplexity</p></div>
        <div><h3 className="font-semibold flex gap-2 items-center mb-3"><Workflow className="w-4 h-4 text-primary" /> APIs & automation</h3><p className="text-sm leading-7 text-muted-foreground">Gemini API · Groq API · OpenRouter · LLM API routing · Workflow automation</p></div>
      </div>
    </div>
  </section>
);
export default SkillsSection;
