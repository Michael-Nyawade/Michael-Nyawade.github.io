import profileImg from "../assets/profile/Passport.png";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      {/* LEFT */}
      <div className="hero-left" data-aos="fade-right">
        <h1 className="hero-title">Michael Nyawade</h1>

        <h2 className="hero-subtitle">
          Statistician | Data Scientist | Software Developer
        </h2>

        <p className="hero-description">
          I analyze data to uncover insights, build data-driven systems, and
          develop software solutions.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("projects")}
          >
            View Projects <FaArrowRight />
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </button>

          <a
            href="/Michael_Nyawade_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tertiary"
          >
            View CV
          </a>
        </div>

        {/* SOCIAL */}
        <div className="hero-social">
          <a
            href="https://github.com/Michael-Nyawade"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/michael-nyawade-9a02b5276/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right" data-aos="fade-left">
        <div className="hero-image-wrapper">
          <img
            src={profileImg}
            alt="Michael Nyawade"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}