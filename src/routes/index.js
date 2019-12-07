import express from 'express';
import user from './user';
import movie from './movie';
import comment from './comment';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Passport!');
});
router.use('/user', user);
router.use('/movie', movie);
router.use('/comment', comment);

export default router;
