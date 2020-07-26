import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppProvider from './Providers';
import { routes } from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
    marginTop: theme.spacing(8),
  },
  grid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <Router>
      <AppProvider>
        <Header />
        <main className={classes.main}>
          <Container className={classes.grid}>
            <Switch>
              {routes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  render={(props) => <route.component {...props} />}
                  exact={route.exact || false}
                />
              ))}
            </Switch>
          </Container>
        </main>
        <Footer />
      </AppProvider>
    </Router>
  );
}
