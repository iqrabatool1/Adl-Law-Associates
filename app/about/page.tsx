export default function AboutSection() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT: Text */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            About ADL Law Associates
          </h1>

          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>Our Story</h2>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
              ADL Law Associates was founded with a vision to provide exceptional legal services
              with integrity, professionalism, and dedication. Our team of experienced attorneys
              has been serving clients for over a decade, building trust through successful case outcomes
              and personalized attention to each client's unique needs.
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
              We believe that everyone deserves access to quality legal representation, regardless
              of the complexity of their case. Our commitment to justice drives us to deliver
              results that matter to our clients and their families.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Our Mission</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
                To provide comprehensive legal services with the highest standards of ethics,
                competence, and client service. We strive to achieve justice for our clients
                while maintaining the integrity of the legal profession.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Our Values</h3>
              <ul style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", margin: 0, paddingLeft: "18px" }}>
                <li>Integrity and honesty in all dealings</li>
                <li>Dedication to client success</li>
                <li>Professional excellence</li>
                <li>Community involvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <img
            src="/assets/law-office.jpg"
            alt="ADL Law Associates"
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "auto",
              borderRadius: "8px",
              objectFit: "cover",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>
    </section>
  )
}
