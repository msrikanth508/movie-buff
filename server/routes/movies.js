import express from 'express';
import { MoviesTmdb } from '../tmdb';

const moviesTmdb = new MoviesTmdb();

var router = express.Router();

router.get('/latest', async (req, res, next) => {
  try {
    const data = await moviesTmdb.latest(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/popular', async (req, res, next) => {
  try {
    const data = await moviesTmdb.popular(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/upcoming', async (req, res, next) => {
  try {
    const data = await moviesTmdb.upcoming(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/top', async (req, res, next) => {
  try {
    const data = await moviesTmdb.topRated(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/genre', async (req, res, next) => {
  try {
    const data = await moviesTmdb.genreList(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/details/:id', async (req, res, next) => {
  try {
    const data = await moviesTmdb.details(req.query, req.params.id);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/credits/:id', async (req, res, next) => {
  try {
    const data = await moviesTmdb.credits(req.query, req.params.id);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/recommendations/:id', async (req, res, next) => {
  try {
    const data = await moviesTmdb.recommendations(req.query, req.params.id);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

router.get('/trending', async (req, res, next) => {
  try {
    const data = await moviesTmdb.trending(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

export default router;
