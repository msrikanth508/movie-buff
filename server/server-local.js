import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';

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

app.use(function (req, res, next) {
  if (req.method === 'GET') {
    req.query = {
      ...req.query,
      ...getQueryParams(req.query),
    };
  }
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', indexRouter);

export default app;
