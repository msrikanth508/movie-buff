import React, { useContext, useState, useEffect } from 'react';
import {
  Box,
  CardMedia,
  Grid,
  Zoom,
  Typography,
  Divider,
} from '@material-ui/core';

import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { AppContext } from '../../Providers';
import axios from '../../data';
import Cast from '../Cast';
import MovieItems from './MovieList';
import SkeletonDetails from '../Skeleton/Details';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  cardMedia: {
    height: '400px',
  },
}));

const durationInHours = (duration) => {
  if (duration < 60) {
    return `00:${duration}`;
  } else {
    var hours = Math.floor(duration / 60);
    var minutes = duration % 60;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
  }
};
export default function MovieList() {
  const params = useParams();
  const movieId = params.movieId;
  const classes = useStyles();
  const [movieDetails, setMovieDetails] = useState();
  const [castList, setCastList] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const {
    movies: { genres },
  } = useContext(AppContext);

  React.useEffect(() => {
    async function getMoviesDetails() {
      const { data } = await axios.get(`/movies/details/${movieId}`);
      const { data: creditsData } = await axios.get(
        `/movies/credits/${movieId}`
      );
      const {
        data: { results },
      } = await axios.get(`/movies/recommendations/${movieId}`);

      setCastList(creditsData.cast);
      setRecommendations(results);
      setMovieDetails(data);
    }

    getMoviesDetails();
  }, [movieId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);

  if (!movieDetails) {
    return <SkeletonDetails />;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Zoom in timeout={600}>
            <>
              <CardMedia
                className={classes.cardMedia}
                image={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                title={movieDetails.title}
              />
              <Box my={3} fontStyle="italic">
                <Typography>{movieDetails.tagline}</Typography>
              </Box>
            </>
          </Zoom>
        </Grid>
        <Grid item xs={12} sm={6} md={9} direction="row">
          <Box mb={3}>
            <Typography variant="h6" component="h2">
              Title
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              color="textSecondary"
            >
              {movieDetails.title}
            </Typography>
          </Box>

          <Box mb={3}>
            <Typography variant="h6" component="h2">
              Overview
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              color="textSecondary"
            >
              {movieDetails.overview}
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="h6" component="h2">
              Rating
            </Typography>
            <Box display="flex">
              <Box
                mr={1}
                bgcolor="primary.main"
                px={1}
                py={0.5}
                borderRadius={4}
                color="#2a2a2a"
              >
                <Typography variant="subtitle2">
                  {movieDetails.vote_average}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box mb={1}>
            <Typography variant="h6" component="h2">
              Duration
            </Typography>

            <Typography
              variant="subtitle1"
              component="h2"
              color="textSecondary"
            >
              {durationInHours(movieDetails.runtime)}
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="h6" component="h2">
              Original language
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              color="textSecondary"
            >
              {movieDetails.original_language}
            </Typography>
          </Box>

          <Box mb={1}>
            <Typography variant="h6" component="h2">
              Budget
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              color="textSecondary"
            >
              $ {movieDetails.budget}
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="h6" component="h2">
              Release date
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              color="textSecondary"
            >
              {movieDetails.release_date}
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="h6" component="h2">
              Genre
            </Typography>
            <Typography variant="subtitle1" component="h2">
              <Box display="flex">
                {(movieDetails.genres || []).map((_, i) => {
                  return (
                    <Box
                      key={i}
                      mr={1}
                      bgcolor="primary.main"
                      px={1}
                      py={0.5}
                      borderRadius={4}
                      color="#2a2a2a"
                    >
                      <Typography variant="subtitle2">{_.name}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid>
        <Cast list={castList} />
      </Grid>
      <Divider variant="middle" />
      <Box my={3}>
        <Typography variant="h6" component="h2">
          Recommendations
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <MovieItems moviesList={recommendations} genres={genres} />
      </Grid>
    </div>
  );
}
