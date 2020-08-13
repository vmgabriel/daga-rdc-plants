// Develop: vmgabriel

// Libraries
import React from 'react';
import { Chart } from "react-google-charts";

const LinearChart = ({ state }) => {
  return(
    <Chart
      width={state.width}
      height={state.height}
      chartType="Line"
      loader={<div>Loading ...</div>}
      data={state.dataLine}
      rootProps={{ 'data-testid': '3' }}
    />
  );
};

export default LinearChart;
