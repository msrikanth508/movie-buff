import tmdbData from '../data';

const paths = {
  popular: '/movie/popular',
  topRated: '/movie/top_rated',
  upcoming: '/movie/upcoming',
};

class Tmdb {
  popular(params) {
    return tmdbData.get(paths.popular, params);
  }
  topRated(params) {
    return tmdbData.get(paths.topRated, params);
  }
  upcoming(params) {
    return tmdbData.get(paths.upcoming, params);
  }
}

export default new Tmdb();
