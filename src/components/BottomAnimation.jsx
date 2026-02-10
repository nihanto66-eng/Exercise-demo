import React from 'react'
import './BottomAnimation.css'

const BottomAnimation = () => {
  return (
    <div className="bottom-animation">
      <div className="wave-container">
        <svg
          className="wave-svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="rgba(255, 138, 107, 0.15)"
            className="wave-path"
          />
          <path
            d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z"
            fill="rgba(255, 138, 107, 0.1)"
            className="wave-path wave-path-delayed"
          />
        </svg>
      </div>
      <div className="floating-elements">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="floating-circle"
            style={{
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default BottomAnimation

