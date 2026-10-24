import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary mr-2">03.</span>
            Experience
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            My professional journey and the companies I've contributed to.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full -translate-x-1/2 ${exp.current ? "bg-primary animate-pulse-glow" : "bg-muted-foreground"}`} />

                <div className="bg-card border border-border rounded-xl p-6 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
