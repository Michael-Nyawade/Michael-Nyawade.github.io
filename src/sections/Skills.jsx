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
    color: "#3b82f6",
    top: [
      { name: "Python", level: 90, logo: PythonLogo },
      { name: "R", level: 80, logo: RLogo },
      { name: "Statistics", level: 85, logo: StatsLogo },
    ],
    others: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Analysis"],
  },
  "Software Development": {
    color: "#10b981",
    top: [
      { name: "Git & GitHub", level: 85, logo: GitHubLogo },
      { name: "Go", level: 75, logo: GoLogo },
      { name: "JavaScript", level: 80, logo: JSLogo },
    ],
    others: ["React", "Vite", "REST APIs", "Unit Testing"],
  },
  "Analytics & Finance": {
    color: "#f59e0b",
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
    <section id="skills" className="section">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          Technical Skills
        </h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, data], index) => (
            <div
              key={index}
              className="skills-card"
              style={{ "--accent": data.color }}
              data-aos="fade-up"
            >
              <h3 className="skills-category">{category}</h3>

              {/* TOP SKILLS */}
              <div className="skills-top">
                {data.top.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-label">
                      <img src={skill.logo} alt={skill.name} />
                      <span>{skill.name}</span>
                    </div>

                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* OTHER SKILLS */}
              <div className="skills-badges">
                {data.others.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}