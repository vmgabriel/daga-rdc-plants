// Develop: vmgabriel

// Libraries
import React from 'react';
import { Chart } from "react-google-charts";

const PieChart = ({ state }) => {
  return(
    <Chart
      width={state.width}
      height={state.height}
      chartType="PieChart"
      loader={<div>Loading ...</div>}
      data={state.dataPie}
      options={{
        pieHole: 0.4,
      }}
      rootProps={{ 'data-testid': '3' }}
    />
  );
};

export default PieChart;
