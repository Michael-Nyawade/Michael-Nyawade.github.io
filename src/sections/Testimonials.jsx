import { useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "I've had the pleasure of working with Michael, a highly analytical and dependable professional—an asset to any research and planning team, with strong skills in data analysis, reporting, and strategic support.",
    name: "Jemimah Muraya",
    role: "Manager Research and Planning",
    company: "Privatization Commission",
  },
  {
    quote:
      "I've found Michael to be a proactive, analytical, and reliable team member—consistently delivering quality research, insightful analysis, and valuable support to strategic planning and performance reporting initiatives.",
    name: "Jairus Koech",
    role: "Principal Research and Planning Officer",
    company: "Privatization Commission",
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
  const scrollRef = useRef(null);
  const pauseRef = useRef(false);

  // AUTO PLAY
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" style={{ padding: "3rem 1rem" }}>
      <div className="section-heading">
        <h2>
          <FaQuoteLeft /> What Colleagues Say
        </h2>

        <p className="section-subtitle">
          Endorsements from professionals I&apos;ve collaborated with
        </p>
      </div>

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
          className="testimonial-nav-btn left"
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
          className="testimonial-nav-btn right"
        >
          ›
        </button>

        {/* SCROLL CONTAINER */}
        <div
          id="testimonial-scroll"
          ref={scrollRef}
          onMouseEnter={() => (pauseRef.current = true)}
          onMouseLeave={() => (pauseRef.current = false)}
          className="testimonial-scroll"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-slide"
            >
              <blockquote className="testimonial-card">
                <div className="testimonial-quote-ico">
                    <FaQuoteLeft />
                </div>
                
                <p>“{testimonial.quote}”</p>

                <footer>
                  <strong>{testimonial.name}</strong>
                  <br />
                  {testimonial.role}
                  <br />
                  {testimonial.company}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}