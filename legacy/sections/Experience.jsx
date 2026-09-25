const experiences = [
  {
    role: "AI & Machine Learning Apprentice",
    company: "Zone01 Kisumu",
    period: "April 2026 - Present",
    points: [
      "Building software projects in a peer-to-peer, project-based environment, using Python, JavaScript, Go and the Linux command line, with Git and GitHub.",
      "Applying regression, classification (logistic regression, decision trees, SVM, KNN), NLP basics and unsupervised learning (PCA, K-Means) with Python and scikit-learn in team projects.",
      "Reviewing code and debugging with other apprentices.",
    ],
  },
  {
    role: "Research, Planning & Compliance Intern",
    company: "Privatization Authority",
    period: "March 2025 - March 2026",
    points: [
      "Collected, cleaned and consolidated performance data from 10+ departments for quarterly and annual performance contract reporting (GPICS system).",
      "Tracked progress on strategic objectives and consolidated departmental reports for monitoring and evaluation and the Annual Work Plan.",
      "Maintained structured datasets and supported ISO 9001:2015 documentation control.",
    ],
  },
  {
    role: "Credit Analyst Intern",
    company: "Metropol Corporation Limited",
    period: "January 2024 - February 2025",
    points: [
      "Analyzed credit and financial data for about 20-50 customer accounts a week to assess creditworthiness and repayment capacity.",
      "Built and maintained weekly Excel and Power BI dashboards on portfolio performance and debt recovery trends for senior analysts.",
      "Used SQL to extract, clean and organize customer financial data.",
    ],
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

          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="experience-item"
              data-aos="fade-up"
            >
              <div className="experience-period">{exp.period}</div>

              <div className="timeline-dot" />

              <div className="experience-card">
                <div className="mobile-period">{exp.period}</div>

                <h3 className="experience-role">{exp.role}</h3>

                <p className="experience-company">{exp.company}</p>

                <ul className="experience-points">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}