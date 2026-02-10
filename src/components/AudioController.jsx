import React, { useState } from 'react'
import './AudioController.css'

const AudioController = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(70)
  const [currentTrack, setCurrentTrack] = useState(1)

  const tracks = [
    { id: 1, name: '에너지 부스트', artist: 'Workout Mix' },
    { id: 2, name: '파워 업', artist: 'Training Beats' },
    { id: 3, name: '엔듀런스', artist: 'Cardio Mix' }
  ]

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
  }

  const handleTrackChange = (direction) => {
    if (direction === 'next') {
      setCurrentTrack(prev => (prev >= tracks.length ? 1 : prev + 1))
    } else {
      setCurrentTrack(prev => (prev <= 1 ? tracks.length : prev - 1))
    }
  }

  const currentTrackInfo = tracks.find(t => t.id === currentTrack)

  return (
    <div className="audio-controller glass-card">
      <h2 className="section-title">음악 컨트롤</h2>
      <div className="audio-content">
        <div className="track-info">
          <div className="track-name">{currentTrackInfo?.name}</div>
          <div className="track-artist">{currentTrackInfo?.artist}</div>
        </div>
        
        <div className="audio-controls">
          <button 
            className="control-btn prev-btn"
            onClick={() => handleTrackChange('prev')}
            aria-label="이전 곡"
          >
            ⏮
          </button>
          <button 
            className="control-btn play-pause-btn"
            onClick={handlePlayPause}
            aria-label={isPlaying ? '일시정지' : '재생'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button 
            className="control-btn next-btn"
            onClick={() => handleTrackChange('next')}
            aria-label="다음 곡"
          >
            ⏭
          </button>
        </div>

        <div className="volume-control">
          <span className="volume-icon">🔊</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
          <span className="volume-value">{volume}%</span>
        </div>
      </div>
    </div>
  )
}

export default AudioController

