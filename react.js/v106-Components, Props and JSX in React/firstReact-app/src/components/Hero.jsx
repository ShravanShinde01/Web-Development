import React from "react";
import "../components/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="badge">
          🚀 Next Generation Web Experience
        </span>

        <h1>
          Build Stunning
          <span> React Websites</span>
          With Modern UI
        </h1>

        <p>
          Create beautiful, responsive and futuristic websites
          using React, animations and glassmorphism.
        </p>

        <div className="buttons">
          <button className="primary">
            Get Started
          </button>

          <button className="secondary">
            Explore
          </button>
        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=700"
          alt="AI"
        />

      </div>

    </section>
  );
}

export default Hero;