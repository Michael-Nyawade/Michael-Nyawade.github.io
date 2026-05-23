import diabetesImg from "../assets/projects/diabetes-prediction.jpg";
import rfmImg from "../assets/projects/rfm.png";
import housingImg from "../assets/projects/housing.jpg";
import petroleumImg from "../assets/projects/petroleum.jpg";

const projects = [
  {
    title: "SmartDuka",
    description:
      "A smart shop management platform for small retailers. Features include inventory management, sales tracking, credit management, and analytics dashboard.",
    link: "https://github.com/Michael-Nyawade/smart-duka",
    status: "In Progress",
    tags: ["Python", "Django", "SQL", "Business Logic"],
    image: null,
  },
  {
    title: "Diabetes Prediction Using Logistic Regression",
    description:
      "Built a Logistic Regression model to predict diabetes using the Pima Indians dataset. Achieved ROC-AUC ~0.81.",
    link: "https://github.com/Michael-Nyawade/diabetes-prediction",
    tags: ["Python", "Machine Learning", "Logistic Regression"],
    image: diabetesImg,
  },
  {
    title: "Customer Segmentation Using RFM Analysis",
    description:
      "Used RFM metrics and K-Means clustering to segment customers for targeted marketing strategies.",
    link: "https://github.com/Michael-Nyawade/customer-segmentation-rfm",
    tags: ["Python", "Data Science", "Clustering", "RFM"],
    image: rfmImg,
  },
  {
    title: "Kenyan Housing Market Analysis",
    description:
      "Exploratory Data Analysis on Kenyan housing prices and location-based trends.",
    link: "https://github.com/Michael-Nyawade/housing_in_kenya",
    tags: ["Python", "EDA", "Data Analysis"],
    image: housingImg,
  },
  {
    title: "Petroleum Price vs Inflation",
    description:
      "Analyzed the impact of petroleum price fluctuations on inflation in Nairobi using CPI data.",
    link: "https://github.com/Michael-Nyawade/Petroleum-Price-Impact-on-Inflation",
    tags: ["R", "Economics", "Data Analysis"],
    image: petroleumImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "3rem 1rem" }}>
      <h2 data-aos="fade-up">Featured Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
          maxWidth: "1100px",
          marginInline: "auto",
        }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                backgroundColor: "var(--secondary-color)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 4px 12px var(--shadow-color)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px var(--shadow-color)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px var(--shadow-color)";
              }}
            >
              {/* IMAGE */}
              {project.image && (
                <div style={{ position: "relative" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.35))",
                    }}
                  />
                </div>
              )}

              {/* CONTENT */}
              <div
                style={{
                  padding: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3 style={{ marginBottom: "0.3rem" }}>{project.title}</h3>

                {/* STATUS BADGE (ONLY IN PROGRESS) */}
                {project.status === "In Progress" && (
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.75rem",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "999px",
                      backgroundColor: "rgba(255, 165, 0, 0.15)",
                      color: "var(--accent-color)",
                      marginBottom: "0.8rem",
                      width: "fit-content",
                    }}
                  >
                    In Progress
                  </span>
                )}

                <p style={{ flex: 1, lineHeight: 1.6, opacity: 0.9 }}>
                  {project.description}
                </p>

                {/* TAGS */}
                {project.tags && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginTop: "1rem",
                    }}
                  >
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "0.7rem",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "999px",
                          border: "1px solid var(--border-color)",
                          opacity: 0.8,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}