const contacts = [
  {
    name: "Call",
    link: "tel:+254705932858",
    icon: "fas fa-phone-volume",
    aria: "Call",
  },
  {
    name: "Email",
    link: "mailto:mikeokello17@gmail.com",
    icon: "fas fa-envelope",
    aria: "Email",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/michael-nyawade-9a02b5276/",
    icon: "fab fa-linkedin",
    aria: "LinkedIn",
  },
  {
    name: "GitHub",
    link: "https://github.com/Michael-Nyawade",
    icon: "fab fa-github",
    aria: "GitHub",
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-heading">
        <h2>
          <i className="fas fa-envelope"></i>Get in Touch
        </h2>
        <p className="section-subtitle">
          I'm open to opportunities, collaboration, or just a good data conversation.
          Feel free to get in touch!
        </p>
      </div>
      <div className="contact-icons" aria-label="Contact links">
        {contacts.map((contact, index) => (
          <div className="contact-method" key={index}>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener"
              aria-label={contact.aria}
            >
              <i className={contact.icon}></i>
            </a>
            <span>{contact.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}