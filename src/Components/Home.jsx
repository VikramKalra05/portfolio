import { useState, useEffect } from "react";
import photo from "../Documents/Vikram-Kalra-Photo.webp";
import { RESUME_URL } from "../constants";

const roles = [
  "Full Stack Developer",
  "Startup Founder & CTO",
  "Next.js Developer",
  "TypeScript Engineer",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            currentRole.substring(
              0,
              isDeleting ? text.length - 1 : text.length + 1,
            ),
          );
        },
        isDeleting ? 50 : 100,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up">
          <p className="text-accent font-mono text-sm md:text-base mb-4 tracking-wider">
            &lt;Hello World /&gt;
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-text-primary">
            Hey! I'm
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Vikram Kalra
          </h1>
          <div className="h-10 md:h-12 flex items-center justify-center md:justify-start">
            <span className="text-xl md:text-2xl font-medium text-text-secondary">
              {text}
            </span>
            <span className="text-xl md:text-2xl font-medium text-primary animate-blink ml-0.5">
              |
            </span>
          </div>

          <p className="text-text-muted mt-6 max-w-lg text-base md:text-lg leading-relaxed mx-auto md:mx-0">
            Building efficient, scalable web applications with modern
            technologies. Passionate about clean code and great user
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
            <a
              href={RESUME_URL}
              download="Vikram-Kalra-Resume.pdf"
              rel="noopener noreferrer"
              className="px-7 py-3 font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-7 py-3 font-semibold text-text-primary border border-surface-lighter rounded-xl hover:border-primary/50 hover:bg-surface-light transition-all duration-300 hover:-translate-y-1"
            >
              Let's Talk
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/vikram-kalra-b66903253/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface-light hover:bg-surface-lighter border border-surface-lighter/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 text-text-muted group-hover:text-primary-light transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/VikramKalra05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface-light hover:bg-surface-lighter border border-surface-lighter/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5 text-text-muted group-hover:text-primary-light transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="mailto:vikramkalra2005@gmail.com"
              className="p-3 rounded-xl bg-surface-light hover:bg-surface-lighter border border-surface-lighter/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5 text-text-muted group-hover:text-primary-light transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Profile Photo */}
        <div
          className="flex-shrink-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative group">
            {/* Glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <img
              src={photo}
              alt="Vikram Kalra"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-surface-light group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
