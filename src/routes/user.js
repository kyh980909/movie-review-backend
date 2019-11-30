import express from 'express';
import { Register } from '../controller/user';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('패스포트 모듈 테스트');
});

router.post('/register', Register);

export default router;
