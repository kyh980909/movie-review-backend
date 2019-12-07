import express from 'express';
import api from './routes';
import logger from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';
const MongoStore = require('connect-mongo')(session);

dotenv.config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    store: new MongoStore({
      url:
        'mongodb+srv://kyh:dydgh5260@movie-review-pfuoh.mongodb.net/movie_review?retryWrites=true&w=majority',
      collection: 'session'
    })
  })
);
app.use('/api', api);

export default app;
