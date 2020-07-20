import express from 'express';
import tmdb from '../tmdb';

var router = express.Router();

router.get('/popular', async (req, res, next) => {
  try {
    const data = await tmdb.popular(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/upcoming', async (req, res, next) => {
  try {
    const data = await tmdb.popular(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/top', async (req, res, next) => {
  try {
    const data = await tmdb.popular(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

export default router;
