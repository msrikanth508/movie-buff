/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > a': {
      marginLeft: theme.spacing(2),
      fontWeight: 500,
      color: '#2a2a2a',
      textDecoration: 'none',
    },
  },
}));

export default function Links() {
  const classes = useStyles();

  return (
    <Box mx={4} color="primary">
      <Typography className={classes.root}>
        <Link to="/movies">Movies</Link>
        <Link to="/tvs">TV</Link>
      </Typography>
    </Box>
  );
}
