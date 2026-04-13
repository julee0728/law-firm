import React, { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TheProblem from "./components/TheProblem"
import WhatWeDo from "./components/WhatWeDo"
import AboutUs from "./components/AboutUs"
import Pricing from "./components/Pricing"
import About from "./components/About"
import PracticeAreas from "./components/PracticeAreas"
import HowItWorks from "./components/HowItWorks"
import WhyUs from "./components/WhyUs"
import Results from "./components/Results"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 100 });
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <div id="home" data-aos="fade-up"><Hero /></div>
        <div id="the-problem" data-aos="fade-up"><TheProblem /></div>
        <div id="what-we-do" data-aos="fade-up"><WhatWeDo /></div>

        <div id="about-us" data-aos="fade-up"><AboutUs /></div>
        <div id="about" data-aos="fade-up"><About /></div>

        <div id="pricing" data-aos="fade-up"><Pricing /></div>

        <div id="practice" data-aos="fade-up"><PracticeAreas /></div>
        <div id="how-it-works" data-aos="fade-up"><HowItWorks /></div>
        <div id="why-us" data-aos="fade-up"><WhyUs /></div>

        <div id="results" data-aos="fade-up"><Results /></div>
        <div id="testimonials" data-aos="fade-up"><Testimonials /></div>
        <div id="faq" data-aos="fade-up"><FAQ /></div>
      </main>
      <Footer />
    </div>
  )
}

export default App