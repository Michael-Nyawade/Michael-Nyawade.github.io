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
    <section id="experience" className="section">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          Professional Experience
        </h2>

        <div className="experience-timeline">
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div key={index} className="experience-item" data-aos="fade-up">
              <div className="experience-period">{exp.period}</div>

              <div className="timeline-dot" />

              <div className="experience-card">
                <div className="mobile-period">{exp.period}</div>

                <h3 className="experience-role">{exp.role}</h3>

                <p className="experience-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}