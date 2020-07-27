import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import { AppContext } from '../../Providers';
import axios from '../../data';
import MovieItems from '../Movies/MovieList';
import TVItems from '../TV/TVItems';
import SkeletonList from '../Skeleton/List';

export default function MovieList({ type }) {
  const [data, setData] = React.useState([]);
  const url = type === 'tv' ? '/tv/trending' : '/movies/trending';
  const {
    tv: { genres: tvGenres },
    movies: { genres: movieGenres },
  } = useContext(AppContext);

  React.useEffect(() => {
    async function getData() {
      const {
        data: { results },
      } = await axios.get(url, {
        params: {
          page: 1,
        },
      });

      setData(results.slice(0, 12));
    }

    getData();
  }, [url]);

  if (data.length === 0) {
    return <SkeletonList count={6} />;
  }

  return (
    <>
      <Grid container spacing={4}>
        {type === 'movie' && (
          <MovieItems moviesList={data} genres={movieGenres} />
        )}
        {type === 'tv' && <TVItems tvList={data} genres={tvGenres} />}
      </Grid>
    </>
  );
}
