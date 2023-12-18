const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
  {
    blogId: {
      type: Number
    },
    image: {
      type: String
    },
    title: {
      type: String
    },
    author: {
      type: String
    },
    description: {
      type: String
    },
    content: {
      type: String
    },
  },
  { collection: 'Blogs' }
);

module.exports = mongoose.model('Blog', personSchema);
