import React from 'react';
import { Grid, Typography, Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Trending from './Trending';

const useStyles = makeStyles((theme) => ({
  link: {
    '& a': {
      color: 'inherit',
    },
  },
  root: {
    flexGrow: 1,
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function () {
  const classes = useStyles();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="space-between">
              <Typography component="h2" variant="h5">
                Trending Movies
              </Typography>

              <Box color="#fff" className={classes.link}>
                <Link to="/movies/trending">
                  <Typography component="h2" variant="subtitle1">
                    More
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box my={1}>
              <Divider className={classes.divider} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Trending type="movie" />
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="space-between">
              <Typography component="h2" variant="h5">
                Trending TV
              </Typography>

              <Box color="#fff" className={classes.link}>
                <Link to="/tvs/trending">
                  <Typography component="h2" variant="subtitle1">
                    More
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box my={1}>
              <Divider className={classes.divider} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Trending type="tv" />
        </Grid>
      </Grid>
    </div>
  );
}
