import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" aria-label="Kunal Kudande — home" className="group inline-flex items-center gap-3 shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/favicon.svg" alt="" width="44" height="44" className="w-11 h-11 transition-transform duration-200 group-hover:-rotate-3" />
          <span className="flex flex-col gap-1">
            <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">Kunal Kudande<span className="text-primary">.</span></span>
            <span className="font-mono text-[9px] tracking-[0.17em] text-muted-foreground uppercase">Software Engineer</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary">0{index + 1}.</span> {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:kudandekunal1410@gmail.com"
              className="px-4 py-2 border border-primary text-primary rounded-md font-mono text-sm hover:bg-primary/10 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-mono text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="text-primary">0{index + 1}.</span> {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:kudandekunal1410@gmail.com"
                  className="px-6 py-3 border border-primary text-primary rounded-md font-mono hover:bg-primary/10 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
