"use client";

import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import fair from '../public/fair.jpg'; // Ensure this path is correct and the image exists

const expertiseData = [
  { title: "Criminal Law", desc: "Expert defense and representation in all criminal matters with a focus on protecting your rights." },
  { title: "Civil Litigation", desc: "Resolving disputes efficiently through strategic negotiation and courtroom advocacy." },
  { title: "Family Law", desc: "Compassionate guidance through divorce, custody, and matrimonial legal requirements." },
  { title: "Corporate Law", desc: "Tailored legal solutions for businesses, from startups to established enterprises." }
];

const stepsData = [
  { title: "Consultation", desc: "Schedule a private meeting to discuss your legal needs and evaluate your case." },
  { title: "Strategy", desc: "Our experts develop a tailored legal roadmap specifically for your objectives." },
  { title: "Execution", desc: "We move forward with precision, handling all filings and negotiations." },
  { title: "Resolution", desc: "Achieving the best possible outcome through dedicated legal expertise." }
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Added .vision-image-side and .vision-item to the observer
    const elementsToAnimate = containerRef.current?.querySelectorAll(
      '.reveal, .expertise-box, .step-card, .vision-image-side, .vision-item'
    );
    
    elementsToAnimate?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {/* --- HERO PART --- */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="reveal delay-1">ADL Law Associates</h1>
            <p className="tagline reveal delay-2">Trusted Legal Expertise with Integrity & Commitment</p>
            <p className="description reveal delay-3">
              We provide professional legal services in criminal, civil, and family law.
              Our mission is to deliver justice with honesty, dedication, and excellence.
            </p>
            <div className="hero-buttons reveal delay-4">
              <a href="#contact" className="btn-primary">Contact Us</a>
              <a href="#services" className="btn-outline">Learn More</a>
            </div>
          </div>
          <div className="hero-image reveal delay-5">
            <img src="/logo.png" alt="Logo" className="hero-img-animated" />
          </div>
        </div>
      </section>

      {/* --- EXPERTISE PART --- */}
      <section className="expertise-section">
        <div className="expertise-container">
          <div className="expertise-header">
            <span className="subtitle">Specializations</span>
            <h2>Our Areas of <br /> Expertise</h2>
            <p>Delivering justice with honesty and excellence.</p>
          </div>
          <div className="expertise-grid">
            {expertiseData.map((item, index) => (
              <div key={index} className="expertise-box" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="box-number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="box-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS PART --- */}
      <section className="how-it-works">
        <div className="how-container">
          <div className="how-title-area reveal">
            <span className="subtitle">The Process</span>
            <h2>How It Works</h2>
          </div>
          <div className="steps-wrapper">
            {stepsData.map((step, index) => (
              <div 
                key={index} 
                className="step-card" 
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="step-number-circle">{index + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                {index !== stepsData.length - 1 && <div className="step-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* --- WORK AND VISION PART --- */}
<section className="vision-section">
  <div className="vision-container">
    
    {/* LEFT SIDE: Content */}
    <div className="vision-text-side">
      <span className="subtitle reveal delay-1">Our Philosophy</span>
      <h2 className="reveal delay-2">Crafting Justice with Vision and Precision</h2>
      
      <div className="vision-item reveal delay-3">
        <h3>Modern Legal Strategy</h3>
        <p>We combine traditional legal values with modern technology to provide efficient, high-stakes representation.</p>
      </div>

      <div className="vision-item reveal delay-4">
        <h3>Integrity First</h3>
        <p>Our vision is built on the bedrock of transparency. We believe every client deserves an honest roadmap to success.</p>
      </div>

      <div className="vision-buttons reveal delay-5">
         <a href="#about" className="btn-outline">Our Full Story</a>
      </div>
    </div>

    {/* RIGHT SIDE: Image */}
    <div className="vision-image-side"> 
      <div className="vision-img-wrapper">
        <img src="/fair.jpg" alt="Our Vision" className="parallax-img" />
        <div className="vision-overlay"></div>
      </div>
    </div>

  </div>
</section>
    </div>
  );
}