import React from "react";

export default function About() {
  return (
    <section id="about" style={{ padding: "3rem 1rem", textAlign: "center" }}>
      <h2>About Me</h2>
      <div
        style={{
          maxWidth: "800px",
          margin: "2rem auto 0",
          textAlign: "left",
          lineHeight: 1.6,
        }}
      >
        <p>
          I have a background in statistics and data science, with professional experience 
          across finance, research, and software development. My career journey began as a fiscal 
          analyst attachee, progressed through credit analysis and research & planning, and 
          now continues as a software developer apprentice. At the core, my passion lies in 
          data science — building systems that merge analytics, engineering, and real-world 
          decision-making. I enjoy creating data-driven solutions that transform insights 
          into actionable strategies, and I'm especially keen on projects that empower 
          businesses and communities through smarter tools and technologies.
        </p>
      </div>
    </section>
  );
}