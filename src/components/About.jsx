import React, { useState } from "react";
import "./About.css";
import DetailModal from "./DetailModal";

const highlights = [
  {
    title: "Proven Legal Expertise",
    desc: "Years of experience handling complex legal matters with confidence and precision.",
  },
  {
    title: "Client-Focused Approach",
    desc: "Every case is handled with personal attention and dedication to your needs.",
  },
  {
    title: "Strong Court Representation",
    desc: "Committed to protecting your rights and achieving the best possible outcome.",
  },
];

const About = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section id="about" className="about">
      <div className="container">

        <div className="about-header" >
          <span className="sub-tag">LAW FIRM</span>

          <h2>
            What should you look for in a{" "}
            <strong>trusted legal partner?</strong>
          </h2>

          <p>
            Choosing the right law firm means finding a team that understands
            your situation, communicates clearly, and stands firmly by your side
            throughout the legal process.
          </p>
        </div>

        {/* 🔥 REPLACED STATS WITH CONTENT CARDS */}
        <div className="about-grid">
          {highlights.map((item, i) => (
            <div key={i} className="about-card">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* WORKING HOURS */}
        <div className="working-hours">
          <p>
            🕒 Working Hours: <strong>Mon - Fri : 9am - 5pm</strong>
          </p>
        </div>
      </div>

      <DetailModal
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
        title="Why Choose Us"
        content="We combine legal expertise with a client-first approach, ensuring every case receives the attention and strategy it deserves. Our goal is to guide you confidently through every step of the legal process."
      />
    </section>
  );
};

export default About;