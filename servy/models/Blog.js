const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
  {
    blogId: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Must provide a name'],
      trim: true,
      maxLength: [20, 'The name can not exceed 20 chars'],
    },
    author: {
      type: String,
      required: [true, 'Must provide a name'],
      trim: true
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { collection: 'Blogs' }
);

module.exports = mongoose.model('Blog', personSchema);