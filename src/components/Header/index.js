import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Search from './Search';
import Filters from './Filters';
// import { AppContext } from '../../Providers';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
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
}));

export default function () {
  const classes = useStyles();
  // const { setAppLanguage, lang } = useContext(AppContext);

  return (
    <AppBar>
      <Container>
        <Toolbar disableGutters>
          <Link to="/" className={classes.link}>
            <img src="/media/popcorn.png" className={classes.logo} alt="logo" />
            <Typography variant="h6" color="inherit" noWrap>
              Time Pass
            </Typography>
          </Link>

          <Filters />
          <div className={classes.grow} />
          <Search />
          {/* <LanguageSelect lang={lang} setAppLanguage={setAppLanguage} /> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
