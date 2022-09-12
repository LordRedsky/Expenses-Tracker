import React from "react";
import ChartBar from "./ChartBar";

import './Chart.css'

const Chart = (props) => {
    const arrDataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...arrDataPointValues)

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => {
                return (
                    <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
                )
            })}
        </div>
    )
}


export default Chart;