import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "I've had the pleasure of working with Michael, a highly analytical and dependable professional—an asset to any research and planning team, with strong skills in data analysis, reporting, and strategic support.",
    name: "Jemimah Muraya",
    role: "Manager Research and Planning",
    company: "Privatization Authority",
  },
  {
    quote:
      "I've found Michael to be a proactive, analytical, and reliable team member—consistently delivering quality research, insightful analysis, and valuable support to strategic planning and performance reporting initiatives.",
    name: "Jairus Koech",
    role: "Principal Research and Planning Officer",
    company: "Privatization Authority",
  },
  {
    quote:
      "A detail-oriented and dependable analyst, Michael brought clarity to complex credit data, supported decision-making with accurate insights, and consistently demonstrated professionalism, initiative, and strong analytical skills throughout his tenure.",
    name: "Jerome Mbithi",
    role: "Production Manager",
    company: "Metropol Corporation Limited",
  },
  {
    quote:
      "I highly recommend Michael for his strong analytical skills, attention to detail, and insightful fiscal analysis that significantly supported our budgetary and strategic planning processes at the County Assembly of Siaya.",
    name: "Muga Erick",
    role: "Fiscal Analyst",
    company: "County Assembly of Siaya",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="section-heading">
        <h2>
          <FaQuoteLeft /> What Colleagues Say
        </h2>

        <p className="section-subtitle">
          Endorsements from professionals I&apos;ve collaborated with
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="testimonial-card">
            <p>“{testimonial.quote}”</p>

            <footer>
              <strong>{testimonial.name}</strong>
              <br />
              {testimonial.role}
              <br />
              {testimonial.company}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}