import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { CardMedia, Popper } from '@material-ui/core';

import Fade from '@material-ui/core/Fade';
import axios from '../../data';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkedCameraOutlinedIcon from '@material-ui/icons/LinkedCameraOutlined';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import debounce from 'lodash.debounce';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
  paper: {
    ...theme.typography.body1,
    overflow: 'hidden',
    margin: '4px 0',
    borderRadius: 0,
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
  },
  popper: {
    zIndex: theme.zIndex.modal,
  },
  /* Styles applied to the `listbox` component. */
  listbox: {
    maxHeight: '50vh',
    overflow: 'auto',
    '& > a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  cardMedia: {
    width: '40px',
    height: '40px',
    backgroundSize: 'cover',
    borderRadius: '4px',
  },
  cardEmpty: {
    width: '40px',
    height: '40px',
    backgroundColor: theme.palette.text.secondary,
    borderRadius: '4px',
    opacity: 0.5,
  },
  image: {
    width: '40px',
    height: '40px',
    backgroundSize: 'cover',
  },
}));

export default function () {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);

  async function getSearchData(query) {
    if (query.length) {
      const {
        data: { results },
      } = await axios.get(`/search/`, {
        params: {
          query,
        },
      });

      if (results) {
        setOptions(
          results.filter(
            (_) => _.media_type === 'tv' || _.media_type === 'movie'
          )
        );
        setOpen(true);
      } else {
        setOptions([]);
        setOpen(false);
      }
    } else {
      setOptions([]);
      setOpen(false);
    }
  }

  const fetchData = debounce(getSearchData, 600);

  const handleChange = (event) => {
    const query = event.target.value;
    fetchData(query);
  };

  function handleFocus(event) {
    setAnchorEl(event.currentTarget);
    if (options.length) {
      setOpen(true);
    }
  }

  function handleBlur() {
    setOpen(false);
    setAnchorEl(null);
  }

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search movies or tv"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </div>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        className={classes.popper}
        style={{
          width: anchorEl ? anchorEl.clientWidth : null,
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.paper}>
              <List className={classes.listbox}>
                {options.map((option) => (
                  <Link
                    to={
                      option.media_type === 'tv'
                        ? `/tv/details/${option.id}`
                        : `/movie/details/${option.id}`
                    }
                  >
                    <ListItem key={option.id} button>
                      <ListItemIcon>
                        {option.poster_path ? (
                          <CardMedia
                            className={classes.cardMedia}
                            image={`https://image.tmdb.org/t/p/w185/${option.poster_path}`}
                            title={option.name}
                          />
                        ) : (
                          <LinkedCameraOutlinedIcon
                            className={classes.cardEmpty}
                          />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={option.name || option.title} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}
