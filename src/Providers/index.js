import React, { useEffect, useState } from 'react';
import axios from '../data';

export const AppContext = React.createContext(null);

export default function Provider(props) {
  function setLanguage(lang) {
    setState((prevState) => ({
      ...prevState,
      lang,
    }));
  }
  const [state, setState] = useState({
    movies: {},
    tv: {},
    setAppLanguage: setLanguage,
    lang: 'en-EN',
    region: 'DE',
  });

  useEffect(() => {
    async function getData() {
      try {
        const {
          data: { genres: movieGenres },
        } = await axios.get('/movies/genre');
        const {
          data: { genres: tvGenres },
        } = await axios.get('/tv/genre');

        const g1 = movieGenres.reduce((acc, item) => {
          acc[item.id] = item.name;
          return acc;
        }, {});

        const g2 = tvGenres.reduce((acc, item) => {
          acc[item.id] = item.name;
          return acc;
        }, {});

        setState((prevState) => {
          const t = { ...prevState };
          t.movies.genres = g1;
          t.tv.genres = g2;
          return t;
        });
      } catch (e) {}
    }
    getData();
  }, []);

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
}
