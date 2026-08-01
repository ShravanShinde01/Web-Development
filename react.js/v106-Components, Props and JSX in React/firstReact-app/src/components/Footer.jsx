import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-container">

        <div className="footer-logo">
          <h2>⚡ NovaUI</h2>
          <p>
            Building futuristic web experiences with React,
            modern UI, and creativity.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Services</a>
          <a href="#">About</a>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>

          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 NovaUI. Crafted with ❤️ using React.
      </div>
    </footer>
  );
}

export default Footer;