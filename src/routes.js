import loadable from '@loadable/component';

const MoviesList = loadable(() => import('./components/MovieItem'));
const MovieDetails = loadable(() => import('./components/MovieDetails'));
const TVDetails = loadable(() => import('./components/TVDetails'));
const TVList = loadable(() => import('./components/TV'));

export const routes = [
  {
    path: '/',
    exact: true,
    component: MoviesList,
  },
  {
    path: '/movies/:type?/:pageNumber?',
    component: MoviesList,
    exact: true,
  },
  {
    path: '/movie/details/:movieId',
    component: MovieDetails,
    exact: true,
  },
  {
    path: '/tvs/:type?/:pageNumber?',
    component: TVList,
    exact: true,
  },
  {
    path: '/tv/details/:tvId',
    component: TVDetails,
    exact: true,
  },
];
