import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts'
import './IntensityChart.css'

const IntensityChart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // 초기 데이터 생성
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: i * 5,
      intensity: Math.random() * 40 + 60
    }))
    setData(initialData)

    // 실시간 데이터 업데이트
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1)]
        newData.push({
          time: (prev.length) * 5,
          intensity: Math.random() * 40 + 60
        })
        return newData
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="intensity-chart glass-card">
      <h2 className="section-title">구간별 강도</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorIntensity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF8A6B" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#FF8A6B" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              stroke="#999"
              fontSize={12}
              tick={{ fill: '#666' }}
            />
            <YAxis 
              stroke="#999"
              fontSize={12}
              tick={{ fill: '#666' }}
              domain={[0, 100]}
            />
            <Area
              type="monotone"
              dataKey="intensity"
              stroke="#FF8A6B"
              strokeWidth={3}
              fill="url(#colorIntensity)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="intensity-info">
        <div className="intensity-item">
          <span className="intensity-label">평균 강도</span>
          <span className="intensity-value">
            {Math.round(data.reduce((acc, d) => acc + d.intensity, 0) / data.length || 0)}%
          </span>
        </div>
        <div className="intensity-item">
          <span className="intensity-label">최고 강도</span>
          <span className="intensity-value">
            {Math.round(Math.max(...data.map(d => d.intensity), 0))}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default IntensityChart

