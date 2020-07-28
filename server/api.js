import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import serverless from 'serverless-http';
import cors from 'cors';
import movieRoutes from './routes/movies';
import tvRoutes from './routes/tv';
import generalRoutes from './routes/general';

const app = express();

const params = {
  page: 1,
  language: 'en-EN',
  region: 'DE',
};

const getQueryParams = (query) =>
  Object.keys(params).reduce((acc, key) => {
    if (query[key]) {
      acc[key] = query[key];
    } else {
      acc[key] = params[key];
    }
    return acc;
  }, {});

app.use(cors());

app.use(function (req, res, next) {
  if (req.method === 'GET') {
    req.query = {
      ...req.query,
      ...getQueryParams(req.query),
    };
  }
  next();
});
app.use(logger('prod'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/.netlify/functions/api/', generalRoutes);
app.use('/.netlify/functions/api/movies/', movieRoutes);
app.use('/.netlify/functions/api/tv/', tvRoutes);

module.exports = app;
module.exports.handler = serverless(app);
