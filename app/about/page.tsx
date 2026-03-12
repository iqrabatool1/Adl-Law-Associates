// components/AboutSection.tsx
import React from 'react';

export default function AboutSection() {
  const gold = "#c5a059";

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "120px 20px" }}>
      <div style={{
        maxWidth: "1200px",
        margin: "auto",
        display: "flex",
        gap: "60px",
        alignItems: "center",
        flexWrap: "wrap",
      }}>
        
        {/* LEFT: Text Content */}
        <div style={{ flex: "1 1 500px" }}>
          <span style={{ 
            color: gold, 
            textTransform: "uppercase", 
            letterSpacing: "3px", 
            fontSize: "13px", 
            fontWeight: "bold",
            display: "block",
            marginBottom: "15px"
          }}>
            Established Excellence
          </span>
          
          <h1 style={{ 
            fontSize: "48px", 
            fontWeight: "800", 
            color: "#000", 
            lineHeight: "1.1", 
            marginBottom: "35px",
            fontFamily: "'Playfair Display', serif" 
          }}>
            About ADL Law <span style={{ color: gold }}>Associates</span>
          </h1>

          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#444", marginBottom: "20px" }}>
              Founded on the principles of <strong>unwavering integrity</strong> and professional excellence, 
              ADL Law Associates has emerged as a premier legal institution. Under the leadership of 
              Advocate Riffat Jan, our firm has spent over a decade dismantling legal complexities 
              for a diverse range of clients.
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#444" }}>
              We don’t just offer legal advice; we provide strategic guardianship. Our approach combines 
              traditional legal wisdom with modern tactical defense, ensuring our clients are protected 
              in an ever-evolving judicial landscape.
            </p>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "30px",
            borderTop: `1px solid #eee`,
            paddingTop: "30px"
          }}>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px", color: "#000" }}>
                Our Mission
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#666" }}>
                To deliver master-class legal advocacy while maintaining the highest ethical 
                standards in the pursuit of justice for every client we represent.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px", color: "#000" }}>
                Core Values
              </h3>
              <ul style={{ 
                fontSize: "14px", 
                lineHeight: "1.8", 
                color: "#666", 
                paddingLeft: "18px",
                margin: 0
              }}>
                <li style={{ marginBottom: "5px" }}>Professional Sovereignty</li>
                <li style={{ marginBottom: "5px" }}>Absolute Confidentiality</li>
                <li style={{ marginBottom: "5px" }}>Strategic Tenacity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: Styled Image Area */}
        <div style={{ 
          flex: "1 1 400px", 
          position: "relative",
          display: "flex",
          justifyContent: "center"
        }}>
          {/* Decorative Gold Frame Behind Image */}
          <div style={{
            position: "absolute",
            width: "100%",
            maxWidth: "400px",
            height: "100%",
            border: `2px solid ${gold}`,
            top: "20px",
            left: "20px",
            zIndex: 0,
            borderRadius: "4px"
          }}></div>

          <img
            src="/riffatjan.png"
            alt="Advocate Riffat Jan"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              borderRadius: "4px",
              position: "relative",
              zIndex: 1,
              boxShadow: "20px 20px 60px rgba(0,0,0,0.15)",
              filter: "grayscale(10%) contrast(110%)",
              transition: "transform 0.3s ease"
            }}
          />
          
          {/* Experience Badge */}
          <div style={{
            position: "absolute",
            bottom: "-20px",
            right: "10px",
            backgroundColor: "#000",
            color: "#fff",
            padding: "20px 30px",
            zIndex: 2,
            boxShadow: "10px 10px 30px rgba(0,0,0,0.2)"
          }}>
            <span style={{ fontSize: "24px", fontWeight: "bold", color: gold, display: "block" }}>10+</span>
            <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "2px" }}>Years Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
}