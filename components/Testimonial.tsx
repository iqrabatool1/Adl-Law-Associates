"use client";
import React, { useState } from 'react';
import './Testimonial.css';

export default function Testimonial({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        <div className="testimonials-header">
          <span className="subtitle">Client Trust</span>
          <h2 className="main-title">What Our Clients Say</h2>
        </div>

        <div className="slider-window">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {data.map((t, index) => (
              <div key={index} className="testimonial-slide">
                <div className={`testimonial-card-inner ${index === activeIndex ? 'active' : ''}`}>
                  <div className="quote-mark">“</div>
                  <p className="testimonial-text">{t.text}</p>
                  
                  <div className="testimonial-footer">
                    <div className="footer-line-container">
                      <div className={`moving-line ${index === activeIndex ? 'animate' : ''}`}></div>
                    </div>
                    <div className="author-info">
                      <h4>{t.name}</h4>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Controls */}
        <div className="slider-controls">
          <button onClick={prevSlide} className="control-btn">PREV</button>
          <div className="dot-container">
            {data.map((_, i) => (
              <div 
                key={i} 
                className={`dot ${i === activeIndex ? 'active' : ''}`} 
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="control-btn">NEXT</button>
        </div>
      </div>
    </section>
  );
}