export default function Contact() {
  return (
    <section data-aos="fade-up" style={{ padding: "3rem 0" }}>
      <h2>Get in Touch</h2>
      <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
        I'm open to opportunities, collaborations, or just a good data conversation.
        Feel free to reach out!
      </p>

      <ul style={{ marginTop: "1rem", listStyle: "none", paddingLeft: 0 }}>
        <li>
          Email:{" "}
          <a
            href="mailto:mikeokello17@gmail.com"
            style={{ color: "var(--accent-color)" }}
          >
            mikeokello17@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/michael-nyawade-9a02b5276/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-color)" }}
          >
            linkedin.com/in/michael-nyawade-9a02b5276/
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/Michael-Nyawade"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-color)" }}
          >
            github.com/Michael-Nyawade
          </a>
        </li>
      </ul>
    </section>
  );
}