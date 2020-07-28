import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../../Providers';
import Details from '../Details';

export default function MovieList() {
  const params = useParams();
  const movieId = params.movieId;

  const {
    movies: { genres },
  } = useContext(AppContext);

  return <Details id={movieId} genres={genres} type="movies" />;
}
