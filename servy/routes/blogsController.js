const express = require('express');
const router = express.Router();

const {
  readBlogs,
  createBlogs,
  updateBlogs,
  deleteBlog,
} = require('../controllers/blogs');

router.get('/', readBlogs);
router.post('/', createBlogs);
router.put('/:id', updateBlogs);
router.delete('/:id', deleteBlog);

module.exports = router;
