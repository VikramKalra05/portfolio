const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    invert: true,
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const tools = [
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "ClickHouse",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/clickhouse/clickhouse-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    invert: true,
  },
  {
    name: "DigitalOcean",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    name: "npm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  },
  {
    name: "Notion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
    invert: true,
  },
];

function SkillPill({ name, icon, invert }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-full bg-surface-light border border-surface-lighter/30 hover:border-primary/50 hover:bg-surface-lighter/50 transition-all duration-300 hover:scale-105 cursor-default group">
      <img
        src={icon}
        alt={name}
        className={`w-7 h-7 object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 ${invert ? "invert" : ""}`}
      />
      <span className="text-sm font-semibold text-text-secondary group-hover:text-text-primary whitespace-nowrap transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 30 }) {
  // Duplicate items for seamless loop
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3 group/marquee">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-4 w-max group-hover/marquee:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicated.map((item, i) => (
          <SkillPill key={`${item.name}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-accent font-mono text-sm tracking-wider mb-3">
            {"// what I work with"}
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Skills & Technologies
          </h1>
          <p className="text-text-muted mt-4 text-base">
            Hover to pause · Scroll to explore
          </p>
        </div>
      </div>

      {/* Marquee rows - constrained to match section widths */}
      <div className="max-w-6xl mx-auto space-y-4">
        <MarqueeRow items={skills} direction="left" speed={35} />
        <MarqueeRow items={tools} direction="right" speed={28} />
      </div>
    </section>
  );
}
