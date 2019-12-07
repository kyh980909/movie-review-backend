import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  writer: { type: String, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const movieSchema = new mongoose.Schema({
  writer: { type: String, required: true }, // 작성자
  title: { type: String, required: true }, // 영화명
  date: { type: String, required: true }, // 영화 본 날짜
  ticket: { type: String, required: true }, // 티켓 사진 (base64)
  score: { type: Number, min: 0, max: 5 }, // 평점
  review: { type: String, required: true }, // 리뷰
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now } // 글 작성 시간
});

const model = mongoose.model('Movie', movieSchema);

export default model;
