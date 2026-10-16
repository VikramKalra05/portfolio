import { useState } from "react";
import { RESUME_URL } from "../constants";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold gradient-text tracking-tight hover:opacity-80 transition-opacity"
          >
            VK
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-lighter/50 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              download="Vikram-Kalra-Resume.pdf"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-surface-lighter/50 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 space-y-1 glass border-t border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-lighter/50 rounded-lg transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            download="Vikram-Kalra-Resume.pdf"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block mx-4 mt-2 px-5 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
