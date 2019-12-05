import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  writer: { type: String, required },
  review: { type: String, required },
  image: { type: String, required },
  star: { type: Number, min: 0, max: 5 },
  createdAt: { type: Date, default: Date.now }
});

const model = mongoose.model('Movie', movieSchema);

export default model;
