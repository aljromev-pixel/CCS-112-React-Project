import React from "react";

function HomePage() {
  return (
    <section
      id="home"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#f5f7fa",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Welcome to My React App
      </h1>

      <p style={{ fontSize: "20px", color: "#555", maxWidth: "600px" }}>
        This is the homepage of my React application. Built using React and
        modern web development practices.
      </p>

      <button
        onClick={() =>
          document.getElementById("about").scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Learn More
      </button>
    </section>
  );
}

export default HomePage;