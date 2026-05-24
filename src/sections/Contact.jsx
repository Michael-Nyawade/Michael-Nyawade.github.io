import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    name: "Call",
    link: "tel:+254705932858",
    icon: FaPhone,
    aria: "Call",
  },
  {
    name: "Email",
    link: "mailto:mikeokello17@gmail.com",
    icon: FaEnvelope,
    aria: "Email",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/michael-nyawade-9a02b5276/",
    icon: FaLinkedin,
    aria: "LinkedIn",
  },
  {
    name: "GitHub",
    link: "https://github.com/Michael-Nyawade",
    icon: FaGithub,
    aria: "GitHub",
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-heading">
        <h2>
          <FaEnvelope /> Get in Touch
        </h2>

        <p className="section-subtitle">
          I'm open to opportunities, collaboration, or just a good data conversation.
          Feel free to get in touch!
        </p>
      </div>

      <div className="contact-icons" aria-label="Contact links">
        {contacts.map((contact) => {
          const Icon = contact.icon;

          const isExternal =
            !contact.link.startsWith("tel:") &&
            !contact.link.startsWith("mailto:");

          return (
            <a
              key={contact.name}
              className="contact-method"
              href={contact.link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={contact.aria}
            >
              <Icon />
              <span>{contact.name}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}