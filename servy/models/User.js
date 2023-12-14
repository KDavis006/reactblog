const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: [true, 'Must provide a name'],
      trim: true,
      maxLength: [20, 'The name can not exceed 20 chars'],
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    blogs: {
      type: Array,
      default: [],
    },
  },
  { collection: 'Users' }
);

module.exports = mongoose.model('User', personSchema);
