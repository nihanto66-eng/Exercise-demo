import React from 'react'
import './PerformanceStats.css'

const PerformanceStats = ({ calories, heartRate, distance }) => {
  const stats = [
    {
      label: '칼로리',
      value: Math.round(calories),
      unit: 'kcal',
      icon: '🔥'
    },
    {
      label: '심박수',
      value: heartRate,
      unit: 'bpm',
      icon: '❤️'
    },
    {
      label: '거리',
      value: distance.toFixed(2),
      unit: 'km',
      icon: '📍'
    }
  ]

  return (
    <div className="performance-stats glass-card">
      <h2 className="section-title">실시간 퍼포먼스</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">
              {stat.value}
              <span className="stat-unit">{stat.unit}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PerformanceStats

