import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  id: { type: String, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const model = mongoose.model('Comment', commentSchema);

export default model;
