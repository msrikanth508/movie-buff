import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Zoom,
  Box,
  CircularProgress,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: '275px',
  },
  cardContent: {
    flexGrow: 1,
  },
  rating: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  progress: {
    position: 'relative',
  },
  ellipsis: {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  link: {
    textDecoration: 'none',
  },
  circle: {
    color: theme.palette.primary,
  },
}));

const getGenreNames = (genresList, ids) =>
  ids
    .reduce((acc, id) => {
      acc.push(genresList[id]);
      return acc;
    }, [])
    .join(', ');

export default function TVItems({ tvList, genres }) {
  const classes = useStyles();

  return (
    <>
      {tvList.map((tv) => (
        <Grid item key={tv.id} xs={12} sm={4} md={3}>
          <Link to={`/tv/details/${tv.id}`} className={classes.link}>
            <Card className={classes.card}>
              <Zoom in timeout={500}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://image.tmdb.org/t/p/w200/${tv.poster_path}`}
                  title={tv.name}
                />
              </Zoom>
              <CardContent className={classes.cardContent}>
                <Box display="flex" justifyContent="space-between">
                  <div>
                    <Typography
                      variant="h6"
                      component="h2"
                      className={classes.ellipsis}
                    >
                      {tv.name}
                    </Typography>
                    <Box component="p" m={0} color="textSecondary">
                      {getGenreNames(genres, tv.genre_ids)}
                    </Box>
                  </div>
                  <Box
                    component="span"
                    display="flex"
                    alignItems="center"
                    pl={2}
                  >
                    <Box className={classes.progress}>
                      <CircularProgress
                        variant="determinate"
                        value={tv.vote_average * 10}
                        size={50}
                        className={classes.circle}
                      />
                      <Typography
                        variant="subtitle2"
                        component="span"
                        className={classes.rating}
                      >
                        {tv.vote_average.toFixed(1)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </>
  );
}
