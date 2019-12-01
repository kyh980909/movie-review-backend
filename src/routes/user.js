import express from 'express';
import { Register, Login } from '../controller/user';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello');
});

router.post('/register', Register);
router.post('/login', Login);

export default router;
