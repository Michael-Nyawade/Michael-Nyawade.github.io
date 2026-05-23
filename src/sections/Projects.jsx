// import smartdukaImg from "../assets/projects/smartduka.png";
import diabetesImg from "../assets/projects/diabetes-prediction.jpg";
import rfmImg from "../assets/projects/rfm.png";
import housingImg from "../assets/projects/housing.jpg";
import petroleumImg from "../assets/projects/petroleum.jpg";

const projects = [
  {
    title: "SmartDuka",
    description:
      "A smart shop management platform for small retailers. Features include inventory management (dead stock detection, low stock alerts), sales tracking (cash, mobile money, credit), credit management, and a daily insights dashboard. Currently in progress.",
    link: "https://github.com/Michael-Nyawade/smart-duka",
    status: "In Progress",
    // image: smartdukaImg,
  },
  {
    title: "Diabetes Prediction Using Logistic Regression",
    description:
      "Built a Logistic Regression model to predict diabetes using the Pima Indians dataset. Performed EDA and feature engineering, achieving a ROC-AUC of ~0.81. Key predictors: glucose, BMI, pregnancies.",
    link: "https://github.com/Michael-Nyawade/diabetes-prediction",
    image: diabetesImg,
  },
  {
    title: "Customer Segmentation Using RFM Analysis",
    description:
      "Segmented customers using RFM metrics and K-Means clustering to uncover behavioral groups like VIPs and at-risk users, enabling data-driven marketing and retention strategies.",
    link: "https://github.com/Michael-Nyawade/customer-segmentation-rfm",
    image: rfmImg,
  },
  {
    title: "Kenyan Housing Market Analysis",
    description:
      "Performed Exploratory Data Analysis (EDA) on the Kenyan housing market to evaluate how property size and location influence housing prices.",
    link: "https://github.com/Michael-Nyawade/housing_in_kenya",
    image: housingImg,
  },
  {
    title: "Petroleum Price vs Inflation",
    description:
      "Analyzed the impact of petroleum price fluctuations on inflation in Nairobi using CPI data, focusing on kerosene, gasoline, and diesel.",
    link: "https://github.com/Michael-Nyawade/Petroleum-Price-Impact-on-Inflation",
    image: petroleumImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "3rem 1rem", textAlign: "center" }}>
      <h2>Featured Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid var(--border)",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "var(--secondary-color)",
              boxShadow: "var(--shadow)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3>{project.title}</h3>
              {project.status && (
                <span style={{ fontSize: "0.85rem", color: "var(--accent-color)", marginBottom: "0.5rem" }}>
                  {project.status}
                </span>
              )}
              <p style={{ flex: 1, marginBottom: "1rem" }}>{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "var(--accent-color)",
                    fontWeight: "600",
                  }}
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}