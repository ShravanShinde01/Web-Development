import React from "react";
import "./Card.css";

function Card({logo, title, desc }) {
  return (
    <div className="card">

      <div className="card-icon">
        {logo}
      </div>

      <h2>{title}</h2>

      <p>{desc}</p>

      <button>Learn More →</button>

    </div>
  );
}

export default Card;