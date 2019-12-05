import express from 'express';
import { WriteReview, ReviewList } from '../controller/movie';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('movie');
});

router.post('/write_review', WriteReview);
router.get('/get_review_list', ReviewList);

export default router;
