const experiences = [
  {
    company: "Datacrecy",
    logo: "D",
    logoColor: "from-cyan-500 to-blue-600",
    role: "Co-Founder & CTO",
    duration: "Jun 2025 – Present",
    skills: [
      "Next.js",
      "TypeScript",
      "ClickHouse",
      "Supabase",
      "DigitalOcean",
      "ETL Pipelines",
    ],
    highlights: [
      "Built and launched a B2B Data-as-a-Service platform, owning the entire engineering stack from infrastructure to product delivery.",
      "Developed the customer-facing website, SaaS application, admin portal, and SEO-driven people pages using Next.js, TypeScript, and modern web technologies.",
      "Architected and managed cloud infrastructure using DigitalOcean, ClickHouse, Supabase, and Resend, handling analytics, backend services, authentication, and email workflows.",
      "Designed and automated end-to-end ETL pipelines for ingesting, enriching, and serving business intelligence data at scale.",
    ],
  },
  {
    company: "CleanKoding",
    logo: "C",
    logoColor: "from-indigo-500 to-indigo-700",
    role: "Frontend Developer",
    duration: "May 2024 – Oct 2024",
    length: "6 months",
    skills: ["React.js", "REST APIs", "Browser Extensions", "Testing"],
    highlights: [
      "Designed and developed React components for a browser extension, ensuring responsiveness and improved user engagement.",
      "Integrated RESTful APIs to enable seamless communication between frontend and backend systems.",
      "Collaborated with team members to implement user-centric features and maintain code quality.",
      "Contributed to building a reliable and robust web application through testing and optimization.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-accent font-mono text-sm tracking-wider mb-3">
            {"// where I've worked"}
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Experience
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-20 md:pl-28 pb-12 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[25px] md:left-[41px] top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-surface group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300" />

              {/* Card */}
              <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                  {/* Company logo */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.logoColor} flex items-center justify-center text-white text-xl font-bold flex-shrink-0 shadow-lg`}
                  >
                    {exp.logo}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                      <span className="text-primary-light font-semibold">
                        {exp.company}
                      </span>
                      {exp.type && (
                        <>
                          <span className="text-text-muted text-sm">·</span>
                          <span className="text-text-muted text-sm">
                            {exp.type}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="flex flex-col items-start sm:items-end flex-shrink-0">
                    <span className="text-sm font-mono text-text-secondary">
                      {exp.duration}
                    </span>
                    {(exp.length || exp.location) && (
                      <span className="text-xs text-text-muted mt-0.5">
                        {[exp.length, exp.location].filter(Boolean).join(" · ")}
                      </span>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-5">
                  {exp.highlights.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm md:text-base text-text-secondary leading-relaxed"
                    >
                      <span className="text-accent mt-1 flex-shrink-0">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono font-medium text-primary-light bg-primary/10 border border-primary/20 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
