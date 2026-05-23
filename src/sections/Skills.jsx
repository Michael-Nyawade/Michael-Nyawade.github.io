// Import SVG logos
import PythonLogo from "../assets/skills/python.svg";
import RLogo from "../assets/skills/r.svg";
import StatsLogo from "../assets/skills/statistics.svg";
import GitHubLogo from "../assets/skills/github.svg";
import GoLogo from "../assets/skills/go.svg";
import JSLogo from "../assets/skills/javascript.svg";
import ExcelLogo from "../assets/skills/excel.svg";
import SQLLogo from "../assets/skills/sql.svg";
import PowerBILogo from "../assets/skills/powerbi.svg";

const skills = {
  "Data Science": {
    color: "#3b82f6", // blue
    top: [
      { name: "Python", level: 90, logo: PythonLogo },
      { name: "R", level: 80, logo: RLogo },
      { name: "Statistics", level: 85, logo: StatsLogo },
    ],
    others: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Analysis"],
  },
  "Software Development": {
    color: "#10b981", // green
    top: [
      { name: "Git & GitHub", level: 85, logo: GitHubLogo },
      { name: "Go", level: 75, logo: GoLogo },
      { name: "JavaScript", level: 80, logo: JSLogo },
    ],
    others: ["React", "Vite", "REST APIs", "Unit Testing"],
  },
  "Analytics & Finance": {
    color: "#f59e0b", // amber
    top: [
      { name: "Excel", level: 80, logo: ExcelLogo },
      { name: "SQL", level: 85, logo: SQLLogo },
      { name: "Power BI", level: 75, logo: PowerBILogo },
    ],
    others: ["Budget Analysis", "Reporting"],
  },
};

export default function Skills() {
  return (
    <section id="skills" data-aos="fade-up" style={{ padding: "3rem 0" }}>
      <h2 style={{ textAlign: "center" }}>Technical Skills</h2>

      <div
        style={{
          marginTop: "2rem",
          maxWidth: "1000px",
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {Object.entries(skills).map(([category, { color, top, others }], index) => (
          <div
            key={index}
            style={{
              padding: "1.5rem",
              border: `2px solid ${color}`,
              borderRadius: "10px",
              backgroundColor: "var(--background-alt)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ marginBottom: "1rem", textAlign: "center", color }}>
              {category}
            </h3>

            {/* Top skills with progress bars */}
            <div style={{ marginBottom: "1rem" }}>
              {top.map((skill, i) => (
                <div key={i} style={{ marginBottom: "1rem" }}>
                  <p
                    style={{
                      marginBottom: "0.3rem",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      style={{ width: "20px", height: "20px" }}
                    />
                    {skill.name}
                  </p>
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "var(--border)",
                      height: "12px",
                      borderRadius: "6px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${skill.level}%`,
                        height: "100%",
                        backgroundColor: color,
                        borderRadius: "6px",
                        transition: "width 0.5s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Other skills as badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {others.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    background: `${color}22`, // transparent tint
                    color,
                    padding: "0.4rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "500",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}