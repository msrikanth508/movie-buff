import React from 'react';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export default function ({ count = 12 }) {
  const items = Array.from({ length: count }).fill();

  return (
    <Grid container spacing={4}>
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
