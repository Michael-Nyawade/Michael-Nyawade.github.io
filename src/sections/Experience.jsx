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
    <section style={{ padding: "3rem 0" }}>
      <h2 data-aos="fade-up">Professional Experience</h2>
      <div style={{ marginTop: "2rem" }}>
        {experiences.map((experience, index) => (
          <div
            key={index}
            data-aos="fade-up"
            style={{
              marginBottom: "2rem",
              paddingLeft: "1rem",
              borderLeft: "3px solid #61dafb",
            }}
          >
            <h3 style={{ marginBottom: "0.3rem" }}>{experience.role}</h3>
            <p
              style={{
                color: "#777",
                marginTop: 0,
                fontSize: "0.9rem",
              }}
            >
              {experience.period}
            </p>
            <p style={{ lineHeight: 1.6 }}>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}