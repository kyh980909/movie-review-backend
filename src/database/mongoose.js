import mongoose from 'mongoose';

mongoose.connect(
  // 'mongodb+srv://kyh:dydgh5260@movie-review-pfuoh.mongodb.net/movie_review?retryWrites=true&w=majority',
  'mongodb://52.78.154.223:27017/movie_review',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log('Database connected!'));
