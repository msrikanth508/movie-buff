import React, { useContext, useState } from 'react';
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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { AppContext } from '../../Providers';
import axios from '../../data';
import Cast from '../Cast';
import TVItems from './TVItems';
import SkeletonDetails from '../Skeleton/Details';
import LinkedCameraOutlinedIcon from '@material-ui/icons/LinkedCameraOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardMedia: {
    height: '400px',
  },
  cardEmpty: {
    width: '100%',
    height: '400px',
    backgroundColor: theme.palette.text.secondary,
    borderRadius: '4px',
    opacity: 0.5,
  },
}));

export default function MovieList() {
  const params = useParams();
  const tvId = params.tvId;
  const classes = useStyles();
  const [movieDetails, setMovieDetails] = useState(null);
  const [castList, setCastList] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const {
    movies: { genres },
  } = useContext(AppContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [tvId]);

  React.useEffect(() => {
    setMovieDetails(null);
    async function getMoviesDetails() {
      const { data } = await axios.get(`/tv/details/${tvId}`);
      const { data: creditsData } = await axios.get(`/tv/credits/${tvId}`);
      const {
        data: { results },
      } = await axios.get(`/tv/recommendations/${tvId}`);

      setMovieDetails(data);
      setCastList(creditsData.cast);
      setRecommendations(results);
    }

    getMoviesDetails();
  }, [tvId]);

  if (!movieDetails) {
    return <SkeletonDetails />;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={matches ? 2 : 1}>
        <Grid item xs={12} sm={6} md={3}>
          <Zoom in timeout={600}>
            <>
              {movieDetails.poster_path ? (
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                  title={movieDetails.name}
                />
              ) : (
                <LinkedCameraOutlinedIcon className={classes.cardEmpty} />
              )}
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
              {movieDetails.name}
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
              Total Seasons
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              color="textSecondary"
            >
              {movieDetails.number_of_seasons}
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="h6" component="h2">
              Total Episodes
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              color="textSecondary"
            >
              {movieDetails.number_of_episodes}
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
              Release date
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              color="textSecondary"
            >
              {movieDetails.first_air_date}
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="h6" component="h2">
              Genre
            </Typography>
            <Typography variant="subtitle1" component="h2">
              <Box display="flex">
                {(movieDetails.genres || []).map((_) => {
                  return (
                    <Box
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
      {castList.length > 0 && (
        <Box mt={3}>
          <Divider variant="middle" />
          <Grid>
            <Cast list={castList} />
          </Grid>
        </Box>
      )}
      {recommendations.length > 0 && (
        <>
          <Box my={3}>
            <Divider variant="middle" />
            <Box mt={3}>
              <Typography variant="h6" component="h2">
                Recommendations
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={matches ? 2 : 1}>
            <TVItems tvList={recommendations} genres={genres} />
          </Grid>
        </>
      )}
    </div>
  );
}
