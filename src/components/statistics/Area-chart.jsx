// Develop: vmgabriel

// Libraries
import React from 'react';
import { Chart } from "react-google-charts";

const AreaChart = ({ state }) => {
  return(
    <Chart
      width={state.width}
      height={state.height}
      chartType="AreaChart"
      loader={<div>Loading ...</div>}
      data={state.dataArea}
      options={state.optionsArea}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default AreaChart;
