import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  pw: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const model = mongoose.model('User', userSchema);

export default model;
