import express from 'express';
import { WriteComment, CommentList } from '../controller/comment';

const router = express.Router();

router.post('/write_comment', WriteComment);
router.get('/get_comment_list/:id', CommentList);

export default router;
