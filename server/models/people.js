import mongoose from 'mongoose';

const { Schema } = mongoose;

// To fix https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;

const peopleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
   address: {
    type: String
  },
   qualification: {
    type: String,
    required: true
  },
   occupation: {
    type: String,
    required: true
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('People', peopleSchema);
