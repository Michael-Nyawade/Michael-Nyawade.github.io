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
    <section id="about" className="section">
      <div className="section-inner about-grid">
        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className="about-text">
          <p className="about-kicker">Professional Summary</p>

          <p className="about-paragraph">
            I have a background in statistics and data science, with professional
            experience across finance, research and planning, and software
            development. My career journey began in fiscal analysis, progressed
            through credit analysis and research & planning, and now continues
            as a software developer apprentice.
          </p>

          <p className="about-paragraph">
            At the core, my passion lies in data science — building systems that
            merge analytics, engineering, and real-world decision-making. I
            enjoy creating data-driven solutions that transform insights into
            actionable strategies, and I'm especially keen on projects that
            empower businesses and communities through smarter tools and
            technologies.
          </p>

          <p className="about-paragraph">
            Currently, I am focused on strengthening my software engineering
            skills while continuing to explore machine learning, backend
            systems, and scalable data applications.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="about-card" data-aos="fade-left">
          <h3 className="about-title">Tech Stack</h3>

          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <div key={i} className="tech-item">
                <img src={tech.logo} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          <h3 className="about-title">Education</h3>

          <div className="about-education">
            <p>🎓 BSc Statistics — JKUAT</p>
            <p>📚 Explore AI Data Science</p>
          </div>
        </div>
      </div>
    </section>
  );
}