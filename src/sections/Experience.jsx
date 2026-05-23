const experiences = [
  {
    role: "Software Developer Apprentice",
    period: "April 2026 - Present",
    description:
      "Building software solutions and strengthening practical engineering skills through real-world development experience.",
  },
  {
    role: "Research and Planning Intern",
    period: "March 2025 - March 2026",
    description:
      "Worked with research, planning, and analytical processes to support organizational decision-making.",
  },
  {
    role: "Credit Analyst Intern",
    period: "January 2024 - February 2025",
    description:
      "Performed financial and credit-related analysis to support risk evaluation and lending processes.",
  },
  {
    role: "Fiscal Analyst Attachee",
    period: "October 2021 - December 2021",
    description:
      "Supported fiscal analysis activities and gained exposure to financial operations and reporting.",
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "3rem 1rem" }}>
      <h2 data-aos="fade-up">Professional Experience</h2>

      <div
        style={{
          position: "relative",
          marginTop: "3rem",
          maxWidth: "900px",
          marginInline: "auto",
        }}
      >
        {/* timeline line (hidden on mobile via media query) */}
        <div className="timeline-line" />

        {experiences.map((experience, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="experience-item"
          >
            {/* LEFT: period (desktop only) */}
            <div className="experience-period">
              {experience.period}
            </div>

            {/* timeline dot */}
            <div className="timeline-dot" />

            {/* RIGHT: card */}
            <div className="experience-card">
              {/* period inside card for mobile only */}
              <div className="mobile-period">
                {experience.period}
              </div>

              <h3 style={{ marginBottom: "0.3rem" }}>
                {experience.role}
              </h3>

              <p style={{ lineHeight: 1.6 }}>
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        .timeline-line {
          position: absolute;
          left: 120px;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: var(--border-color);
        }

        .experience-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 2.5rem;
          position: relative;
        }

        .experience-period {
          width: 120px;
          padding-right: 1rem;
          text-align: right;
          font-size: 0.85rem;
          color: var(--text-color);
          opacity: 0.7;
          padding-top: 0.5rem;
        }

        .timeline-dot {
          position: absolute;
          left: 114px;
          top: 10px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: var(--accent-color);
          border: 2px solid var(--bg-color);
          z-index: 2;
        }

        .experience-card {
          margin-left: 2rem;
          flex: 1;
          padding: 1.5rem;
          border-radius: 12px;
          background-color: var(--secondary-color);
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 12px var(--shadow-color);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .experience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px var(--shadow-color);
        }

        .mobile-period {
          display: none;
          font-size: 0.85rem;
          opacity: 0.7;
          margin-bottom: 0.5rem;
        }

        /* ===== MOBILE MODE ===== */
        @media (max-width: 768px) {
          .timeline-line {
            display: none;
          }

          .experience-item {
            flex-direction: column;
            margin-bottom: 1.5rem;
          }

          .experience-period {
            display: none;
          }

          .timeline-dot {
            display: none;
          }

          .experience-card {
            margin-left: 0;
          }

          .mobile-period {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}