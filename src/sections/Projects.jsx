const projects = [
  {
    title: "SmartDuka",
    description:
      "A smart shop management platform for small retailers. Features include inventory management (dead stock detection, low stock alerts), sales tracking (cash, mobile money, credit), credit management, and a daily insights dashboard. Currently in progress.",
    link: "https://github.com/Michael-Nyawade/smart-duka",
    status: "In Progress",
    image: "/src/assets/projects/smartduka.png",
  },
  {
    title: "Diabetes Prediction Using Logistic Regression",
    description:
      "Built a Logistic Regression model to predict diabetes using the Pima Indians dataset. Performed EDA and feature engineering, achieving a ROC-AUC of ~0.81. Key predictors: glucose, BMI, pregnancies.",
    link: "https://github.com/Michael-Nyawade/diabetes-prediction",
    status: "Completed",
    image: "/src/assets/projects/diabetes-prediction.jpg",
  },
  {
    title: "Customer Segmentation Using RFM Analysis",
    description:
      "Segmented customers using RFM metrics and K-Means clustering to uncover behavioral groups like VIPs and at-risk users, enabling data-driven marketing and retention strategies.",
    link: "https://github.com/Michael-Nyawade/customer-segmentation-rfm",
    status: "Completed",
    image: "/src/assets/projects/rfm.png",
  },
  {
    title: "Kenyan Housing Market Analysis",
    description:
      "Performed Exploratory Data Analysis (EDA) on the Kenyan housing market to evaluate how property size and location influence housing prices.",
    link: "https://github.com/Michael-Nyawade/housing_in_kenya",
    status: "Completed",
    image: "/src/assets/projects/housing.jpg",
  },
  {
    title: "Petroleum Price vs Inflation",
    description:
      "Analyzed the impact of petroleum price fluctuations on inflation in Nairobi using CPI data, focusing on kerosene, gasoline, and diesel.",
    link: "https://github.com/Michael-Nyawade/Petroleum-Price-Impact-on-Inflation",
    status: "Completed",
    image: "/src/assets/projects/petroleum.jpg",
  },
];

export default function Projects() {
  return (
    <section>
      <h2>Featured Projects</h2>
      <div style={{ marginTop: "2rem" }}>
        {projects.map((project, index) => (
          <div
            key={index}
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