"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link'; 
import './HeroSection.css';
import { Briefcase, Map, Receipt, Landmark, ArrowRight } from 'lucide-react';

const expertiseData = [
  { 
    title: "Criminal Law", 
    desc: "Expert defense in criminal cases with a focus on justice.",
    icon: <Briefcase size={32} strokeWidth={1.5} />
  },
  { 
    title: "Civil Law", 
    desc: "Handling disputes, contracts, and civil matters professionally.",
    icon: <Map size={32} strokeWidth={1.5} />
  },
  { 
    title: "ADR(MEDIATION)", 
    desc: "Professional mediation services for resolving disputes amicably.",
    icon: <Receipt size={32} strokeWidth={1.5} />
  },
  { 
    title: "Family Law", 
    desc: "Support for divorce, custody, and family-related legal issues.",
    icon: <Landmark size={32} strokeWidth={1.5} />
  },
{
    title: "Anti Narcotics", 
    desc: "Specialized legal support in anti-narcotics and drug-related cases.",
    icon: <Landmark size={32} strokeWidth={1.5} />
},
{
    title: "Corporate",
    desc: "Comprehensive corporate legal services for businesses and organizations.",
    icon: <Landmark size={32} strokeWidth={1.5} />
},

];

const stepsData = [
  { title: "Consultation", desc: "Schedule a private meeting to discuss your legal needs and evaluate your case." },
  { title: "Strategy", desc: "Our experts develop a tailored legal roadmap specifically for your objectives." },
  { title: "Execution", desc: "We move forward with precision, handling all filings and negotiations." },
  { title: "Resolution", desc: "Achieving the best possible outcome through dedicated legal expertise." }
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // If the target is the video container, make sure the video plays
            if (videoRef.current) videoRef.current.play();
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = containerRef.current?.querySelectorAll(
      '.reveal, .expertise-box, .step-card, .vision-image-side, .vision-item'
    );
    
    elementsToAnimate?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderAnimatedText = (text: string, baseDelay: number, speed: number) => {
    return text.split(" ").map((word, i) => (
      <span 
        key={i} 
        className="word-span" 
        style={{ animationDelay: `${baseDelay + (i * speed)}s` }}
      >
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <div ref={containerRef}>
      {/* --- HERO PART --- */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="reveal-container">
              {renderAnimatedText("ADL Law Associates", 0.2, 0.15)}
            </h1>
            
            <p className="tagline reveal-container">
              {renderAnimatedText("Trusted Legal Expertise with Integrity & Commitment", 0.6, 0.08)}
            </p>
            
            <p className="description reveal-container">
              {renderAnimatedText("We provide professional legal services in criminal, civil, and family law. Our mission is to deliver justice with honesty, dedication, and excellence.", 1.2, 0.03)}
            </p>

            <div className="hero-buttons reveal delay-5">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <Link href="/services" className="btn-outline">Learn More</Link>
            </div>
          </div>

          <div className="hero-image reveal delay-5">
            {/* Added Video here with Key to ensure it reloads on route change */}
            <video 
              ref={videoRef}
              key="hero-video-render"
              autoPlay 
              loop 
              muted 
              playsInline 
              className="hero-img-animated"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              <source src="/logo_vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* --- EXPERTISE PART --- */}
      <section className="expertise-section">
        <div className="expertise-container">
          <div className="expertise-header">
            <span className="subtitle">Specializations</span>
            <h2 className="premium-heading">Our Areas of <br /> Expertise</h2>
            <p>Delivering justice with honesty and excellence.
              Our team of legal experts specializes in criminal, civil, family law, and more, providing dedicated representation for every client.
            </p>
          </div>
          <div className="expertise-grid">
            {expertiseData.map((item, index) => (
              <div key={index} className="expertise-box" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="box-top-row">
                  <div className="box-icon-wrapper">{item.icon}</div>
                  <div className="box-number">0{index + 1}</div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="box-arrow"><ArrowRight size={20} /></div>
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
               <Link href="/about" className="btn-outline">Our Full Story</Link>
            </div>
          </div>
          <div className="vision-image-side"> 
            <div className="vision-img-wrapper">
              <img src="/blindfoldlady.png" alt="Our Vision" className="parallax-img" />
              <div className="vision-overlay"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}