import React from 'react'
import ChartBar from '../ChartBar/ChartBar'
import './Chart.css'

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map(dataPoint=>dataPoint.value)
  const totalMaximum = Math.max(...dataPointValues)
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint,index) => (
        <ChartBar
          key={index}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}
