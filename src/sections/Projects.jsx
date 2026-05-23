import { useEffect, useRef } from "react";
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
  const scrollRef = useRef(null);
  const pauseRef = useRef(false);

  // AUTO-PLAY SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      if (pauseRef.current) return;

      const container = scrollRef.current;
      if (!container) return;

      const maxScroll =
        container.scrollWidth - container.clientWidth;

      const nextScroll = container.scrollLeft + 350;

      if (nextScroll >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 350, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" style={{ padding: "3rem 1rem" }}>
      <h2 data-aos="fade-up">Featured Projects</h2>

      {/* WRAPPER */}
      <div
        style={{
          position: "relative",
          maxWidth: "1100px",
          margin: "2rem auto 0",
        }}
      >
        {/* LEFT BUTTON */}
        <button
          onClick={() => {
            scrollRef.current?.scrollBy({
              left: -350,
              behavior: "smooth",
            });
          }}
          style={{
            position: "absolute",
            left: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "var(--secondary-color)",
            border: "1px solid var(--border-color)",
            color: "var(--text-color)",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => {
            scrollRef.current?.scrollBy({
              left: 350,
              behavior: "smooth",
            });
          }}
          style={{
            position: "absolute",
            right: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "var(--secondary-color)",
            border: "1px solid var(--border-color)",
            color: "var(--text-color)",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          ›
        </button>

        {/* SCROLL CONTAINER */}
        <div
          id="project-scroll"
          ref={scrollRef}
          onMouseEnter={() => (pauseRef.current = true)}
          onMouseLeave={() => (pauseRef.current = false)}
          style={{
            display: "flex",
            gap: "1.5rem",
            overflowX: "auto",
            scrollBehavior: "smooth",
            paddingBottom: "1rem",
            scrollSnapType: "x mandatory",
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
                flex: "0 0 calc(33.333% - 1rem)",
                scrollSnapAlign: "start",
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
                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px var(--shadow-color)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
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
                  <h3 style={{ marginBottom: "0.3rem" }}>
                    {project.title}
                  </h3>

                  {/* STATUS (ONLY IN PROGRESS) */}
                  {project.status === "In Progress" && (
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.75rem",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "999px",
                        backgroundColor:
                          "rgba(255, 165, 0, 0.15)",
                        color: "var(--accent-color)",
                        marginBottom: "0.8rem",
                        width: "fit-content",
                      }}
                    >
                      In Progress
                    </span>
                  )}

                  <p
                    style={{
                      flex: 1,
                      lineHeight: 1.6,
                      opacity: 0.9,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginTop: "1rem",
                    }}
                  >
                    {project.tags?.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "0.7rem",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "999px",
                          border:
                            "1px solid var(--border-color)",
                          opacity: 0.8,
                        }}
                      >
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

      {/* Hide scrollbar */}
      <style>{`
        #project-scroll::-webkit-scrollbar {
          display: none;
        }

        #project-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (max-width: 900px) {
        #project-scroll a {
        flex: 0 0 92%;
        }
        
        #project-scroll img {
        height: 160px !important;
        }
        
        #project-scroll h3 {
        font-size: 1.05rem;
        }
        
        #project-scroll p {
        font-size: 0.9rem;
        }
        }
      `}</style>
    </section>
  );
}