import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Code2, Trophy } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Kunalkudande", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kunal-kudande/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/KunalKud09", label: "X (Twitter)" },
  { icon: Code2, href: "https://leetcode.com/u/kudandekunal1410/", label: "LeetCode" },
  { icon: Trophy, href: "https://www.hackerrank.com/profile/kudandekunal1410", label: "HackerRank" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full gradient-border overflow-hidden bg-card">
              <img
                src="/kunal-photo.jpeg"
                alt="Kunal Kudande"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=KK&size=256&background=2dd4bf&color=0a0f1c&font-size=0.4&bold=true";
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse-glow" />
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-primary mb-4"
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Kunal Kudande
              <span className="animate-blink text-primary">_</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6"
            >
              Software Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-lg mb-8 text-lg"
            >
              Software engineer with experience building scalable full-stack applications
              using Angular, NestJS, Node.js, and PostgreSQL. Focused on microservices
              architecture and high-performance backend services for multi-tenant SaaS.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:glow"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;