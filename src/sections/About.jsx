import PythonLogo from "../assets/skills/python.svg";
import RLogo from "../assets/skills/r.svg";
import StatsLogo from "../assets/skills/statistics.svg";
import GoLogo from "../assets/skills/go.svg";
import JSLogo from "../assets/skills/javascript.svg";
import SQLLogo from "../assets/skills/sql.svg";
import PowerBILogo from "../assets/skills/powerbi.svg";

const techStack = [
  { name: "Python", logo: PythonLogo },
  { name: "R", logo: RLogo },
  { name: "SQL", logo: SQLLogo },
  { name: "Go", logo: GoLogo },
  { name: "JavaScript", logo: JSLogo },
  { name: "Power BI", logo: PowerBILogo },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "5rem 1.5rem" }}>
      <div
        style={{
          display: "flex",
          gap: "3rem",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          style={{ flex: "1 1 600px", textAlign: "left" }}
        >
          <p
            style={{
              color: "var(--accent-color)",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "1rem",
            }}
          >
            Professional Summary
          </p>

          <p
            style={{
              lineHeight: 1.9,
              marginBottom: "1.5rem",
              opacity: 0.9,
            }}
          >
            I have a background in statistics and data science, with professional
            experience across finance, research and planning, and software
            development. My career journey began in fiscal analysis, progressed
            through credit analysis and research & planning, and now continues
            as a software developer apprentice.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              marginBottom: "1.5rem",
              opacity: 0.9,
            }}
          >
            At the core, my passion lies in data science — building systems that
            merge analytics, engineering, and real-world decision-making. I
            enjoy creating data-driven solutions that transform insights into
            actionable strategies, and I'm especially keen on projects that
            empower businesses and communities through smarter tools and
            technologies.
          </p>

          <p style={{ lineHeight: 1.9, opacity: 0.9 }}>
            Currently, I am focused on strengthening my software engineering
            skills while continuing to explore machine learning, backend
            systems, and scalable data applications.
          </p>
        </div>

        {/* RIGHT QUICK FACTS CARD */}
        <div
          style={{
            backgroundColor: "var(--secondary-color)",
            border: "1px solid var(--border-color)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 8px 24px var(--shadow-color)",
          }}
        >
          {/* TECH STACK */}
          <h3 style={{ marginBottom: "1rem", color: "var(--accent-color)" }}>
            Tech Stack
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {techStack.map((tech, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.8rem",
                }}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  style={{ width: "28px", height: "28px" }}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* EDUCATION */}
          <h3 style={{ marginBottom: "1rem", color: "var(--accent-color)" }}>
            Education
          </h3>

          <div style={{ lineHeight: 1.6 }}>
            <p style={{ marginBottom: "0.5rem" }}>🎓 BSc Statistics — JKUAT</p>
            <p>📚 Explore AI Data Science</p>
          </div>
        </div>
      </div>
    </section>
  );
}