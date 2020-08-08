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
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import LinkedCameraOutlinedIcon from '@material-ui/icons/LinkedCameraOutlined';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  cardMedia: {
    height: '220px',
  },
  cardEmpty: {
    width: '100%',
    height: '220px',
    backgroundColor: theme.palette.text.secondary,
    borderRadius: '4px',
    opacity: 0.5,
  },
  cardContent: {
    flexGrow: 1,
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  rating: {
    position: 'absolute',
    backgroundColor: 'green',
    padding: theme.spacing(0.5),
    right: 0,
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
    lineHeight: 1,
    fontSize: '1.1rem',
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
    .slice(0, 3)
    .join(', ');

export default function List({ items, genres, type }) {
  const classes = useStyles();

  return (
    <>
      {items.map((item) => (
        <Grid item key={item.id} xs={6} sm={4} md={2}>
          <Link
            to={`/${type === 'movies' ? 'movie' : 'tv'}/details/${item.id}`}
            className={classes.link}
          >
            <Card className={classes.card}>
              <Zoom in timeout={500}>
                {item.poster_path ? (
                  <CardMedia
                    className={classes.cardMedia}
                    image={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                    title={item.title || item.name}
                  />
                ) : (
                  <LinkedCameraOutlinedIcon className={classes.cardEmpty} />
                )}
              </Zoom>
              <CardContent className={classes.cardContent}>
                <Box display="flex" justifyContent="space-between">
                  <div>
                    <Typography
                      variant="h6"
                      component="h2"
                      className={classes.ellipsis}
                      title={item.title || item.name}
                    >
                      {item.title || item.name}
                    </Typography>
                    <Box component="p" m={0} mt={1} color="textSecondary">
                      {genres && getGenreNames(genres, item.genre_ids)}
                    </Box>
                  </div>
                </Box>
              </CardContent>
              <Box className={classes.rating}>
                {item.vote_average.toFixed(1)}
              </Box>
            </Card>
          </Link>
        </Grid>
      ))}
    </>
  );
}
