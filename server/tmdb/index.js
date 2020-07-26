import tmdbData from '../data';

export class MoviesTmdb {
  constructor() {
    this.paths = {
      latest: '/movie/latest',
      popular: '/movie/popular',
      topRated: '/movie/top_rated',
      upcoming: '/movie/upcoming',
      genre: '/genre/movie/list',
      details: '/movie',
    };
  }

  latest(params) {
    return tmdbData.get(this.paths.latest, params);
  }
  popular(params) {
    return tmdbData.get(this.paths.popular, params);
  }
  topRated(params) {
    return tmdbData.get(this.paths.topRated, params);
  }
  upcoming(params) {
    return tmdbData.get(this.paths.upcoming, params);
  }
  genreList(params) {
    return tmdbData.get(this.paths.genre, params);
  }
  details(params, movieId) {
    return tmdbData.get(`${this.paths.details}/${movieId}`, params);
  }
  credits(params, movieId) {
    return tmdbData.get(`/movie/${movieId}/credits`, params);
  }
  recommendations(params, movieId) {
    return tmdbData.get(`/movie/${movieId}/recommendations`, params);
  }
}

export class TVTmdb {
  constructor() {
    this.paths = {
      latest: '/tv/latest',
      popular: '/tv/popular',
      topRated: '/tv/top_rated',
      air: '/tv/on_the_air',
      genre: '/genre/tv/list',
      details: '/tv',
    };
  }

  latest(params) {
    return tmdbData.get(this.paths.latest, params);
  }
  popular(params) {
    return tmdbData.get(this.paths.popular, params);
  }
  topRated(params) {
    return tmdbData.get(this.paths.topRated, params);
  }
  air(params) {
    return tmdbData.get(this.paths.air, params);
  }
  genreList(params) {
    return tmdbData.get(this.paths.genre, params);
  }
  details(params, tvId) {
    return tmdbData.get(`${this.paths.details}/${tvId}`, params);
  }
  credits(params, tvId) {
    return tmdbData.get(`/tv/${tvId}/credits`, params);
  }
  recommendations(params, tvId) {
    return tmdbData.get(`/tv/${tvId}/recommendations`, params);
  }
}
