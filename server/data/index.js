import axios from 'axios';

const api_key = '0aaa5e91936b43b81b469f72e2c5e339';
const tmdbRequest = axios.create({
  baseURL: 'http://api.themoviedb.org/3/',
  headers: { Accept: 'application/json' },
  params: {
    api_key: '0aaa5e91936b43b81b469f72e2c5e339',
  },
});

function TmdbData() {}

TmdbData.prototype.get = function (url, params) {
  return tmdbRequest({
    url: url,
    method: 'get',
    params: {
      api_key: api_key,
      ...params,
    },
  })
    .then(function (response) {
      return response.data;
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};

export default new TmdbData();
