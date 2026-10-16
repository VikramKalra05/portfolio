const GITHUB_USERNAME = "VikramKalra05";

const theme = [
  "bg_color=0f172a",
  "title_color=818cf8",
  "text_color=94a3b8",
  "icon_color=06b6d4",
  "border_color=334155",
  "ring_color=6366f1",
].join("&");

const streakTheme = [
  "background=0f172a",
  "ring=6366f1",
  "fire=06b6d4",
  "currStreakLabel=818cf8",
  "sideLabels=94a3b8",
  "currStreakNum=f1f5f9",
  "sideNums=f1f5f9",
  "dates=64748b",
  "border=334155",
].join("&");

function StatCard({ children, className = "" }) {
  return (
    <div
      className={`glass rounded-2xl p-4 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 flex items-center justify-center overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export default function GitHub() {
  return (
    <section id="github" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-accent font-mono text-sm tracking-wider mb-3">
            {"// open source & activity"}
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            GitHub Stats
          </h1>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stats Card */}
          <StatCard>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&count_private=true&hide_border=true&${theme}`}
              alt="GitHub Stats"
              className="w-full max-w-full"
              loading="lazy"
            />
          </StatCard>

          {/* Streak Stats */}
          <StatCard>
            <img
              src={`https://streak-stats.demolab.com/?user=${GITHUB_USERNAME}&hide_border=true&${streakTheme}`}
              alt="GitHub Streak"
              className="w-full max-w-full"
              loading="lazy"
            />
          </StatCard>

          {/* Top Languages */}
          <StatCard>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&langs_count=8&hide_border=true&${theme}`}
              alt="Top Languages"
              className="w-full max-w-full"
              loading="lazy"
            />
          </StatCard>

          {/* Contribution Graph */}
          <StatCard>
            <img
              src={`https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`}
              alt="Contribution Graph"
              className="w-full max-w-full"
              style={{ filter: "invert(0.9) hue-rotate(180deg)" }}
              loading="lazy"
            />
          </StatCard>
        </div>

        {/* Profile Link */}
        <div className="text-center mt-10">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-light border border-surface-lighter/30 text-text-secondary hover:text-text-primary hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Full Profile
          </a>
        </div>
      </div>
    </section>
  );
}
