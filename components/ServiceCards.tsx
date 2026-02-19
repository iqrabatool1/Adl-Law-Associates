"use client";
import React, { useEffect, useRef } from 'react';
import './ServiceCards.css';

export default function ServiceCards({ data }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.1 });

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className="services-header">
          <h2 className="text-black">Our Services</h2>
        </div>
        <div className="services-grid">
          {data.map((service, index) => (
            <div key={index} className="service-card" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="card-inner">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}