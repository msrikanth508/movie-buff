import loadable from '@loadable/component';

const Home = loadable(() => import('./components/Home'));
const Movies = loadable(() => import('./components/Movies'));
const MovieDetails = loadable(() => import('./components/Movies/Details'));

const TVDetails = loadable(() => import('./components/TV/Details'));
const TV = loadable(() => import('./components/TV'));

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/movies/:type?/:pageNumber?',
    component: Movies,
    exact: true,
  },
  {
    path: '/movie/details/:movieId',
    component: MovieDetails,
    exact: true,
  },
  {
    path: '/tvs/:type?/:pageNumber?',
    component: TV,
    exact: true,
  },
  {
    path: '/tv/details/:tvId',
    component: TVDetails,
    exact: true,
  },
];
