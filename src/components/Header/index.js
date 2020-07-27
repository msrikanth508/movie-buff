import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Search from './Search';
import Filters from './Filters';
import LeftDrawer from './LeftDrawer';

// import { AppContext } from '../../Providers';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
  },
  logo: {
    width: '28px',
    height: '28px',
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
}));

export default function () {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [showDrawer, showHideDrawer] = React.useState(false);

  function toggleDrawer() {
    showHideDrawer((prevState) => !prevState);
  }
  // const { setAppLanguage, lang } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <AppBar>
        <Container>
          <Toolbar disableGutters>
            {!matches && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Link to="/" className={classes.link}>
              <img
                src="/media/popcorn.png"
                className={classes.logo}
                alt="logo"
              />
              <Typography variant="h6" color="inherit" noWrap>
                Time Pass
              </Typography>
            </Link>
            {matches && (
              <>
                <Filters />
                <div className={classes.grow} />
                <Search />
              </>
            )}

            {/* <LanguageSelect lang={lang} setAppLanguage={setAppLanguage} /> */}
          </Toolbar>
        </Container>
      </AppBar>
      {showDrawer && <LeftDrawer toggleDrawer={toggleDrawer} />}
    </div>
  );
}
