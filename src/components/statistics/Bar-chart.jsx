// Develop: vmgabriel

// Libraries
import React from 'react';
import { Chart } from "react-google-charts";


const BarChart = ({ state }) => {
  return(
    <Chart
      width={state.width}
      height={state.height}
      chartType="Bar"
      loader={<div>Loading ..</div>}
      data={state.dataBar}
    />
  );
};


export default BarChart;
