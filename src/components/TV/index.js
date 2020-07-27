import React, { useContext, useState } from 'react';
import { Grid, ButtonGroup, Button } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { AppContext } from '../../Providers';
import axios from '../../data';
import TVItems from './TVItems';
import SkeletonList from '../Skeleton/List';

const useStyles = makeStyles((theme) => ({
  btnGroup: {
    marginBottom: theme.spacing(4),
  },
  pagination: {
    marginTop: theme.spacing(6),
  },
}));

const btns = [
  {
    name: 'Trending',
    value: 'trending',
  },
  {
    name: 'Popular',
    value: 'popular',
  },
  {
    name: 'Top Rated',
    value: 'top',
  },
  {
    name: 'On the air',
    value: 'air',
  },
];

export default function MovieList(props) {
  const params = useParams();
  const pageNumber = parseInt(params.pageNumber || 1, 10);
  const movieType = params.type || 'trending';
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [moviesList, setMoviesList] = React.useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const classes = useStyles();
  const {
    tv: { genres },
  } = useContext(AppContext);

  function handlePageChange(e, page) {
    const { history } = props;
    history.push(`/tvs/${movieType}/${page}`);
  }

  function handleTypeChange(value) {
    const { history } = props;
    history.push(`/tvs/${value}/1`);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber, movieType]);

  React.useEffect(() => {
    setMoviesList([]);
    async function getMoviesList() {
      const {
        data: { results, total_pages },
      } = await axios.get(`/tv/${movieType}`, {
        params: {
          page: pageNumber,
        },
      });

      setMoviesList(results);
      setTotalPages(total_pages);
    }

    getMoviesList();
  }, [pageNumber, movieType]);

  if (moviesList.length === 0) {
    return <SkeletonList />;
  }

  return (
    <>
      <Grid container direction="row" justify="flex-end" alignItems="baseline">
        <ButtonGroup
          size="small"
          aria-label="button group"
          className={classes.btnGroup}
        >
          {btns.map((btn, i) => {
            if (btn.value === movieType) {
              return (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleTypeChange(btn.value)}
                  key={i}
                >
                  {btn.name}
                </Button>
              );
            }
            return (
              <Button key={i} onClick={() => handleTypeChange(btn.value)}>
                {btn.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </Grid>
      <Grid container spacing={matches ? 2 : 1}>
        <TVItems tvList={moviesList} genres={genres} />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Pagination
          page={pageNumber}
          count={totalPages}
          color="primary"
          size="large"
          onChange={handlePageChange}
          className={classes.pagination}
        />
      </Grid>
    </>
  );
}
