import ScrollReveal from "./ScrollReveal";

const STATUS_ITEMS = [
  {
    type: "deploying",
    badge: "Deployment Phase",
    name: "Legal Database",
    desc: "Structured bare act repository with cross-references and annotations — infrastructure live, content ingestion underway.",
    progress: 68,
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <ellipse cx="13" cy="7" rx="9" ry="3.5" stroke="#818cf8" strokeWidth="1.5"/>
        <path d="M4 7v6c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5V7" stroke="#818cf8" strokeWidth="1.5"/>
        <path d="M4 13v6c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-6" stroke="#818cf8" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    type: "dev",
    badge: "Under Development",
    name: "Reading OS",
    desc: "AI-powered document reader with annotation, summarisation, and context layers — currently in active development and internal testing.",
    progress: 34,
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="3" width="20" height="20" rx="3" stroke="#fbbf24" strokeWidth="1.5"/>
        <path d="M7 9h12M7 13h9M7 17h6" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    type: "construction",
    badge: "Under Construction",
    name: "AI Intelligence Core",
    desc: "The neural backbone powering chatbot, case tracking, and drafting — model training and domain fine-tuning in progress.",
    progress: 18,
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3l2.5 7h7l-5.5 4 2 7L13 17l-6 4 2-7L3 10h7z" stroke="#9ca3af" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Status() {
  return (
    <section className="status" id="status">
      <div className="status-inner">
        <ScrollReveal>
          <div className="status-header">
            <div className="section-label" style={{ justifyContent: "center" }}>
              Platform Status
            </div>
            <h2 className="status-title">
              Building in<br /><em>public</em>
            </h2>
            <p className="status-sub">
              We believe in radical transparency. Here&apos;s exactly where every
              piece of ContextCafe stands — no marketing, just progress.
            </p>
          </div>
        </ScrollReveal>

        <div className="status-grid">
          {STATUS_ITEMS.map((item, i) => (
            <ScrollReveal key={i} className="status-card" delay={0.1 + i * 0.05}>
              <div className={`status-card-bar bar-${item.type}`} />
              <div className="status-card-inner">
                <div className={`status-icon-wrap icon-${item.type}`}>
                  {item.icon}
                </div>
                <div className="status-info">
                  <div className={`status-badge badge-${item.type}`}>
                    <div className={`badge-dot dot-${item.type}`} />
                    {item.badge}
                  </div>
                  <div className="status-name">{item.name}</div>
                  <p className="status-desc">{item.desc}</p>
                  <div className="progress-wrap">
                    <div className="progress-label">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="progress-track">
                      <div className={`progress-fill fill-${item.type}`} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Articles — LIVE */}
          <ScrollReveal className="status-card live" delay={0.05}>
            <div className="status-card-bar bar-live" />
            <div className="status-card-inner">
              <div className="status-icon-wrap icon-live">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M4 6h18M4 10h14M4 14h18M4 18h10" stroke="#C5E1F7" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="status-info">
                <div className="status-badge badge-live">
                  <div className="badge-dot dot-live" />
                  Live Now
                </div>
                <div className="status-name">Articles &amp; Legal Insights</div>
                <p className="status-desc">
                  In-depth legal commentary, case analyses, and learning
                  resources — written for students, professionals, and curious
                  minds. Publishing regularly.
                </p>
                <div className="progress-wrap">
                  <div className="progress-label">
                    <span>Status</span>
                    <span>
                      <a
                        href="https://blog.contextcafe.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "underline" }}
                      >
                        100% — Read Now
                      </a>
                    </span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill fill-live" />
                  </div>
                </div>
              </div>
              <a
                href="https://blog.contextcafe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="articles-live-indicator"
                aria-label="Read articles on blog.contextcafe.com"
              >
                <div className="live-pulse" />
                <span className="live-text">Live</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
