import express from 'express';
import { Tmdb } from '../tmdb';

const tmdb = new Tmdb();

var router = express.Router();

router.get('/search', async (req, res, next) => {
  try {
    const data = await tmdb.search(req.query);
    res.json(data);
  } catch (e) {
    res.send(e);
    next();
  }
});

export default router;
