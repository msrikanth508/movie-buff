import React from 'react';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ({ count = 12 }) {
  const items = Array.from({ length: count }).fill();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid container spacing={matches ? 2 : 1}>
      {items.map((_, index) => (
        <Grid item key={index} xs={6} sm={4} md={2}>
          <Skeleton animation="false" variant="rect" height={275} />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </Grid>
      ))}
    </Grid>
  );
}
