import profileImg from "../assets/profile/Passport.png";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "4rem",
        padding: "1rem 1.5rem",
        paddingTop: "0",
        paddingBottom: "0",
        flexWrap: "wrap",
      }}
    >
      {/* LEFT CONTENT */}
      <div
        data-aos="fade-right"
        style={{
          flex: "1 1 500px",
          textAlign: "left",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.8rem, 5vw, 5rem)",
            lineHeight: 1.1,
            marginBottom: "1rem",
            whiteSpace: "nowrap",
          }}
        >
          Michael Nyawade
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.1rem, 1.7vw, 2rem)",
            fontWeight: "500",
            color: "var(--accent-color)",
            marginBottom: "1.5rem",
          }}
        >
          Statistician | Data Scientist | Software Developer
        </h2>

        <p
          style={{
            maxWidth: "650px",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            opacity: 0.9,
          }}
        >
          I analyze data to uncover insights, build data-driven systems, and
          develop software solutions.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            style={{
              backgroundColor: "var(--accent-color)",
              color: "#fff",
              border: "none",
              padding: "0.9rem 1.4rem",
              borderRadius: "10px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            View Projects
            <FaArrowRight />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            style={{
              backgroundColor: "transparent",
              color: "var(--text-color)",
              border: "1px solid var(--border-color)",
              padding: "0.9rem 1.4rem",
              borderRadius: "10px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Contact Me
          </button>
        </div>

        {/* SOCIAL ICONS */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <a
            href="https://github.com/Michael-Nyawade"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "2.8rem",
              color: "var(--text-color)",
              transition: "0.2s ease",
            }}
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/michael-nyawade-9a02b5276/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "2.8rem",
              color: "var(--text-color)",
              transition: "0.2s ease",
            }}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* RIGHT PROFILE IMAGE */}
      <div
        data-aos="fade-left"
        style={{
          flex: "1 1 350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent-color), transparent)",
            padding: "4px",
            boxShadow: "0 10px 30px var(--shadow-color)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "var(--bg-color)",
            }}
          >
            <img
              src={profileImg}
              alt="Michael Nyawade"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "50%",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}