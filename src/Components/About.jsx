const highlights = [
  "Winner — MVP in a Day Contest",
  "Masai Full Stack Developer Course",
  "Google Cloud Study Jams",
  "Data Analytics — Intermediate (Coding Spoon)",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-accent font-mono text-sm tracking-wider mb-3">
            {"// about me"}
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Who I Am
          </h1>
        </div>

        {/* Glass Card */}
        <div className="glass rounded-2xl p-8 md:p-12 hover:border-primary/20 transition-all duration-500">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              I'm{" "}
              <span className="text-text-primary font-semibold">
                Vikram Kalra
              </span>
              , a Full Stack Developer and startup founder — Co-Founder & CTO
              at{" "}
              <span className="text-primary-light font-medium">Datacrecy</span>
              , building a B2B Data-as-a-Service platform from infrastructure
              to product delivery.
            </p>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              I work across the modern web stack — React, Next.js, TypeScript,
              and Node.js — and handle everything from cloud infrastructure
              and database design to ETL pipelines, taking products from
              concept to deployment. Passionate about solving real-world
              problems and continuously learning modern software engineering
              practices.
            </p>

            {/* Stats / Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-surface/50 border border-surface-lighter/30">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  3+
                </div>
                <div className="text-xs md:text-sm text-text-muted mt-1">
                  Projects Built
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-surface/50 border border-surface-lighter/30">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  20+
                </div>
                <div className="text-xs md:text-sm text-text-muted mt-1">
                  Technologies
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-surface/50 border border-surface-lighter/30 col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  ∞
                </div>
                <div className="text-xs md:text-sm text-text-muted mt-1">
                  Curiosity
                </div>
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div className="pt-2">
              <p className="text-accent font-mono text-xs tracking-wider mb-3 text-center">
                {"// highlights"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 px-4 py-3 rounded-xl bg-surface/50 border border-surface-lighter/30 text-sm text-text-secondary"
                  >
                    <span className="text-accent flex-shrink-0">▹</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-4 text-center">
              <p className="text-text-muted text-base">
                Interested? Drop me a mail at{" "}
                <a
                  href="mailto:vikramkalra2005@gmail.com"
                  className="text-primary-light hover:text-accent transition-colors duration-300 font-medium underline underline-offset-4 decoration-primary/30 hover:decoration-accent"
                >
                  vikramkalra2005@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
