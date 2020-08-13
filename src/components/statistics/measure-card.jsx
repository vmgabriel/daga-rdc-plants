// Develop: vmgabriel

// Libraries
import React from 'react';

// Material
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  CardContent,
  Typography,
  Card,
  Grid
} from '@material-ui/core';

// Styles
const useStyles = makeStyles((theme) => ({
  box: {
    justify: "center",
    xs: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 900,
    textAlign: "center",
  },
  measure: {
    fontSize: 24,
    fontWeight: 400,
    textAlign: "center",
    marginTop: theme.spacing(3),
  }
}));

// Function Component Hook
const MeasureCard = ({ title, measure }) => {
  const clasess = useStyles();

  return (
    <Grid
      item
      className={clasess.box}
      xs={3}
    >
      <Card>
        <CardContent>
          <Typography className={clasess.title}>
            { title }
          </Typography>
          <Typography className={clasess.measure}>
            { measure }
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MeasureCard;
