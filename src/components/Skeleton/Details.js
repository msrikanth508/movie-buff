import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import List from './List';

export default function () {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Skeleton animation="false" variant="rect" height={275} />
      </Grid>
      <Grid item xs={12} sm={6} md={9} direction="row">
        <Box mb={4}>
          <Skeleton variant="text" width="10%" />
          <Skeleton variant="text" width="30%" />
        </Box>
        <Box mb={4}>
          <Skeleton variant="text" width="10%" />
          <Skeleton variant="text" width="60%" />
        </Box>
        <Box mb={4}>
          <Skeleton variant="text" width="10%" />
          <Skeleton variant="text" width="60%" />
        </Box>
        <Box mb={4}>
          <Skeleton variant="text" width="10%" />
          <Skeleton variant="text" width="50%" />
        </Box>
        <Box mb={4}>
          <Skeleton variant="text" width="10%" />
          <Skeleton variant="text" width="50%" />
        </Box>
      </Grid>
      <List count={4} />
    </Grid>
  );
}
