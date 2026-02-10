import React, { useState, useEffect } from 'react'
import PerformanceStats from './components/PerformanceStats'
import IntensityChart from './components/IntensityChart'
import AudioController from './components/AudioController'
import ControlButtons from './components/ControlButtons'
import BottomAnimation from './components/BottomAnimation'
import './App.css'

function App() {
  const [isRunning, setIsRunning] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [time, setTime] = useState(0)
  const [calories, setCalories] = useState(0)
  const [heartRate, setHeartRate] = useState(0)
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    if (isRunning && !isPaused) {
      const interval = setInterval(() => {
        setTime(prev => prev + 1)
        setCalories(prev => prev + Math.random() * 0.5)
        setHeartRate(prev => {
          const base = 120
          const variation = Math.sin(Date.now() / 2000) * 10
          return Math.round(base + variation)
        })
        setDistance(prev => prev + Math.random() * 0.01)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isRunning, isPaused])

  const handlePause = () => {
    setIsPaused(!isPaused)
  }

  const handleStop = () => {
    setIsRunning(false)
    setIsPaused(false)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="app">
      <div className="app-container">
        <div className="glass-header">
          <h1 className="app-title">Forme</h1>
          <div className="time-display">{formatTime(time)}</div>
        </div>

        <PerformanceStats
          calories={calories}
          heartRate={heartRate}
          distance={distance}
        />

        <IntensityChart />

        <AudioController />

        <ControlButtons
          isPaused={isPaused}
          onPause={handlePause}
          onStop={handleStop}
        />

        <BottomAnimation />
      </div>
    </div>
  )
}

export default App

