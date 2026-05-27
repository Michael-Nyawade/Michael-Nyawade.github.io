import { useEffect, useRef } from "react";
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
  const scrollRef = useRef(null);
  const pauseRef = useRef(false);

  // Auto Scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      // Skip auto-scroll if user is hovering/interacting
      if (pauseRef.current) return;

      const maxScroll = container.scrollWidth - container.clientWidth;

      // If no overflow, do nothing
      if (maxScroll <= 0) return;

      const next = container.scrollLeft + 350;

      // Loop back to start when reaching the end
      if (next >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({
          left: next,
          behavior: "smooth",
        });
      }
    }, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Manual scroll handler for navigation buttons
  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: dir * 350,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" className="section">
      <div className="section-inner">
        {/* Section heading */}
        <div className="section-heading">
          <h2 className="section-title">
            <FaQuoteLeft /> What Colleagues Say
          </h2>

          <p className="section-subtitle">
            Endorsements from professionals I've collaborated with
          </p>
        </div>

        {/* Testimonials carousel wrapper */}
        <div className="testimonials-wrapper">
          {/* Navigation buttons */}
          <button
            className="testimonial-nav-btn left"
            onClick={() => scroll(-1)}
          >
            ‹
          </button>

          <button
            className="testimonial-nav-btn right"
            onClick={() => scroll(1)}
          >
            ›
          </button>

          {/* Horizontal scroll container */}
          <div
            id="testimonial-scroll"
            ref={scrollRef}
            className="testimonial-scroll"
            onMouseEnter={() => (pauseRef.current = true)}
            onMouseLeave={() => (pauseRef.current = false)}
          >
            {/* Render testimonial cards */}
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-slide">
                <blockquote className="testimonial-card">
                  {/* Quote icon */}
                  <div className="testimonial-icon">
                    <FaQuoteLeft />
                  </div>

                  {/* Testimonial text */}
                  <p>“{t.quote}”</p>

                  {/* Author details */}
                  <footer>
                    <strong>{t.name}</strong>
                    <br />
                    {t.role}
                    <br />
                    {t.company}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}