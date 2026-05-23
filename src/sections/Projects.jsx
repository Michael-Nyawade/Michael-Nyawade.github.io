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
    status: "Completed",
    image: diabetesImg,
  },
  {
    title: "Customer Segmentation Using RFM Analysis",
    description:
      "Segmented customers using RFM metrics and K-Means clustering to uncover behavioral groups like VIPs and at-risk users, enabling data-driven marketing and retention strategies.",
    link: "https://github.com/Michael-Nyawade/customer-segmentation-rfm",
    status: "Completed",
    image: rfmImg,
  },
  {
    title: "Kenyan Housing Market Analysis",
    description:
      "Performed Exploratory Data Analysis (EDA) on the Kenyan housing market to evaluate how property size and location influence housing prices.",
    link: "https://github.com/Michael-Nyawade/housing_in_kenya",
    status: "Completed",
    image: housingImg,
  },
  {
    title: "Petroleum Price vs Inflation",
    description:
      "Analyzed the impact of petroleum price fluctuations on inflation in Nairobi using CPI data, focusing on kerosene, gasoline, and diesel.",
    link: "https://github.com/Michael-Nyawade/Petroleum-Price-Impact-on-Inflation",
    status: "Completed",
    image: petroleumImg,
  },
];

export default function Projects() {
  return (
    <section data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-grid" style={{ marginTop: "2rem" }}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100} // stagger animations
            style={{
              marginBottom: "2rem",
              padding: "1rem",
              backgroundColor: "var(--secondary-color)",
              borderRadius: "8px",
              borderLeft: `5px solid ${
                project.status === "In Progress" ? "#f39c12" : "var(--accent-color)"
              }`,
            }}
          >
            <h3 style={{ marginBottom: "0.3rem" }}>
              {project.title}{" "}
              <span style={{ fontSize: "0.8rem", color: "#f39c12" }}>
                {project.status === "In Progress" ? "(In Progress)" : ""}
              </span>
            </h3>
            <p style={{ lineHeight: 1.6 }}>{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-color)" }}
              >
                View Project
              </a>
            )}
            {project.image && (
              <div style={{ marginTop: "1rem" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ maxWidth: "100%", borderRadius: "4px" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}