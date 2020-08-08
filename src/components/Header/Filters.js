/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import TvIcon from '@material-ui/icons/TvOutlined';
import MovieIcon from '@material-ui/icons/MovieCreationOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  icon: {
    minWidth: 0,
    paddingRight: theme.spacing(1),
    color: 'inherit',
  },
}));

export default function Links() {
  const classes = useStyles();

  return (
    <Box mx={4} color="primary" className={classes.root} display="flex">
      <Link to="/movies">
        <ListItem>
          <ListItemIcon classes={{ root: classes.icon }}>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem>
      </Link>
      <Link to="/tvs">
        <ListItem>
          <ListItemIcon classes={{ root: classes.icon }}>
            <TvIcon />
          </ListItemIcon>
          <ListItemText primary="Tv" />
        </ListItem>
      </Link>
    </Box>
  );
}
