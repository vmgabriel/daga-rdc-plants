// Develop: vmgabriel

import React from 'react';

// Material
import {
  Container,
  Grid
} from '@material-ui/core';


// Components
import MeasureCard from './measure-card.jsx';
import LinearChart from './Linear-chart.jsx';
import BarChart from './Bar-chart.jsx';
import PieChart from './Pie-chart.jsx';
import AreaChart from './Area-chart.jsx';

const StatisticSensor = (props) => {
  const [state, setState] = React.useState({
    sensor: props.match.params.sensor,
    width: 600,
    height: 400,
    dataBar: [
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350],
    ],
    dataLine: [
      [
        'Day',
        'Guardians of the Galaxy',
        'The Avengers',
        'Transformers: Age of Extinction',
      ],
      [1, 37.8, 80.8, 41.8],
      [2, 30.9, 69.5, 32.4],
      [3, 25.4, 57, 25.7],
      [4, 11.7, 18.8, 10.5],
      [5, 11.9, 17.6, 10.4],
      [6, 8.8, 13.6, 7.7],
      [7, 7.6, 12.3, 9.6],
      [8, 12.3, 29.2, 10.6],
      [9, 16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11, 5.3, 7.9, 4.7],
      [12, 6.6, 8.4, 5.2],
      [13, 4.8, 6.3, 3.6],
      [14, 4.2, 6.2, 3.4],
    ],
    dataPie: [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7],
    ],
    dataArea: [
      ['Year', 'Sales', 'Expenses'],
      ['2013', 1000, 400],
      ['2014', 1170, 460],
      ['2015', 660, 1120],
      ['2016', 1030, 540],
    ],
    optionsArea: {
      hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 },
      chartArea: { width: '50%', height: '70%' },
    }
  });

  React.useEffect(() => {
    console.log('Estado -', state);

    setState({
      ...state,
      approximation: [
        {title: 'Promedio', measure: 240.82238 },
        {title: 'Media', measure: 240.82238 },
        {title: 'Mediana', measure: 240.82238 },
        {title: 'Moda', measure: 240.82238 },
        {title: 'Varianza', measure: 240.82238 },
        {title: 'Desviacion Estandar', measure: 240.82238 },
      ],
      correlation: [
        {title: 'Alta Correlacion', measure: 240.82238 },
        {title: 'Baja Correlacion', measure: 240.82238 },
      ],
      graphs: [
        {title: 'Grafica Medida vs Tiempo', component: <LinearChart state={state} />},
        {title: 'Grafica De Barras', component: <BarChart state={state} />},
        {title: 'Grafica de Torta', component: <PieChart state={state} />},
        {title: 'Grafica de Area', component: <AreaChart state={state} />},
      ]
    });
  }, [props.match.params.sensor]);

  const getMeasureCard = ({measure, title}) => <MeasureCard key={title} title={title} measure={measure} />;
  const getGraphs = ({title, component}) => (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      key={title}
    >
      <h3>{title || 'Title'}</h3>
      {component}
    </Grid>
  );

  return (
    <Container>
      <h1>Here Statistics of { state.sensor || '' }</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        { 'approximation' in state && state.approximation.map(getMeasureCard) }
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        { 'correlation' in state && state.correlation.map(getMeasureCard) }
      </Grid>

      { 'graphs' in state && state.graphs.map(getGraphs) }

    </Container>
  );
};


export default StatisticSensor;
