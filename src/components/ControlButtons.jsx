import React from 'react'
import './ControlButtons.css'

const ControlButtons = ({ isPaused, onPause, onStop }) => {
  return (
    <div className="control-buttons">
      <button 
        className="control-button pause-button"
        onClick={onPause}
        aria-label={isPaused ? '재개' : '일시정지'}
      >
        <span className="button-icon">{isPaused ? '▶' : '⏸'}</span>
        <span className="button-text">{isPaused ? '재개' : '일시정지'}</span>
      </button>
      <button 
        className="control-button stop-button"
        onClick={onStop}
        aria-label="긴급 중단"
      >
        <span className="button-icon">⏹</span>
        <span className="button-text">긴급 중단</span>
      </button>
    </div>
  )
}

export default ControlButtons

