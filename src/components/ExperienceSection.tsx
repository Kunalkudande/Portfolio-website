import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "BeeLogical Software Solutions",
    role: "Jr. Software Engineer",
    location: "Pune, Maharashtra",
    period: "Oct 2025 – Present",
    current: true,
    responsibilities: [
      "Develop frontend and backend features for a multi-tenant coworking SaaS platform supporting bookings, users, and tenant-specific workflows",
      "Enhance React.js modules with UI and layout updates and integrate tenant-facing features with backend services",
      "Implement role-based access control (RBAC) and maintain User Management workflows for users, roles, and permissions",
      "Implemented direct client-to-cloud uploads using AWS S3 pre-signed URLs to reduce backend load and improve upload performance",
      "Integrated Redis caching across core services to reduce repeated database queries and improve API response times",
      "Implemented asynchronous communication using RabbitMQ for heavy background tasks from request processing",
      "Investigate and resolve production defects across frontend and backend modules",
    ],
  },
  {
    company: "BeeLogical Software Solutions",
    role: "Tech Intern — Full Stack Developer",
    location: "Pune, Maharashtra",
    period: "Jul 2025 – Oct 2025",
    current: false,
    responsibilities: [
      "Developed NestJS backend services with PostgreSQL for tenant-aware SaaS workflows and connected microservices using gRPC",
      "Built core backend services including API Gateway, Authentication Service, Drive Service, and Notification Service",
      "Developed a configuration-driven dynamic data table supporting filtering, sorting, pagination, and row-level actions",
      "Built reusable Angular modules including Employee Directory, Roles and Permissions, Kanban Board, and Calendar",
    ],
  },
  {
    company: "Colombo AI",
    role: "Backend Developer Intern",
    location: "Remote",
    period: "Aug 2024 – Dec 2024",
    current: false,
    responsibilities: [
      "Developed a real-time chat messaging backend using WebSockets, Node.js, Express.js, and MongoDB",
      "Implemented backend APIs for a Vibes/Story Repost feature and collaborated with frontend developers for integration",
    ],
  },
];

const companies = [
  { name: "BeeLogical Software Solutions", location: "Pune, Maharashtra", roles: experiences.slice(0, 2) },
  { name: "Colombo AI", location: "Remote", roles: experiences.slice(2) },
];
const ExperienceSection = () => (
  <section id="experience" className="py-16 md:py-20 bg-secondary/15 border-t border-border">
    <div className="section-container">
      <p className="eyebrow">02 / EXPERIENCE</p><h2 className="section-title">Learning by shipping.</h2>
      <p className="section-description">Building production features, connecting services, and growing from intern to software engineer.</p>
      <div className="space-y-6">{companies.map(company => <article key={company.name} className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="flex flex-wrap justify-between gap-3 pb-6 border-b border-border"><h3 className="text-lg font-semibold flex gap-3 items-center"><Briefcase className="w-5 h-5 text-primary shrink-0" />{company.name}</h3><span className="text-sm text-muted-foreground inline-flex gap-1.5 items-center"><MapPin className="w-4 h-4" />{company.location}</span></div>
        <div className="mt-6 ml-1 border-l border-border space-y-8">{company.roles.map(role => <div key={role.role} className="relative pl-6"><span className={`absolute w-2.5 h-2.5 rounded-full -left-[5.5px] top-1.5 ${role.current ? "bg-primary" : "bg-muted-foreground"}`} /><div className="flex flex-wrap gap-2 justify-between mb-3"><h4 className="font-semibold">{role.role}{role.current && <span className="ml-2 text-[10px] font-normal rounded-full px-2 py-1 bg-primary/10 text-primary">Current</span>}</h4><span className="text-xs text-muted-foreground flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{role.period}</span></div>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">{role.responsibilities.slice(0, 3).map(item => <li key={item} className="flex gap-2"><span className="text-primary">·</span>{item}</li>)}</ul>
          {role.responsibilities.length > 3 && <details className="mt-3 text-sm"><summary className="cursor-pointer text-primary w-fit">More contributions</summary><ul className="list-disc pl-4 mt-3 space-y-2 text-muted-foreground leading-relaxed">{role.responsibilities.slice(3).map(item => <li key={item}>{item}</li>)}</ul></details>}
        </div>)}</div>
      </article>)}</div>
    </div>
  </section>
);
export default ExperienceSection;
