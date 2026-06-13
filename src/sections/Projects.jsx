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
    <section id="projects" className="section">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          Featured Projects
        </h2>

        <div className="projects-wrapper">
          <div className="project-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                data-aos="fade-up"
              >
                <div className="project-inner">
                  {project.image && (
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="project-image-overlay" />
                    </div>
                  )}

                  <div className="project-content">
                    <h3>{project.title}</h3>

                    {project.status === "In Progress" && (
                      <span className="project-status">In Progress</span>
                    )}

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-tags">
                      {project.tags?.map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
