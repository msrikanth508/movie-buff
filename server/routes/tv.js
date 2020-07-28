import express from 'express';
import { TVTmdb } from '../tmdb';

const tvTmdb = new TVTmdb();

var router = express.Router();

router.get('/latest', async (req, res, next) => {
  try {
    const data = await tvTmdb.latest(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/popular', async (req, res, next) => {
  try {
    const data = await tvTmdb.popular(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/air', async (req, res, next) => {
  try {
    const data = await tvTmdb.air(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/top', async (req, res, next) => {
  try {
    const data = await tvTmdb.topRated(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/genre', async (req, res, next) => {
  try {
    const data = await tvTmdb.genreList(req.query);
    res.json(data);
  } catch (e) {
    res.json({});
    next();
  }
});

router.get('/details/:id', async (req, res, next) => {
  try {
    const data = await tvTmdb.details(req.query, req.params.id);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/credits/:id', async (req, res, next) => {
  try {
    const data = await tvTmdb.credits(req.query, req.params.id);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/recommendations/:id', async (req, res, next) => {
  try {
    const data = await tvTmdb.recommendations(req.query, req.params.id);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/trending', async (req, res, next) => {
  try {
    const data = await tvTmdb.trending(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/videos/:id', async (req, res, next) => {
  try {
    const data = await tvTmdb.videos(req.query, req.params.id);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});
export default router;
