import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
    '& a': {
      color: 'inherit',
    },
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <>
      <Divider variant="middle" />
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          The application uses open source data provided by{' '}
          <a
            href="https://www.themoviedb.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            TMDB
          </a>
          .
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            TimePazz
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </footer>
    </>
  );
}
