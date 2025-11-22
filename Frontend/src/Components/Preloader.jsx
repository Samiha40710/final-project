import React from "react";

export default function Preloader() {
  return (
    <div className="preloader-container">
      <svg
        viewBox="0 0 600 120"
        className="handwrite"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          className="text"
        >
          FASTBITE
        </text>
      </svg>
    </div>
  );
}
