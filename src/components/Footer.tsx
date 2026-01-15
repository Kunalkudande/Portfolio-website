import { Github, Linkedin, Twitter, Code2, Trophy, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Kunalkudande", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kunal-kudande/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/KunalKud09", label: "X" },
  { icon: Code2, href: "https://leetcode.com/u/kudandekunal1410/", label: "LeetCode" },
  { icon: Trophy, href: "https://www.hackerrank.com/profile/kudandekunal1410", label: "HackerRank" },
];

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="section-container text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Let's Connect
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          I'm currently looking for new opportunities. Feel free to reach out!
        </p>

        <a
          href="mailto:kudandekunal1410@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity mb-12 glow"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>

        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="font-mono text-sm text-muted-foreground">
          Built with ❤️ by Kunal Kudande
        </p>
      </div>
    </footer>
  );
};

export default Footer;