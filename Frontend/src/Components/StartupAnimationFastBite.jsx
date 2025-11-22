import React, { useState, useEffect } from "react";
import "./StartupAnimation.css";

export default function StartupAnimation({ children }) {
  const [showTextAnimation, setShowTextAnimation] = useState(true);
  const [showColorFlash, setShowColorFlash] = useState(false);

  useEffect(() => {
    // 1. Text animation duration = 4s (draw + fill)
    const textTimer = setTimeout(() => {
      setShowTextAnimation(false);
      setShowColorFlash(true); // color flash start after text animation
    }, 4000);

    // 2. Full color flash duration = 2s * 4 repeats = ~4s
    const colorTimer = setTimeout(() => {
      setShowColorFlash(false); // hide overlay after color animation
    }, 4000 + 2000); // text + color

    return () => {
      clearTimeout(textTimer);
      clearTimeout(colorTimer);
    };
  }, []);

  return (
    <>
      {(showTextAnimation || showColorFlash) && (
        <div className="startup-overlay">
          {showTextAnimation && (
            <>
              <svg className="logo-svg" viewBox="0 0 1000 200">
                <text x="50%" y="50%" className="svg-text">
                  FastBite
                </text>
              </svg>
              <div className="subtitle">Your <span>Food</span>, Fast & <span>Fresh</span></div>
            </>
          )}
          {showColorFlash && <div className="full-color-flash"></div>}
        </div>
      )}

      {!showTextAnimation && !showColorFlash && children}
    </>
  );
}
