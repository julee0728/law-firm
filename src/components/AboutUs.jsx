import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <div className="container">
        <div
          className="section-header1"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="sub-tag">ABOUT US</span>
          <h2>Your Trusted Legal Partner</h2>
          <p style={{ width: "80%", textAlign: "center" }}>
            We are committed to delivering top-tier legal services with
            integrity, transparency, and dedication. Our firm believes in
            building strong and lasting relationships with our clients by truly
            understanding their unique situations and legal challenges. With a
            client-first approach, we provide clear communication, honest
            guidance, and well-planned legal strategies tailored to each
            individual case. Backed by years of experience and a deep
            understanding of the legal landscape, our team works tirelessly to
            protect your rights and secure the best possible outcomes. Whether
            you are facing a complex legal issue or simply seeking expert
            advice, we stand by your side at every step—ensuring confidence,
            clarity, and results you can trust.
          </p>
        </div>

        {/* 🔥 NEW COLORFUL CARDS */}
        <div className="about-us-cards">
          <div className="about-card">
            <h3>Who We Are</h3>
            <p>
              Our law firm has years of experience handling complex legal cases.
              We focus on providing personalized solutions to every client.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To protect our clients' rights and deliver justice with excellence
              and professionalism.
            </p>
          </div>

          <div className="about-card">
            <h3>Why Choose Us</h3>
            <ul>
              <li>✔ Experienced Lawyers</li>
              <li>✔ Client First Approach</li>
              <li>✔ Proven Results</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
