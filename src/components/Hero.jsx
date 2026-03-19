import React, { useState } from "react";
import "./Hero.css";
import DetailModal from "./DetailModal";

const features = [
  {
    title: "Criminal Defense",
    desc: "Protecting your rights, securing justice.",
    type: "dark",
  },
  {
    title: "Personal Injury",
    desc: "Seeking compensation for your losses.",
    type: "accent",
  },
  {
    title: "Business Law",
    desc: "Guiding success through legal expertise.",
    type: "dark",
  },
];

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero">
      <div className="overlay" />

      <div className="hero-container">
        <div className="hero-content">
          <h1>
            <strong className="hhh">Australia's Most Trusted</strong>
            <span className="hhh">Law Firm</span>
          </h1>

          <p>
            We have successfully represented over 1,000 clients, delivering
            trusted legal guidance with a strong commitment to results.
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        {features.map((item, i) => (
          <div key={i} className={`card ${item.type}`}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="About Our Firm"
        content="Burg & Brock, Inc. has been a cornerstone..."
      />
    </section>
  );
};

export default Hero;