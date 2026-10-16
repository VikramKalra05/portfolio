import { useState } from "react";

const CONTACT_EMAIL = "vikramkalra2005@gmail.com";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vikram-kalra-b66903253/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/VikramKalra05",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:vikramkalra2005@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
  },
  {
    label: "Phone",
    href: "tel:+918103504444",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
];

const inputClasses =
  "w-full px-4 py-3 rounded-xl bg-surface/60 border border-surface-lighter/60 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors duration-300";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: `Portfolio message from ${data.get("name")}`,
          _template: "table",
          _captcha: "false",
          _honey: data.get("_honey"),
        }),
      });
      const json = await res.json();
      if (res.ok && String(json.success) === "true") {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer id="contact" className="relative mt-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface to-accent/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-accent font-mono text-sm tracking-wider mb-3">
            {"// let's connect"}
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Get in Touch
          </h1>
          <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Drop a message and
            I'll get back to you.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 md:p-8 text-left mb-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                aria-label="Your name"
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                aria-label="Your email"
                className={inputClasses}
              />
            </div>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message"
              aria-label="Your message"
              className={`${inputClasses} mb-4 resize-none`}
            />
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "success" && (
              <p className="mt-4 text-sm text-emerald-400 text-center">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-400 text-center">
                Something went wrong — please email me directly at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            )}
          </form>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-3 px-6 py-3 rounded-xl glass hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="text-text-muted group-hover:text-primary-light transition-colors duration-300">
                  {link.icon}
                </span>
                <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-surface-lighter to-transparent mb-8" />

          {/* Footer Text */}
          <div className="space-y-2">
            <p className="text-text-muted text-sm">
              Designed & Built by{" "}
              <span className="gradient-text font-semibold">Vikram Kalra</span>
            </p>
            <p className="text-text-muted/60 text-xs">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
