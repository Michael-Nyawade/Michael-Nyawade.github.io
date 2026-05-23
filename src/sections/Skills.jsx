const skills = {
  "Data Science": ["Python", "R", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Analysis"],
  "Software Development": ["Go", "JavaScript", "React", "Vite", "Git and GitHub", "REST APIs", "Unit Testing"],
  "Analytics & Finance": ["SQL", "Excel", "Power BI", "Budget Analysis", "Reporting"],
};

export default function Skills() {
  return (
    <section data-aos="fade-up" style={{ padding: "3rem 0" }}>
      <h2>Skills</h2>

      <div style={{ marginTop: "2rem" }}>
        {Object.entries(skills).map(([category, list], index) => (
          <div key={index} style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem" }}>{category}</h3>
            <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.6 }}>
              {list.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}