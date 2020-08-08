import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TvIcon from '@material-ui/icons/Tv';
import MovieIcon from '@material-ui/icons/Movie';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    marginTop: theme.spacing(3),
    '& ul > a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
}));

export default function ({ toggleDrawer }) {
  const classes = useStyles();

  return (
    <Drawer anchor="left" onClose={toggleDrawer} open>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          <Link to="/movies">
            <ListItem button>
              <ListItemIcon>
                <MovieIcon />
              </ListItemIcon>
              <ListItemText primary="Movies" />
            </ListItem>
          </Link>
          <Link to="/tvs">
            <ListItem button>
              <ListItemIcon>
                <TvIcon />
              </ListItemIcon>
              <ListItemText primary="Tv" />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  );
}
