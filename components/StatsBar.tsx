"use client";
import React, { useEffect, useState, useRef } from 'react';
import './StatsBar.css';

const stats = [
  { label: "Cases Won", value: 500, suffix: "+" },
  { label: "Years Experience", value: 20, suffix: "" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Recovered", value: 15, suffix: "M+" }
];

export default function StatsBar() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        stats.forEach((stat, index) => {
          let start = 0;
          const end = stat.value;
          const duration = 2000; // 2 seconds
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = end;
                return newCounts;
              });
              clearInterval(timer);
            } else {
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(start);
                return newCounts;
              });
            }
          }, 16);
        });
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-bar-section" ref={sectionRef}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2 className="stat-number">
              {counts[index]}{stat.suffix}
            </h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}