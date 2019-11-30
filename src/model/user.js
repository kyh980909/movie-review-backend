import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  pw: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'id' });

const model = mongoose.model('User', userSchema);

export default model;
