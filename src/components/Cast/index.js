import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  CardMedia,
  Typography,
  CardContent,
  Card,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .slick-slider': {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  },
  cardMedia: {
    height: '200px',
    borderRadius: '4px',
  },
  cardEmpty: {
    width: '100%',
    height: '200px',
    backgroundColor: theme.palette.text.secondary,
    borderRadius: '4px',
    opacity: 0.5,
  },
  cardRoot: {
    background: 'inherit',
    boxShadow: 'none',
  },
  cardContent: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
}));

const settings = {
  dots: false,
  speed: 500,
  lazyLoad: true,
  infinite: false,

  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        speed: 500,
        lazyLoad: true,
        infinite: false,

        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        speed: 500,
        lazyLoad: true,
        infinite: false,

        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        dots: false,
        speed: 500,
        lazyLoad: true,
        infinite: false,

        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function (props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const classes = useStyles();

  return (
    <Box my={4} className={classes.root}>
      <Typography variant="h6" component="h2">
        Cast
      </Typography>
      <Slider {...settings}>
        {props.list.map((list) => (
          <Box p={matches ? 2 : 1} key={list.id}>
            <Card className={classes.cardRoot}>
              {list.profile_path ? (
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://image.tmdb.org/t/p/w185/${list.profile_path}`}
                  title={list.name}
                />
              ) : (
                <PersonIcon className={classes.cardEmpty} />
              )}

              <CardContent className={classes.cardContent}>
                <Typography variant="subtitle1" component="h2">
                  {list.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  color="textSecondary"
                >
                  {list.character}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
